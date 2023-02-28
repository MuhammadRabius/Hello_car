import React from "react";
import qrStr from "query-string";
import { Card } from "antd";
import "./Filter.scss";

const Fliter = () => {
  const params = window.location.search;
  const { carModel, sets, minP, maxP } = qrStr.parse(params);
  console.log(carModel, sets, minP, maxP);
  return (
    <>
      <div className="filter_page">
        <Card
          style={{
            width: 300,
          }}
        >
          <div className="label_opt">
            <div className="search_opt">
              <label>Car </label> <hr />
              <span className="search_text">{carModel}</span>
            </div>
            <div className="search_opt">
              <label> Set Size </label>
              <hr />
              <span className="search_text">{sets}</span>
            </div>
            <div className="search_opt">
              <label> Price </label>
              <hr />
              <span className="search_text">
                Min: {minP} ------ Max:{maxP}
              </span>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Fliter;
