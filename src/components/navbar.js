import React from "react";
import "./NavBar.css";

const navbar = () => {
  return (
    <div>
      <nav className="navbar w-100 navbar-expand-lg navbar-light ">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">
          <img
            src="https://img.icons8.com/pastel-glyph/64/000000/open-envelope--v2.png"
            alt=""
          ></img>
        </a>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                <img
                  src="https://img.icons8.com/pastel-glyph/128/000000/user-male--v1.png"
                  className="rounded-circle"
                  alt=""
                ></img>
                {/* User <span class="sr-only">(current)</span> */}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default navbar;
