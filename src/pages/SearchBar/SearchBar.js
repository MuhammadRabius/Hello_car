import { Button, Input, Radio, Select } from "antd";
import React, { useState } from "react";
import { CarList } from "../../archive_data/CarList";
import "./SearchBar.scss";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [brand, setCBrand] = useState("");
  const [value, setValue] = useState(4);
  const [minp, setMinP] = useState(0);
  const [maxp, setmaxP] = useState(0);
  // Brand Select
  const onChange = (value) => {
    setCBrand(value);
  };
  //   Sets Select

  const onChangeSet = (e) => {
    setValue(e.target.value);
  };
  // price--

  const minPriceHandle = (e) => {
    setMinP(e);
  };
  const maxPriceHandle = (e) => {
    setmaxP(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchPath = `/search/searchresult?carModel=${brand}&sets=${value}&minPrice=${minp}&maxPrice=${maxp}`;
    navigate(searchPath);
  };
  return (
    <>
      <div className="search_bar_page">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="search_bar_inner">
              <div className="box">
                <label htmlFor="brand">Brand</label>
                <Select
                  require
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
                <Radio.Group onChange={onChangeSet} value={value} require>
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
                    require
                  />
                  <Input
                    onChange={(e) => maxPriceHandle(e.target.value)}
                    type="number"
                    placeholder="max"
                    required
                  />
                </div>
              </div>
              {/* <div className="box">
              <h1>Date Rage</h1>
            </div> */}
              <Button type="primary" htmlFor="submit" onClick={handleSubmit}>
                Search
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
