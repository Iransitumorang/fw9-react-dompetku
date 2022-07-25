import React from 'react';
import '../assets/css/Style.css';
import HeaderDashboard from '../components/HeaderDashboard';
import FooterDashboard from '../components/FooterDashboard';
import Navbar from '../components/Navbar';
import HambergerMenu from '../components/HambergerMenu';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import success from "../assets/img/transfer-success.png";
import downloadpdf from "../assets/img/download-pdf.png";
import bagikan from "../assets/img/bagikan.png";
import contactdashboard from "../assets/img/contacts-dashboard.png";

const StatusSuccess = () => {
  return (
    <div>
        <HeaderDashboard />
        <div className='d-flex'>
            <Navbar />
            <HambergerMenu />
          <article className="col-12 col-md-8 ">
            <aside>
                <div className="right-slide p-5">
                    <div className='d-flex justify-content-center mb-5'>
                        <img src={success} alt="Transfer Success" />
                    </div>
                    <div className='d-flex flex-column gap-5 ms-4 confirm-detail-head'>
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
                    <div className="mt-5 ms-4">
                        <h3 className="transfer-to">Transfer To </h3>
                    </div>
                    <div className="d-flex flex-column">
                        <img src={contactdashboard} alt="Dashboard" />
                    </div>
                    <div className="d-md-flex justify-content-end">
                        <div style={{marginTop: "-2vw"}}>
                            <img src={bagikan} alt='bagikan'/>
                        </div>
                        <div className='downloadpdf'>
                            <img src={downloadpdf} alt='download'/>
                        </div>
                        <div className='status-btn'>
                            <Link to="/Home">
                                <Button variant="success" className="me-3 btn-back-home" type="button">Back To Home</Button>
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

export default StatusSuccess