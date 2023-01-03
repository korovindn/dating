import { Button, Form, Input, Radio, Slider } from "antd";

export const SettingsForm: React.FC = () => {
  return (
    <Form layout="vertical">
      <h1>Settings</h1>
      <Form.Item label="Email">
        <Input placeholder="Enter Email" />
      </Form.Item>
      <Form.Item label="Password">
        <Button>Change Password</Button>
      </Form.Item>
      <Form.Item label="Show Me">
        <Radio>Men</Radio>
        <Radio>Women</Radio>
      </Form.Item>
      <Form.Item label="Distance">
        <Slider range></Slider>
      </Form.Item>
    </Form>
  );
};
