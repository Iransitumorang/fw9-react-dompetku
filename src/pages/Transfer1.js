import React from 'react';
import '../assets/css/Style.css';
import HeaderDashboard from '../components/HeaderDashboard';
import FooterDashboard from '../components/FooterDashboard';
import Navbar from '../components/Navbar';
import HambergerMenu from '../components/HambergerMenu';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import contactdashboard from "../assets/img/contacts-dashboard.png";
import contactdashboard1 from "../assets/img/contacts-dashboard-1.png";
import contactdashboard2 from "../assets/img/contacts-dashboard-2.png";
import contactdashboard3 from "../assets/img/contacts-dashboard-3.png";
import search from "../assets/img/icons8-search-24.png";

const Transfer1 = () => {
  return (
    <div>
        <HeaderDashboard />
        <div className='d-flex'>
            <Navbar />
            <HambergerMenu />
            <article className="col-12 col-md-8 ms-5">
                <aside>
                    <div className="right-slide p-md-5">
                        <div className="mt-2 ms-3">
                            <h3 className="search-receiver">Search Receiver
                            </h3>
                            <div className="form-list mb-5">
                                <div className="input-group flex-nowrap mt-5 mb-5">
                                    <span className="input-group-text form-border2">
                                        <img src={search} alt="search" />
                                    </span>
                                    <input type="email" className="form-control form-border" placeholder="Search receiver here" />
                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-column">
                            <div className="d-flex flex-column">
                                <img src={contactdashboard} alt="Dashboard Dashboard" />
                                <img src={contactdashboard1} alt="Dashboard Dashboard" />
                                <img src={contactdashboard2} alt="Dashboard Dashboard" />
                                <img src={contactdashboard3} alt="Dashboard Dashboard" />
                            </div>
                        </div>

                        <Link to="/Transfer2" className="mt-5 ms-4">
                            <Button variant="success">Transfer</Button>
                        </Link>
                    </div>
                </aside>
            </article>
        </div>
        <FooterDashboard />
    </div>
  )
}

export default Transfer1