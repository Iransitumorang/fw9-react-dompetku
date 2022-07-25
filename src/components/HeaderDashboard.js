import React from 'react';
import dompetku2 from "../assets/img/dompetku2.png";
import right from "../assets/img/home-header.png";

function HeaderDashboard() {
  return (
    <>
    <header class="navbar d-md-block d-none mb-5 pe-3">
        <div class="container-fluid">
            <img src={dompetku2} class="img-fluid" style={{maxWidth: "13%"}} alt="Logo"/>
            <img src={right} class="img-fluid" alt='Brand'/>
        </div>
    </header>
    </>
  )
}

export default HeaderDashboard
