import React from 'react';
import '../assets/css/Style.css';
import HeaderDashboard from '../components/HeaderDashboard';
import FooterDashboard from '../components/FooterDashboard';
import Navbar from '../components/Navbar';
import HambergerMenu from '../components/HambergerMenu';

const StatusSuccess = () => {
  return (
    <div>
        <HeaderDashboard />
        <div className='d-flex'>
            <Navbar />
            <HambergerMenu />

          <article class="col-12 col-md-8 ">
            <aside>
                <div class="right-slide p-5">
                    <div className='d-flex justify-content-center'>
                        <img src="../assets/images/transfer-succes.png" alt="Transfer Success" />
                    </div>
                    <div class="d-flex flex-column">
                        <img src="../assets/images/home/confirm-1.png" alt='confirm'/>
                        <img src="../assets/images/home/confirm-2.png" alt='confirm'/>
                        <img src="../assets/images/home/confirm-3.png" alt='confirm'/>
                        <img src="../assets/images/home/confirm-4.png" alt='confirm'/>
                    </div>
                    <div class="mt-2 ms-3">
                        <h3 class="transfer-to">Transfer To </h3>
                    </div>
                    <div class="d-flex flex-column">
                        <img src="../assets/images/home/contacts-dashboard.png" alt="Dashboard" />
                    </div>
                    <div class="d-md-flex justify-content-end">
                        <div style={{margin: "-25px"}}>
                            <img src="../assets/images/bagikan.png" alt='bagikan'/>
                        </div>
                        <div className='downloadpdf'>
                            <img src="../assets/images/download-pdf.png" alt='download'/>
                        </div>
                        <div>
                            <a href="/ibootstrap/dashboard/home.html">
                                <button class="btn btn-primary me-3 btn-back-home" type="button">Back To Home</button>
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

export default StatusSuccess