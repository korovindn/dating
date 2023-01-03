import { Form, Input, Select, Upload } from "antd";
import { Photos } from "../Photos/Photos";
import {PlusOutlined} from '@ant-design/icons'

export const EditForm: React.FC = () => {
  return (
    <Form layout="vertical">
      <h1>Profile</h1>
      <Form.Item label="Photo">
        <Photos/>
      </Form.Item>
      <Form.Item label="Name">
        <Input placeholder="Enter Name" />
      </Form.Item>
      <Form.Item label="Interests">
        <Select mode="multiple" allowClear placeholder="Select Interests" />
      </Form.Item>
      <Form.Item label="About me">
        <Input.TextArea
          placeholder="Tell something about yourself!"
          autoSize={{ minRows: 2 }}
        />
      </Form.Item>
    </Form>
  );
};
