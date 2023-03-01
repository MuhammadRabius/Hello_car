import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import Fliter from "./Fliter";
import SearchBar from "../SearchBar/SearchBar";
import "./SearchResult.scss";

const SearchResult = () => {
  const { Meta } = Card;

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
              <Card
                style={{
                  width: 280,
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
        </div>
      </div>
    </>
  );
};

export default SearchResult;
