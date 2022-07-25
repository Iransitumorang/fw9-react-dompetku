import React from 'react';
import '../assets/css/Style.css';
import HeaderDashboard from '../components/HeaderDashboard';
import FooterDashboard from '../components/FooterDashboard';
import Navbar from '../components/Navbar';
import HambergerMenu from '../components/HambergerMenu';
import contactdashboard from "../assets/img/contacts-dashboard.png";
import Button from 'react-bootstrap/esm/Button';

const Confirmation = () => {
  return (
    <div>
        <HeaderDashboard />
        <div className='d-flex'>
            <Navbar />
            <HambergerMenu />

            <article className="col-12 col-md-8">
                <div className="right-slide p-md-5">
                    <div className="mt-2 ms-3">
                        <h3 className="transfer">Transfer To
                        </h3>
                    </div>

                    <div className="d-flex flex-column">
                        <div className="d-flex flex-column">
                            <img src={contactdashboard} alt="Dashboard Dashboard"/>
                        </div>
                        <h3 className="details ms-4">Details</h3>
                        <div className='d-flex flex-column gap-3 ms-4 confirm-detail-head'>
                            <div className='d-flex flex-column confirm-detail p-3'>
                                <span className='primary'>Amount</span>
                                <span className='number-phone'>Rp 100.000</span>
                            </div>
                            <div className='d-flex flex-column confirm-detail p-3'>
                                <span className='primary'>Balance Left</span>
                                <span className='number-phone'>Rp 20.000</span>
                            </div>
                            <div className='d-flex flex-column confirm-detail p-3'>
                                <span className='primary'>Date & Time</span>
                                <span className='number-phone'>May 11, 2020 - 12.20</span>
                            </div>
                            <div className='d-flex flex-column confirm-detail p-3'>
                                <span className='primary'>Notes</span>
                                <span className='number-phone'>For buying some socks</span>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end">
                        <Button variant="success" className="px-4 mt-5 me-3 transfer">Continue</Button>
                    </div>
                </div>
            </article>
        </div>
        <FooterDashboard />
    </div>
  )
}

export default Confirmation