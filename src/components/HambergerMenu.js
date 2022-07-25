import React from 'react'

function HambergerMenu() {
  return (
    <>
        {/* <!-- HAMBURGER MENU === HAMBURGER MENU --> */}
    <div class="navbar bg-light fixed-top d-md-none d-block">
      {/* <div class="container-fluid"> */}
      <div>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar">
          <div class="container-fluid">
            <img src="../../assets/img/dompetku2.png" class="w-25 me-3 img-fluid" alt='Logo'/>
            <img src="../assets/images/home-header.png" class="img-fluid" alt='Logo'/>
            <span class="navbar-toggler-icon"></span>
          </div>
        </button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            {/* <!-- <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Dompetku</h5> --> */}
            <img src="../../assets/img/dompetku2.png" class="w-25 img-fluid" alt='dompetku'/>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <div class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <nav class="col-12 col-md-4 d-flex me-4 p-5 nav-header">
                <div class="d-md-flex flex-row flex-md-column side-menu">
                  <div class="d-flex flex-column parent-div">
                    <nav class="nav d-flex flex-fill flex-column">
                      <a class="nav-link dashboard mb-3" href="/ibootstrap/dashboard/home.html">
                        <img src="../assets/images/home/grid.png" class="img-fluid me-3" alt='' /> Dashboard
                      </a>
                      <a class="nav-link transfer-nav mb-3" href="/ibootstrap/dashboard/transfer1.html">
                        <img src="../assets/images/home/arrow-up.png" class="img-fluid me-3" alt='' /> Transfer
                      </a>
                      <a class="nav-link topup mb-3" href="/ibootstrap/dashboard/topup.html">
                        <img src="../assets/images/home/plus.png" class="img-fluid me-3" alt='' /> Top Up
                      </a>
                      <a class="nav-link profil-nav mb-3" href="/ibootstrap/dashboard/profile1.html">
                        <img src="../assets/images/home/Group 40.png" class="img-fluid" alt='' />
                      </a>
                    </nav>

                    <nav class="nav mt-5">
                      <a class="nav-link logout-nav" href="/ibootstrap/dashboard/home.html">
                        <img src="../assets/images/home/log-out.png" class="img-fluid me-3" alt='' /> Logout
                      </a>
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