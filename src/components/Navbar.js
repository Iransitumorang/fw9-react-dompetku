import React from 'react'

function Navbar() {
  return (
    <>
        <nav class="col-md-3 d-md-flex me-4 p-5 nav-satu d-none">
      <div class="d-flex flex-column parent-div">
        <nav class="nav flex-fill flex-column">
          <a class="nav-link dashboard mb-3" href="/ibootstrap/dashboard/home.html">
            <img src="../assets/images/home/grid.png" class="img-fluid me-3"/> Dashboard
          </a>
          <a class="nav-link transfer-nav mb-3" href="/ibootstrap/dashboard/transfer1.html">
            <img src="../assets/images/home/arrow-up.png" class="img-fluid me-3"/> Transfer
          </a>
          <a class="nav-link topup mb-3" href="/ibootstrap/dashboard/topup.html">
            <img src="../assets/images/home/plus.png" class="img-fluid me-3"/> Top Up
          </a>
          <a class="nav-link profil-nav" href="/ibootstrap/dashboard/profile1.html">
            <img src="../assets/images/home/Group 40.png" class="img-fluid"/>
          </a>
        </nav>

        <nav class="nav d-flex flex-end">
          <a class="nav-link logout-nav" href="/ibootstrap/dashboard/home.html">
            <img src="../assets/images/home/log-out.png" class="img-fluid me-3"/> Logout
          </a>
        </nav>
      </div>
    </nav>
    </>
  )
}

export default Navbar