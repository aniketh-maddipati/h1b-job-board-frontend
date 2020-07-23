import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="searchbar d-flex align-items-center ">
        <form className="form-inline justify-content-center">
          <input
            className="w-50 form-control form-control-lg mr-sm-2"
            type="search"
            placeholder="Job Title, Location, etc."
            aria-label="Search"
          ></input>
          <button
            class="btn btn-lg btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
