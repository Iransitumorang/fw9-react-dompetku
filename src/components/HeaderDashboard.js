import React from 'react';
import dompetku2 from "../assets/img/dompetku2.png";
import right from "../assets/img/home-header.png";

function HeaderDashboard() {
  return (
    <header className="header-dashboard d-md-flex justify-content-between d-none mb-5 pe-3 py-2">
        <div className="container-fluid d-flex justify-content-between">
            <img src={dompetku2} className="img-fluid" style={{maxWidth: "13%"}} alt="Logo"/>
            <img src={right} alt='Brand' className="notif-modal img-fluid" data-bs-toggle="modal" data-bs-target="#exampleModal"/>
        </div>
    </header>
  )
}

export default HeaderDashboard
