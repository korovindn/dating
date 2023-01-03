import { Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";

export const Photos: React.FC = () => {
  return (
    <Upload listType="picture-card">
      <div>
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    </Upload>
  );
};
