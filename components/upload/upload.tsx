/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import type {
  UploadProps,
  RcFile,
  ShowUploadListInterface,
  UploadChangeParam,
  UploadFile,
} from "./interface";
import type { UploadProps as RcUploadProps } from "rc-upload";
import RcUpload from "rc-upload";
import { flushSync } from "react-dom";
import classNames from "classnames";
import useMergedState from "rc-util/lib/hooks/useMergedState";
import ReactLoading from "react-loading";

import { file2Obj, getFileItem, removeFileItem, updateFileList } from "./utils";

export { UploadProps };
export const LIST_IGNORE = `__LIST_IGNORE_${Date.now()}__`;

const InternalUpload: React.ForwardRefRenderFunction<unknown, UploadProps> = (
  props
) => {
  const {
    fileList,
    defaultFileList,
    showUploadList = true,
    onChange,
    className,
    children,
    maxCount,
    data = {},
    multiple = false,
    action = "",
    accept = "",
    supportServerRender = true,
  } = props;

  const upload = React.useRef<RcUpload>(null);
  const [uploadState, setUploadState] = React.useState("");
  const [mergedFileList, setMergedFileList] = useMergedState(
    defaultFileList || [],
    {
      value: fileList,
      postState: (list) => list ?? [],
    }
  );

  const onInternalChange = (
    file: UploadFile,
    changedFileList: UploadFile[],
    event?: { percent: number }
  ) => {
    let cloneList = [...changedFileList];

    // Cut to match count
    if (maxCount === 1) {
      cloneList = cloneList.slice(-1);
    } else if (maxCount) {
      cloneList = cloneList.slice(0, maxCount);
    }

    // Prevent React18 auto batch since input[upload] trigger process at same time
    // which makes fileList closure problem
    flushSync(() => {
      setMergedFileList(cloneList);
    });

    const changeInfo: UploadChangeParam<UploadFile> = {
      file: file as UploadFile,
      fileList: cloneList,
    };

    if (event) {
      changeInfo.event = event;
    }

    onChange?.(changeInfo);
  };

  const onBatchStart: RcUploadProps["onBatchStart"] = (batchFileInfoList) => {
    // Skip file which marked as `LIST_IGNORE`, these file will not add to file list
    const filteredFileInfoList = batchFileInfoList.filter(
      (info) => !(info.file as any)[LIST_IGNORE]
    );

    // Nothing to do since no file need upload
    if (!filteredFileInfoList.length) {
      return;
    }

    const objectFileList = filteredFileInfoList.map((info) =>
      file2Obj(info.file as RcFile)
    );

    // Concat new files with prev files
    let newFileList = [...mergedFileList];

    objectFileList.forEach((fileObj) => {
      // Replace file if exist
      newFileList = updateFileList(fileObj, newFileList);
    });

    objectFileList.forEach((fileObj, index) => {
      // Repeat trigger `onChange` event for compatible
      let triggerFileObj: UploadFile = fileObj;

      if (!filteredFileInfoList[index].parsedFile) {
        // `beforeUpload` return false
        const { originFileObj } = fileObj;
        let clone;

        try {
          clone = new File([originFileObj], originFileObj.name, {
            type: originFileObj.type,
          }) as any as UploadFile;
        } catch (e) {
          clone = new Blob([originFileObj], {
            type: originFileObj.type,
          }) as any as UploadFile;
          clone.name = originFileObj.name;
          clone.lastModifiedDate = new Date();
          clone.lastModified = new Date().getTime();
        }

        clone.uid = fileObj.uid;
        triggerFileObj = clone;
      } else {
        // Inject `uploading` status
        fileObj.status = "uploading";
      }
      setUploadState("上传中");
      onInternalChange(triggerFileObj, newFileList);
    });
  };

  const onSuccess = (response: any, file: RcFile, xhr: any) => {
    try {
      if (typeof response === "string") {
        // eslint-disable-next-line no-param-reassign
        response = JSON.parse(response);
      }
    } catch (e) {
      /* do nothing */
    }

    // removed
    if (!getFileItem(file, mergedFileList)) {
      return;
    }

    const targetItem = file2Obj(file);
    targetItem.status = "done";
    targetItem.percent = 100;
    targetItem.response = response;
    targetItem.xhr = xhr;

    const nextFileList = updateFileList(targetItem, mergedFileList);
    setUploadState("上传成功");
    onInternalChange(targetItem, nextFileList);
  };

  const onError = (error: Error, response: any, file: RcFile) => {
    // removed
    if (!getFileItem(file, mergedFileList)) {
      return;
    }

    const targetItem = file2Obj(file);
    targetItem.error = error;
    targetItem.response = response;
    targetItem.status = "error";
    setUploadState("上传失败");
    const nextFileList = updateFileList(targetItem, mergedFileList);

    onInternalChange(targetItem, nextFileList);
  };

  const onProgress = (e: { percent: number }, file: RcFile) => {
    // removed
    if (!getFileItem(file, mergedFileList)) {
      return;
    }

    const targetItem = file2Obj(file);
    targetItem.status = "uploading";
    targetItem.percent = e.percent;
    setUploadState("上传中");
    const nextFileList = updateFileList(targetItem, mergedFileList);

    onInternalChange(targetItem, nextFileList, e);
  };

  const mergedBeforeUpload = async (file: RcFile, fileListArgs: RcFile[]) => {
    const { beforeUpload, transformFile } = props;

    let parsedFile: File | Blob | string = file;
    if (beforeUpload) {
      const result = await beforeUpload(file, fileListArgs);

      if (result === false) {
        return false;
      }

      // Hack for LIST_IGNORE, we add additional info to remove from the list
      delete (file as any)[LIST_IGNORE];
      if ((result as any) === LIST_IGNORE) {
        Object.defineProperty(file, LIST_IGNORE, {
          value: true,
          configurable: true,
        });
        return false;
      }

      if (typeof result === "object" && result) {
        parsedFile = result as File;
      }
    }

    if (transformFile) {
      parsedFile = await transformFile(parsedFile as any);
    }

    return parsedFile as RcFile;
  };

  const rcUploadProps = {
    onBatchStart,
    onError,
    onProgress,
    onSuccess,
    ...props,
    data,
    multiple,
    action,
    accept,
    supportServerRender,
    // disabled: mergedDisabled,
    beforeUpload: mergedBeforeUpload,
    onChange: undefined,
  } as unknown as RcUploadProps;

  const renderUploadButton = (uploadButtonStyle?: React.CSSProperties) => (
    <div style={uploadButtonStyle}>
      <RcUpload {...rcUploadProps} ref={upload} />
    </div>
  );

  const uploadButton = renderUploadButton(
    children ? undefined : { display: "none" }
  );

  const renderUploadState = () => {
    if (uploadState) {
      return (
        <>
          {uploadState === "上传中" ? (
            <ReactLoading color={"#367edd"} width={25} />
          ) : (
            <p
              style={{
                fontSize: "0.875rem",
                lineHeight: ".8rem",
                fontWeight: "600",
              }}
            >
              {uploadState}
            </p>
          )}
        </>
      );
    }
    return null;
  };

  return (
    <span className={classNames(`ai-wrapper`, className)}>
      {uploadButton}
      {renderUploadState()}
    </span>
  );
};
const Upload = React.forwardRef<unknown, UploadProps>(InternalUpload);
export default Upload;
