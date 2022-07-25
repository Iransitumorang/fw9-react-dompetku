import React from 'react';
import '../assets/css/Style.css';
import HeaderDashboard from '../components/HeaderDashboard';
import FooterDashboard from '../components/FooterDashboard';
import Navbar from '../components/Navbar';
import HambergerMenu from '../components/HambergerMenu';
import { Button } from 'react-bootstrap';

import contactdashboard from "../assets/img/contacts-dashboard.png";
import contactdashboard1 from "../assets/img/contacts-dashboard-1.png";
import contactdashboard2 from "../assets/img/contacts-dashboard-2.png";
import contactdashboard3 from "../assets/img/contacts-dashboard-3.png";

const Transfer1 = () => {
  return (
    <div>
        <HeaderDashboard />
        <div className='d-flex'>
            <Navbar />
            <HambergerMenu />
        <article class="col-12 col-md-8 ms-5">
            <aside>
                <div class="right-slide p-md-5">
                    <div class="mt-2 ms-3">
                        <h3 class="search-receiver">Search Receiver
                        </h3>
                        <div class="form-list mb-5">
                            <div class="input-group flex-nowrap mt-5 mb-5">
                                <span class="input-group-text form-border2">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </span>
                                <input type="email" class="form-control form-border" placeholder="Search receiver here" />
                            </div>
                        </div>
                    </div>

                    <div class="d-flex flex-column">
                        <div class="d-flex flex-column">
                            <img src={contactdashboard} alt="Dashboard Dashboard" />
                            <img src={contactdashboard1} alt="Dashboard Dashboard" />
                            <img src={contactdashboard2} alt="Dashboard Dashboard" />
                            <img src={contactdashboard3} alt="Dashboard Dashboard" />
                        </div>
                    </div>

                    <a href="/ibootstrap/dashboard/transfer2.html" class="mt-5 ms-4">
                        <Button variant="success">Transfer</Button>
                    </a>
                </div>
            </aside>
        </article>
        </div>
        <FooterDashboard />
    </div>
  )
}

export default Transfer1