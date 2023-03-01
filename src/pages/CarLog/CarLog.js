import React, { useEffect, useState } from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  CloseOutlined,
  PlusSquareFilled,
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
  Tag,
  Tooltip,
} from "antd";
import withAuth from "../../auth/withAuth";
import { DeleteCar, DisplayCar, UpdateCar, updateOffer } from "../../API/api";
import { getLocalDate } from "../../global_stage/action";

const CarLog = () => {
  const { Meta } = Card;
  const { TextArea } = Input;
  // State Management
  const [carData, setCarData] = useState([]);
  const [callback, setCallback] = useState(false);
  const [updateId, setId] = useState("");
  const [off__Id, setOffId] = useState("");
  console.log("update", carData);
  // modal-----------------------
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [offerModal, setOfferModal] = useState(false);
  const handleCancel = () => {
    setIsModalOpen(false);
    setOfferModal(false);
  };

  // Update Car Modal Schema---
  const showModal = (e, id) => {
    setIsModalOpen(true);
    setId(id);
  };

  // Update Car Modal Schema---
  const offerSetModal = (e, id) => {
    setOfferModal(true);
    setOffId(id);
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

  // Set Offer -----------------------
  const onOfferForm = async (values) => {
    const payload = {
      offerPrice: values.offerPrice,
    };

    try {
      const res = await updateOffer(off__Id, payload);
      message.success(res.data.message);
      setCallback(!callback);
      setOfferModal(false);
    } catch (error) {
      message.error(error.res.message);
    }
  };

  return (
    <>
      <div className="car_log_page">
        <div className="banner">
          <h2>Your Cars Activities Log </h2> <hr />
        </div>
        <div className="innerContent">
          {/* Card for user car */}
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
                    <Tooltip title="Update Your Car Info">
                      <EditOutlined
                        key="edit"
                        onClick={(e) => showModal(e, item._id)}
                      />
                    </Tooltip>,
                    <Tooltip title="Delete Your Car">
                      <Popconfirm
                        title="Are you sure to delete this Car?"
                        onConfirm={(e) => confirm(e, item._id)}
                        okText="Yes"
                        cancelText="No"
                      >
                        <CloseOutlined key="closeout" />
                      </Popconfirm>
                    </Tooltip>,

                    <Tooltip title="Update Your Offer">
                      <span>
                        <PlusSquareFilled
                          onClick={(e) => offerSetModal(e, item._id)}
                          style={{ marginLeft: "5px" }}
                        />
                      </span>
                    </Tooltip>,
                  ]}
                >
                  <Meta title={`Card Brand  : ${item.brandName}`} />
                  <p className="text_group">Car Model : ${item.carModel}</p>
                  <p className="text_group">
                    Release Date : {getLocalDate(item.releaseDate)}
                  </p>
                  <p className="text_group">
                    Buying Price : <Tag color="#2db7f5">{item.buyingPrice}</Tag>
                  </p>
                  <p className="text_group">
                    Selling Price :
                    {item.offerPrice ? (
                      <Tag color="red">
                        <del>{item.sellPrice}</del>
                      </Tag>
                    ) : (
                      <Tag color="#87d068">{item.sellPrice}</Tag>
                    )}
                  </p>

                  <p className="text_group">
                    Offer Price :
                    {item.offerPrice ? (
                      <Tag color="#87d068">{item.offerPrice}</Tag>
                    ) : (
                      "Not Set Yet!!"
                    )}
                  </p>
                  <p className="text_group">
                    Description : ${item.description}
                  </p>
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
        {/* Modal For Update Data */}
        <div className="modal">
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

        {/* Modal For Offer */}
        <div className="modal">
          <Modal
            title={`Set Your Offer For This Car`}
            open={offerModal}
            onCancel={handleCancel}
            footer={null}
          >
            <Form
              layout="vertical"
              initialValues={{
                remember: true,
              }}
              onFinish={onOfferForm}
              autoComplete="off"
            >
              <Form.Item
                label="Update Offer"
                name="offerPrice"
                rules={[
                  {
                    required: true,
                    message: "Please input your Offer Price!",
                  },
                ]}
              >
                <Input type="number" />
              </Form.Item>

              <Form.Item style={{ textAlign: "center" }}>
                <Button type="primary" htmlType="submit">
                  Update Offer
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        </div>
        {/* ---- */}
      </div>
    </>
  );
};

export default withAuth(CarLog);
