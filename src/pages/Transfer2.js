import React from 'react';
import '../assets/css/Style.css';
import HeaderDashboard from '../components/HeaderDashboard';
import FooterDashboard from '../components/FooterDashboard';
import Navbar from '../components/Navbar';
import HambergerMenu from '../components/HambergerMenu';
import contactdashboard from "../assets/img/contacts-dashboard.png";
import notes from "../assets/img/icons8-pencil-24.png";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Transfer2 = () => {
  return (
    <div>
    <HeaderDashboard />
    <div className='d-flex'>
        <Navbar />
        <HambergerMenu />
        <article className="col-8 ">
            <aside>
                <div className="right-slide p-5">
                    <div className="mt-2 ms-3">
                        <h3 className="transfer-money">Transfer Money </h3>
                    </div>

                    <div className="d-flex flex-column">
                        <div className="d-flex flex-column">
                            <img src={contactdashboard} alt="Dashboard Dashboard"/>
                        </div>
                        <h3 className="type-amount ms-3 mb-5">Type the amount you want to transfer and then
                            <br/> press continue to the next steps.
                        </h3>
                        <div className='text-center'>
                            <h3 className="seratus-ribu">Rp100.000
                            </h3>
                            <h3 className="seratus20">Rp120.000 Available
                            </h3>
                            <div className="form-list mb-5 parent-input">
                                <div className="input-group flex-nowrap mt-5 mb-3 border-i">
                                    <span className="input-group-text form-border2">
                                        <img src={notes} alt="notes"/>
                                    </span>
                                    <input type="email" className="form-control form-border"
                                        placeholder="For buying some socks"/>
                                </div>
                            </div>
                        </div>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <Link to="/StatusSuccess">
                                <Button variant="success" className="px-4 me-3 mt-5 continue" type="button" style={{fontWeight: "700", fontSize: "18px", lineHeight: "25px"}}>Continue</Button>
                            </Link>
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