import React from 'react';
import '../assets/css/Style.css';

import dashboard from "../assets/img/icons8-dashboard-32.png";
import transfer from "../assets/img/icons8-up-arrow-32.png";
import topup from "../assets/img/icons8-plus-32.png";
import profile from "../assets/img/icons8-person-32.png";
import logout from "../assets/img/icons8-logout-32.png";

function Navbar() {
  function berubah() {
    document.getElementById("dashboard").style.color = "yellow";
  }
  return (
    <>
        <nav class="col-md-3 d-md-flex ms-5 p-5 p-md-5 nav-satu d-none">
          <div class="d-flex flex-column parent-div">
            <nav class="nav flex-fill flex-column">
              <a onClick={berubah} id="dashboard"  class="nav-link dashboard mb-3" href="/ibootstrap/dashboard/home.html">
                <img src={dashboard} style={{width: "15%"}} class="img-fluid me-3" alt='Dashboard'/> Dashboard
              </a>
              <a class="nav-link transfer-nav mb-3" href="/ibootstrap/dashboard/transfer1.html">
                <img src={transfer} style={{width: "15%"}} class="img-fluid me-3" alt='Transfer'/> Transfer
              </a>
              <a class="nav-link topup mb-3" href="/ibootstrap/dashboard/topup.html">
                <img src={topup} style={{width: "15%"}} class="img-fluid me-3" alt='Top Up'/> Top Up
              </a>
              <a class="nav-link profil-nav" href="/ibootstrap/dashboard/profile1.html">
                <img src={profile} style={{width: "15%"}} class="img-fluid me-3" alt='profile'/> Profile
              </a>
            </nav>

            <nav class="nav d-flex flex-end">
              <a class="nav-link logout-nav ms-1" href="/ibootstrap/dashboard/home.html">
                <img src={logout} style={{width: "15%"}} class="img-fluid me-3" alt='Logout'/> Logout
              </a>
            </nav>
          </div>
        </nav>
    </>
  )
}

export default Navbar