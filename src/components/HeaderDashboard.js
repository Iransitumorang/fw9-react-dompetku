import React from 'react';
import dompetku2 from "../assets/img/dompetku2.png";
import right from "../assets/img/home-header.png";
import { Link } from 'react-router-dom';

function HeaderDashboard() {
  return (
    <header className="header-dashboard d-md-flex justify-content-between d-none mb-5 pe-3 py-2">
        <div className="container-fluid d-flex justify-content-between">
          <Link to="/">
            <img src={dompetku2} className="img-fluid" style={{maxWidth: "75%"}} alt="Logo"/>
          </Link>
            <img src={right} alt='Brand' className="notif-modal img-fluid" data-bs-toggle="modal" data-bs-target="#exampleModal"/>
        </div>
    </header>
  )
}

export default HeaderDashboard
