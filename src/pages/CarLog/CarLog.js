import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "./CarLog.scss";
import { Avatar, Card } from "antd";

const CarLog = () => {
  const { Meta } = Card;
  return (
    <>
      <div className="car_log_page">
        <div className="banner">
          <h2>Your Cars Activities Log </h2> <hr />
        </div>
        <div className="innerContent">
          <Card
            style={{
              width: 300,
            }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
              title="Card title"
              description="This is the description"
            />
          </Card>
        </div>
      </div>
    </>
  );
};

export default CarLog;
