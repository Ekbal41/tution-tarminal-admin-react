import React from "react";
import Logo from "../../assets/logo.svg";
import UserImage from "../../assets/user.svg";
function Navbar({ setNotOpen, notOpen }) {

  const menuClick = () => {
    setNotOpen(!notOpen)
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white t-navbar fixed-top">
        <div className="container-fluid d-flex justify-content-between">
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="logo" />
          </a>
          <div className="mx-2 d-md-none" onClick={menuClick}>
            <i style={{
              color: "#7fc343",
            }} className="bi bi-menu-button-wide"></i>
          </div>

          <div className="mx-3 d-none d-md-block">
            <div className="d-flex justify-content-between align-content-center mt-2">
              <div className="">
                <img
                  style={{
                    height: 30,
                  }}
                  src={UserImage}
                />
              </div>
              <div className="mx-2 mt-1">
                <p>Asif Ekbal</p>
              </div>
              <div className=" mt-1">
                <i className="bi bi-caret-down-fill"></i>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
