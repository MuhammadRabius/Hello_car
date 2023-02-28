import React from "react";
import Search from "../../component/SearchComp/Search";
import Offer from "../Offer/Offer";
import PopularCarList from "../PopularCarList/PopularCarList";

const Home = () => {
  return (
    <>
      <Search />
      <PopularCarList />
      <Offer />
    </>
  );
};

export default Home;
