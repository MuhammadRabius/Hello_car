import { Button, Input, Radio, Select } from "antd";
import React, { useState } from "react";
import { CarList } from "../../archive_data/CarList";
import "./SearchBar.scss";

const SearchBar = () => {
  // Brand Select
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };

  //   Sets Select
  const [value, setValue] = useState(4);
  const onChangeSet = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  // price--

  const minPriceHandle = (e) => {
    console.log("price", e);
  };
  const maxPriceHandle = (e) => {
    console.log("price", e);
  };
  return (
    <>
      <div className="search_bar_page">
        <div className="container">
          <div className="search_bar_inner">
            <div className="box">
              <label htmlFor="brand">Brand</label>
              <Select
                showSearch
                style={{
                  width: 200,
                }}
                placeholder="Select Brand"
                optionFilterProp="children"
                onChange={onChange}
                name="brand"
                id="brand"
              >
                {CarList.map((item, i) => {
                  return (
                    <Select.Option key={i} value={item.name}>
                      {item.name}
                    </Select.Option>
                  );
                })}
              </Select>
            </div>
            <div className="box">
              <label htmlFor="brand">Sets</label>
              <Radio.Group onChange={onChangeSet} value={value}>
                <Radio value={2}>2</Radio>
                <Radio value={4}>4</Radio>
                <Radio value={6}>6</Radio>
                <Radio value={8}>8</Radio>
              </Radio.Group>
            </div>
            <div className="box">
              <label htmlFor="brand">Price</label>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignContent: "center",
                  gap: "10px",
                }}
                className="price_input"
              >
                <Input
                  onChange={(e) => minPriceHandle(e.target.value)}
                  type="number"
                  placeholder="min"
                ></Input>
                <Input
                  onChange={(e) => maxPriceHandle(e.target.value)}
                  type="number"
                  placeholder="max"
                ></Input>
              </div>
            </div>
            {/* <div className="box">
              <h1>Date Rage</h1>
            </div> */}
            <Button type="primary">Search</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
