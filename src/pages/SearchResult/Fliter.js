import React from "react";
import qrStr from "query-string";
import { Card, Checkbox } from "antd";
import "./Filter.scss";

const Fliter = () => {
  const params = window.location.search;
  const { carModel, sets, minP, maxP } = qrStr.parse(params);
  console.log(carModel, sets, minP, maxP);
  return (
    <>
      <div className="filter_page">
        <Card
          title="Filter"
          style={{
            width: 250,
          }}
        >
          <div className="label_opt">
            <div className="search_opt">
              <label>Car </label> <hr />
              <Checkbox className="search_text" checked>
                {carModel}
              </Checkbox>
            </div>
            <div className="search_opt">
              <label>
                Model <hr />
              </label>
              <Checkbox className="search_text"></Checkbox>
              <span className="search_text"></span>
            </div>

            <div className="search_opt">
              <label>
                Release Year <hr />
              </label>
              <Checkbox className="search_text"></Checkbox>
              <span className="search_text"></span>
            </div>

            <div className="search_opt">
              <label>
                Set Size <hr />
              </label>
              <Checkbox className="search_text" checked>
                {sets}
              </Checkbox>
              <span className="search_text"></span>
            </div>

            <div className="search_opt">
              <label> Minimum Price </label>
              <hr />
              <Checkbox className="search_text" checked>
                Min: {minP}
              </Checkbox>
            </div>
            <div className="search_opt">
              <label> Maximum Price </label>
              <hr />
              <Checkbox className="search_text" checked>
                Max:{maxP}
              </Checkbox>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Fliter;
