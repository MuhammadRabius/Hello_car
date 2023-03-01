import { Button, Input, Radio, Select } from "antd";
import React, { useEffect, useState } from "react";
import { CarList } from "../../archive_data/CarList";
import "./SearchBar.scss";
import { useNavigate } from "react-router-dom";
import { IsToken } from "./../../global_stage/action";
import { DisplayCar } from "../../API/api";

const SearchBar = () => {
  const navigate = useNavigate();
  const [brand, setCBrand] = useState("BMW");
  const [value, setValue] = useState(4);
  const [minP, setMinP] = useState(100000);
  const [maxP, setMaxP] = useState(500000);

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

  // route path checking
  const isSearchPage =
    window.location.pathname === "/dashboard/undefined" ||
    window.location.pathname === "/dashboard/search/searchresult";

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
    setMaxP(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchPath = `${
      isSearchPage ? "/dashboard/search/searchresult" : "/search/searchresult"
    }/?carModel=${brand}&sets=${value}&minP=${minP}&maxP=${maxP}`;

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
                  showSearch
                  // style={{
                  //   width: 200,
                  // }}
                  defaultValue="BMW"
                  placeholder="Select Brand"
                  optionFilterProp="children"
                  onChange={onChange}
                  name="brand"
                  id="brand"
                >
                  {carData.map((item, i) => {
                    return (
                      <Select.Option key={i} value={item.brandName}>
                        {item.brandName}
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
                  <Radio value={10}>10</Radio>
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
                  />
                  --
                  <Input
                    onChange={(e) => maxPriceHandle(e.target.value)}
                    type="number"
                    placeholder="max"
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
