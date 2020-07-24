import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="searchbar d-flex align-items-center ">
        <form className="form-inline justify-content-center">
          <input
            className="w-75 form-control form-control-lg mr-sm-2"
            type="search"
            placeholder="Job Title, Location, etc."
            aria-label="Search"
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Job Title, Location, etc.")}
          ></input>
        </form>
      </div>
    );
  }
}

export default SearchBar;
