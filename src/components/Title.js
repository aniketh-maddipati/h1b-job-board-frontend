import React from "react";
import "./Title.css";

class Title extends React.Component {
  render() {
    return (
      <div className="title-container">
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">H1-Board</h1>
            <p class="lead">US job postings for Non-Residents</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Title;
