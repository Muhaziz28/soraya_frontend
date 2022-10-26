import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navbar = document.querySelector(".col-navbar");
  const cover = document.querySelector(".screen-cover");
  const { user } = useSelector((state) => state.auth);

  function toggleNavbar() {
    navbar.classList.toggle("d-none");
    cover.classList.toggle("d-none");
  }
  return (
    <div className="nav">
      <div className="d-flex justify-content-between align-items-center w-100 mb-3 mb-md-0">
        <div className="d-flex justify-content-start align-items-center">
          <button id="toggle-navbar" onClick={toggleNavbar}>
            <img src="./assets/img/global/burger.svg" className="mb-2" alt="" />
          </button>
          <h2 className="nav-title">
            Welcome, {user && user.payload.datas.name}
          </h2>
        </div>
        <button className="btn-notif d-block d-md-none">
          <img src="./assets/img/global/bell.svg" alt="" />
        </button>
      </div>

      <div className="d-flex justify-content-between align-items-center nav-input-container">
        <div className="nav-input-group">
          <input
            type="text"
            className="nav-input"
            placeholder="Search people, team, project"
          />
          <button className="btn-nav-input">
            <img src="./assets/img/global/search.svg" alt="" />
          </button>
        </div>

        <button type="button" className="btn-notif d-none d-md-block">
          <img src="./assets/img/global/bell.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
