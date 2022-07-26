import React from 'react';
import '../assets/css/Style.css';
import { NavLink } from 'react-router-dom';
import LogoutButton from "../components/LogoutButton";
import dashboard from "../assets/img/icons8-dashboard-32.png";
import transfer from "../assets/img/icons8-up-arrow-32.png";
import topup from "../assets/img/icons8-plus-32.png";
import profile from "../assets/img/icons8-person-32.png";

function Navbar() {
  return (
    <>
        <nav className="col-md-3 ms-5 p-5 p-md-5 me-5 nav-satu">
        {/* <nav className="col-md-3 d-md-flex ms-5 p-5 p-md-5 me-5 nav-satu d-none"> */}
          <div className="d-flex flex-column parent-div">
            <nav className="nav flex-fill flex-column">
              <NavLink activeClassname="active" className="nav-link dashboard mb-3" to="/Home">
                <img src={dashboard} style={{width: "15%"}} className="img-fluid me-3" alt='Dashboard'/> Dashboard
              </NavLink>
              <NavLink activeClassname="active" className="nav-link transfer-nav mb-3" to="/Transfer1">
                <img src={transfer} style={{width: "15%"}} className="img-fluid me-3" alt='Transfer'/> Transfer
              </NavLink>
              <NavLink activeClassname="active" className="nav-link topup mb-3" to="/Topup">
                <img src={topup} style={{width: "15%"}} className="img-fluid me-3" alt='Top Up'/> Top Up
              </NavLink>
              <NavLink activeClassname="active" className="nav-link profil-nav" to="/Profile1">
                <img src={profile} style={{width: "15%"}} className="img-fluid me-3" alt='profile'/> Profile
              </NavLink>
            </nav>

            <nav className='ms-2'>
              <LogoutButton />
            </nav>
          </div>
        </nav>
    </>
  )
}

export default Navbar