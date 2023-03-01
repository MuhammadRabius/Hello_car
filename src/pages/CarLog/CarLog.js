import React, { useEffect, useState } from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import "./CarLog.scss";
import {
  Button,
  Card,
  Form,
  Input,
  message,
  Modal,
  Pagination,
  Popconfirm,
} from "antd";
import withAuth from "../../auth/withAuth";
import { DeleteCar, DisplayCar, UpdateCar } from "../../API/api";
import { getLocalDate } from "../../global_stage/action";

const CarLog = () => {
  const { Meta } = Card;
  const { TextArea } = Input;

  const [carData, setCarData] = useState([]);
  const [callback, setCallback] = useState(false);
  const [updateId, setId] = useState("");
  console.log("update", carData);
  // modal-----------------------
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = (e, id) => {
    setIsModalOpen(true);
    setId(id);
  };
  const handleOk = () => {};
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // mycar GET------------------

  useEffect(() => {
    // const ac = new AbortController();

    (async () => {
      try {
        const display = await DisplayCar();
        setCarData(display.data.data);
      } catch (err) {
        console.warn(err.message);
      }
    })();

    // return () => ac.abort();
  }, [callback]);

  // Update My car---------------
  const onFinish = async (values) => {
    const payload = {
      carModel: values.carModel,
      sellPrice: values.sellingPrice,
      description: values.description || "",
    };

    try {
      const res = await UpdateCar(updateId, payload);
      message.success(res.data.message);
      setCallback(!callback);
      setIsModalOpen(false);
    } catch (error) {
      message.error(error.res.message);
    }
  };

  // Delete Car-----------------
  const confirm = async (e, id) => {
    console.log("id", id);
    try {
      const res = await DeleteCar(id);
      message.success(res.data.message);
      setCallback(!callback);
    } catch (error) {
      message.error("Something went wrong");
    }
  };
  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };

  return (
    <>
      <div className="car_log_page">
        <div className="banner">
          <h2>Your Cars Activities Log </h2> <hr />
        </div>
        <div className="innerContent">
          {carData.map((item, i) => {
            return (
              <>
                <Card
                  style={{
                    width: 300,
                  }}
                  cover={
                    <img
                      alt="carimage"
                      src={
                        item.image === ""
                          ? `https://i.ibb.co/wyDzzLm/Car-01-1.jpg`
                          : item.image
                      }
                    />
                  }
                  actions={[
                    <EditOutlined
                      key="edit"
                      onClick={(e) => showModal(e, item._id)}
                    />,

                    <Popconfirm
                      title="Are you sure to delete this Car?"
                      onConfirm={(e) => confirm(e, item._id)}
                      onCancel={cancel}
                      okText="Yes"
                      cancelText="No"
                    >
                      <CloseOutlined key="closeout" />
                    </Popconfirm>,
                  ]}
                >
                  <Meta title={`Card Brand  : ${item.brandName}`} />
                  <p>Car Model : ${item.carModel}</p>
                  <p> Release Date : {getLocalDate(item.releaseDate)}</p>
                  <p>Buying Price : ${item.buyingPrice}</p>
                  <p>Sell Price Price : ${item.sellPrice}</p>
                  <p>Description : ${item.description}</p>
                </Card>
              </>
            );
          })}
          ;
        </div>

        {/* Add Pagination */}
        <Pagination
          style={{ marginBottom: "20px", textAlign: "end" }}
          defaultCurrent={1}
          pageSize={6}
          total={carData.length}
        />

        <div className="modal">
          {/* Modal For Update Data */}
          <Modal
            title={`Update Your Car `}
            open={isModalOpen}
            onCancel={handleCancel}
            footer={null}
          >
            <Form
              layout="vertical"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item
                label="Update Car Model"
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
                label=" Update Selling Price"
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

              <Form.Item label="Description" name="description">
                <TextArea
                  type="textarea"
                  placeholder="Please Add Description"
                />
              </Form.Item>

              <Form.Item style={{ textAlign: "center" }}>
                <Button type="primary" htmlType="submit">
                  Update Car
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default withAuth(CarLog);
