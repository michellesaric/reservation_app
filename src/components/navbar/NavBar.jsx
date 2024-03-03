import userIcon from "../../assets/UserIcon.png";

const NavBar = () => {
  return (
    <nav className="nav">
      <div className="nav__wrapper">
        <h4 className="nav__logo">Apartments App</h4>
        <img src={userIcon} alt="user logo" className="nav__user-icon" />
      </div>
    </nav>
  );
};

export default NavBar;
