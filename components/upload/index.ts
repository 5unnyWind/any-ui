import type { UploadProps } from './upload';
import InternalUpload, { LIST_IGNORE } from './upload';

export type {
  RcFile,
  UploadChangeParam,
  UploadFile,
  UploadListProps,
  UploadProps,
} from './interface';

type InternalUploadType = typeof InternalUpload;
type CompoundedComponent<T = any> = InternalUploadType & {
  <U extends T>(
    props: React.PropsWithChildren<UploadProps<U>> & React.RefAttributes<any>,
  ): React.ReactElement;
  LIST_IGNORE: string;
};

const Upload = InternalUpload as CompoundedComponent;
Upload.LIST_IGNORE = LIST_IGNORE;

export default Upload;