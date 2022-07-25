import React from 'react';
import '../assets/css/Style.css';
import HeaderDashboard from '../components/HeaderDashboard';
import FooterDashboard from '../components/FooterDashboard';
import Navbar from '../components/Navbar';
import HambergerMenu from '../components/HambergerMenu';
import contactdashboard from "../assets/img/contacts-dashboard.png";
import { Button } from 'react-bootstrap';

const Transfer2 = () => {
  return (
    <div>
    <HeaderDashboard />
    <div className='d-flex'>
        <Navbar />
        <HambergerMenu />
        <article class="col-8 ">
            <aside>
                <div class="right-slide p-5">
                    <div class="mt-2 ms-3">
                        <h3 class="transfer-money">Transfer Money </h3>
                    </div>

                    <div class="d-flex flex-column">
                        <div class="d-flex flex-column">
                            <img src={contactdashboard} alt="Dashboard Dashboard"/>
                        </div>
                        <h3 class="type-amount ms-3 mb-5">Type the amount you want to transfer and then
                            <br/> press continue to the next steps.
                        </h3>
                        <div className='text-center'>
                            <h3 class="seratus-ribu">Rp100.000
                            </h3>
                            <h3 class="seratus20">Rp120.000 Available
                            </h3>
                            <div class="form-list mb-5 parent-input">
                                <div class="input-group flex-nowrap mt-5 mb-3 border-i">
                                    <span class="input-group-text form-border2">
                                        <i class="fa-solid fa-pen"></i>
                                    </span>
                                    <input type="email" class="form-control form-border"
                                        placeholder="For buying some socks"/>
                                </div>
                            </div>
                        </div>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                            <a href="/ibootstrap/dashboard/status-success.html">
                            <Button variant="success" class="px-4 me-3 mt-5 continue" type="button" style={{fontWeight: "700", fontSize: "18px", lineHeight: "25px"}}>Continue</Button>
                        </a>
                        </div>
                    </div>
                </div>
            </aside>
        </article>
        </div>
        <FooterDashboard />
    </div>
  )
}

export default Transfer2