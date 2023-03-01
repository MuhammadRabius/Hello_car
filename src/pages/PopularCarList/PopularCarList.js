import { Card, Pagination, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { DisplayCar } from "../../API/api";
import { getLocalDate } from "../../global_stage/action";
import "./PopularCarList.scss";

const PopularCarList = () => {
  const { Meta } = Card;
  const [carData, setCarData] = useState([]);

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
  }, []);
  return (
    <>
      <div className="popular_search_page">
        <div className="container">
          <div className="title_banner">
            <h2 className="text_content">Popular Search</h2>
            <hr />
          </div>
          <div className="innerContent">
            {/* Card for user car */}
            {carData.map((item, i) => {
              return (
                <>
                  <Card
                    style={{
                      width: 280,
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
                  >
                    <Meta title={`Card Brand  : ${item.brandName}`} />
                    <p className="text_group">Car Model : ${item.carModel}</p>
                    <p className="text_group">
                      Release Date : {getLocalDate(item.releaseDate)}
                    </p>
                  </Card>
                </>
              );
            })}
          </div>
          {/* Add Pagination */}
          <Pagination
            style={{ marginBottom: "20px", textAlign: "end" }}
            defaultCurrent={1}
            pageSize={4}
            total={carData.length}
          />
        </div>
      </div>
    </>
  );
};

export default PopularCarList;
