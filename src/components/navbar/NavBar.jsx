import React from "react";
import userIcon from "../../assets/UserIcon.png";
import SearchBar from "../searchbar/SearchBar";

const NavBar = () => {
  return (
    <nav className="nav">
      <div className="nav__wrapper">
        <h4 className="nav__logo">Apartments App</h4>
        <img src={userIcon} alt="user logo" className="nav__user-icon" />
      </div>

      <SearchBar />
    </nav>
  );
};

export default NavBar;
