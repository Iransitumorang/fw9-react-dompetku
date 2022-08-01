import React from 'react';
import '../assets/css/Style.css';
import { Link } from 'react-router-dom';
import LogoutButton from "../components/LogoutButton";
import dashboard from "../assets/img/icons8-dashboard-32.png";
import transfer from "../assets/img/icons8-up-arrow-32.png";
import topup from "../assets/img/icons8-plus-32.png";
import profile from "../assets/img/icons8-person-32.png";

function Navbar() {


  function berubah() {
    document.getElementById("dashboard").style.color = "Green";
  }
  return (
    <>
        <nav className="col-md-3 d-md-flex ms-5 p-5 p-md-5 me-5 nav-satu d-none">
          <div className="d-flex flex-column parent-div">
            <nav className="nav flex-fill flex-column">
              <Link onClick={berubah} id="dashboard"  className="nav-link dashboard mb-3" to="/Home">
                <img src={dashboard} style={{width: "15%"}} className="img-fluid me-3" alt='Dashboard'/> Dashboard
              </Link>
              <Link onClick={berubah} className="nav-link transfer-nav mb-3" to="/Transfer1">
                <img src={transfer} style={{width: "15%"}} className="img-fluid me-3" alt='Transfer'/> Transfer
              </Link>
              <Link onClick={berubah} className="nav-link topup mb-3" to="/Topup">
                <img src={topup} style={{width: "15%"}} className="img-fluid me-3" alt='Top Up'/> Top Up
              </Link>
              <Link onClick={berubah} className="nav-link profil-nav" to="/Profile1">
                <img src={profile} style={{width: "15%"}} className="img-fluid me-3" alt='profile'/> Profile
              </Link>
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