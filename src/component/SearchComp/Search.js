import React from "react";
import SearchBar from "../../pages/SearchBar/SearchBar";
import SearchResult from "../../pages/SearchResult/SearchResult";
import "./Search.scss";

const Search = () => {
  return (
    <div>
      <div className="search_page">
        <div className="content_compo">
          <SearchBar />
          <SearchResult />
        </div>
      </div>
    </div>
  );
};

export default Search;
