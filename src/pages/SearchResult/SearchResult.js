import React, { useEffect, useState } from "react";

import { Avatar, Card, Pagination, Tag } from "antd";
import Fliter from "./Fliter";
import SearchBar from "../SearchBar/SearchBar";
import "./SearchResult.scss";
import { getLocalDate } from "../../global_stage/action";
import { DisplayCar } from "../../API/api";

const SearchResult = () => {
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
      <div className="search_result_page">
        <div className="search_bar">
          <SearchBar />
        </div>

        <div className="container">
          <div className="innerContent">
            <div className="filer">
              <Fliter />
            </div>
            <div className="card_result">
              {carData.map((item, i) => {
                return (
                  <>
                    {item.offerPrice ? (
                      <Card
                        key={i}
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
                        <p className="text_group">
                          Car Model : ${item.carModel}
                        </p>
                        <p className="text_group">
                          Release Date : {getLocalDate(item.releaseDate)}
                        </p>
                        <p className="text_group">
                          Buying Price :{" "}
                          <Tag color="#2db7f5">{item.buyingPrice}</Tag>
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
                          Description :
                          {item.description
                            ? `${item.description}`
                            : "No Description"}
                        </p>
                      </Card>
                    ) : null}
                  </>
                );
              })}
            </div>
          </div>
          {/* Add Pagination */}
          <Pagination
            style={{ marginBottom: "20px", textAlign: "end" }}
            defaultCurrent={1}
            pageSize={6}
            total={carData.length}
          />
        </div>
      </div>
    </>
  );
};

export default SearchResult;
