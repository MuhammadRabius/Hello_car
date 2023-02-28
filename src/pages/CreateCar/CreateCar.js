import { Button, Card, Form, Input, Upload } from "antd";
import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import "./CreateCar.scss";

const CreateCar = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onChangeForCarImage = () => {};
  return (
    <>
      <div className="create_car_page">
        
        <div className="innerContent">
          <Card type="inner" title="Create Your Car">
            <Form
              layout="vertical"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Car Brand Name"
                name="carName"
                rules={[
                  {
                    required: true,
                    message: "Please input your Car name!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Car Model"
                name="carModel"
                rules={[
                  {
                    required: true,
                    message: "Please input your Car Model!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Sets"
                name="sets"
                rules={[
                  {
                    required: true,
                    message: "Please input your Car Sets!",
                  },
                ]}
              >
                <Input type="number" />
              </Form.Item>

              <Form.Item
                label="Official Release Data "
                name="releaseDate"
                rules={[
                  {
                    required: true,
                    message: "Please input your Official Release Data!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Buying Price"
                name="buyingPrice"
                rules={[
                  {
                    required: true,
                    message: "Please input your Buying Price!",
                  },
                ]}
              >
                <Input type="number" />
              </Form.Item>

              <Form.Item
                label="Selling Price"
                name="sellingPrice"
                rules={[
                  {
                    required: true,
                    message: "Please input your Selling Price!",
                  },
                ]}
              >
                <Input type="number" />
              </Form.Item>

              <Form.Item
                label="Car Image"
                rules={[
                  {
                    required: true,
                    message: "Please input your Car Image!",
                  },
                ]}
              >
                <Upload onChange={onChangeForCarImage} name="car_image">
                  <Button icon={<UploadOutlined />}>Select Photo</Button>
                </Upload>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Add New Car
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </div>
    </>
  );
};

export default CreateCar;
