import React, { useEffect, useState } from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "./CarLog.scss";
import { Avatar, Card } from "antd";
import withAuth from "../../auth/withAuth";
import { DisplayCar } from "../../API/api";
import { getLocalDate } from "../../global_stage/action";

const CarLog = () => {
  const { Meta } = Card;
  const [carData, setCarData] = useState([]);

  console.log(carData);
  // mycar GET

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
  }, []);

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
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                >
                  <Meta title={`Card Brand  : ${item.brandName}`} />
                  <p>Car Model : ${item.carModel}</p>
                  <p> Release Date : {getLocalDate(item.releaseDate)}</p>
                  <p>Buying Price : ${item.buyingPrice}</p>
                </Card>
              </>
            );
          })}

          
        </div>
      </div>
    </>
  );
};

export default withAuth(CarLog);
