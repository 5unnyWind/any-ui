---
# title: 自定义页面名称
# order: 控制页面顺序，数字越小越靠前，默认以路径长度和字典序排序
nav:
  title: 组件
group:
  title: 数据录入：
---

# Upload

文件选择上传控件

```jsx
import { Upload,Button } from "any-ui";
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
      <Button >Click to Upload</Button>
    </Upload>
  </>
);
```
