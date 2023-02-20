---
# title: 自定义页面名称
# order: 控制页面顺序，数字越小越靠前，默认以路径长度和字典序排序
nav:
  title: 组件
group:
  title: 数据录入：
---

# Upload 上传

文件选择上传控件。

```jsx
import { Upload, Button } from "@any_ui/core";
const props: UploadProps = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      console.log(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      console.error(`${info.file.name} file upload failed.`);
    }
  },
};
export default () => (
  <>
    <h2>上传</h2>
    <Upload {...props}>
      <Button>Click to Upload</Button>
    </Upload>
  </>
);
```

## Upload API

`type UploadType = "drag" | "select";`

`type UploadListType = "text" | "picture" | "picture-card";`

|      参数       |                   说明                   |                         类型                          | 默认值 |
| :-------------: | :--------------------------------------: | :---------------------------------------------------: | :----: |
|      type       |               按钮内容信息               |                     `UploadType`                      |   --   |
|     accept      |            接受上传的文件类型            |                       `string`                        |   --   |
|      name       |           发到后台的文件参数名           |                       `String`                        |   --   |
| defaultFileList |          默认已经上传的文件列表          |                       `String`                        |   --   |
|    fileList     |         已经上传的文件列表（受控         |                       `String`                        |   --   |
|      data       | 上传所需额外参数或返回上传额外参数的方法 |     `object / (file) => object / Promise<object>`     |   --   |
|     action      |                上传的地址                |                       `string `                       |   --   |
|    directory    |              支持上传文件夹              |                       `boolean`                       |   --   |
|     method      |                 上传方式                 | `"POST" / "PUT" / "PATCH" / "post" / "put" / "patch"` |   --   |
|    onChange     |           上传文件改变时的回调           |  `(info: UploadChangeParam<UploadFile<T>>) => void`   |   --   |
|     onDrop      |   当文件被拖入上传区域时执行的回调功能   |  `(event: React.DragEvent<HTMLDivElement>) => void`   |   --   |
|    onPreview    |      点击文件链接或预览图标时的回调      |           `(file: UploadFile<T>) => void;`            |   --   |
