import React from 'react';
import { Link } from 'react-router-dom';
import dashboard from "../assets/img/icons8-dashboard-32.png";
import transfer from "../assets/img/icons8-up-arrow-32.png";
import topup from "../assets/img/icons8-plus-32.png";
import profile from "../assets/img/icons8-person-32.png";
import logout from "../assets/img/icons8-logout-32.png";
import dompetku2 from "../assets/img/dompetku2.png";
import right from "../assets/img/home-header.png";
function HambergerMenu() {
  return (
    <>
    <div className="navbar bg-light fixed-top hamberger-menu" >
    {/* <div className="navbar bg-light fixed-top d-md-none d-block" > */}
      <div>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar">
          <div className="container-fluid">
            <img src={dompetku2} className="w-25 me-3 img-fluid" alt='Logo'/>
            <img src={right} className="img-fluid" alt='Logo'/>
            <span className="navbar-toggler-icon ms-3"></span>
          </div>
        </button>
        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            {/* <!-- <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Dompetku</h5> --> */}
            <img src={dompetku2} className="w-25 img-fluid" alt='dompetku'/>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <div className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <nav className="col-12 col-md-4 d-flex me-4 p-5 nav-header">
                <div className="d-md-flex flex-row flex-md-column side-menu">
                <div className="d-flex flex-column parent-div">
                  <nav className="nav flex-fill flex-column mb-5">
                    <Link id="dashboard"  className="nav-link dashboard mb-3" to="/Home">
                      <img src={dashboard} style={{width: "15%"}} className="img-fluid me-3" alt='Dashboard'/> Dashboard
                    </Link>
                    <Link className="nav-link transfer-nav mb-3" to="/Transfer1">
                      <img src={transfer} style={{width: "15%"}} className="img-fluid me-3" alt='Transfer'/> Transfer
                    </Link>
                    <Link className="nav-link topup mb-3" to="/Topup">
                      <img src={topup} style={{width: "15%"}} className="img-fluid me-3" alt='Top Up'/> Top Up
                    </Link>
                    <Link className="nav-link profil-nav" to="/Profile1">
                      <img src={profile} style={{width: "15%"}} className="img-fluid me-3" alt='profile'/> Profile
                    </Link>
                  </nav>

                  <nav className='ms-3 mt-5'>
                    <Link className="nav-link logout-nav ms-1" to="/">
                      <img src={logout} style={{width: "15%"}} className="img-fluid me-3" alt='Logout'/> Logout
                    </Link>
                  </nav>
          </div>
                </div>
              </nav>
          </div>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default HambergerMenu