import React from 'react';
import '../assets/css/Style.css';
import HeaderDashboard from '../components/HeaderDashboard';
import FooterDashboard from '../components/FooterDashboard';
import Navbar from '../components/Navbar';
import HambergerMenu from '../components/HambergerMenu';

const StatusFailed = () => {
  return (
    <div>
        <HeaderDashboard />
        <div className='d-flex'>
            <Navbar />
            <HambergerMenu />

            <article class="col-12 col-md-8 ">
            <aside>
                <div class="right-slide p-5">
                    <div class="d-flex justify-content-center">
                        <img src="../assets/images/transfer-gagal.png" alt="Transfer Failed"/>
                    </div>
                    <div class="d-flex flex-column">
                        <img src="../assets/images/home/confirm-1.png" alt='confirm'/>
                        <img src="../assets/images/home/confirm-2.png" alt='confirm'/>
                        <img src="../assets/images/home/confirm-3.png" alt='confirm'/>
                        <img src="../assets/images/home/confirm-4.png" alt='confirm'/>
                    </div>
                    <div class="mt-2 ms-3">
                        <h3 class="transfer-to">Transfer To</h3>
                    </div>
                    <div class="d-flex flex-column">
                        <img src="../assets/images/home/contacts-dashboard.png" alt="Dashboard"/>
                    </div>
                    <div class="d-md-flex justify-content-end">
                        <a href="/ibootstrap/dashboard/transfer1.html">
                            <button class="btn btn-primary me-3 try-again" type="button">Try Again</button>
                        </a>
                    </div>
                </div>
            </aside>
        </article>

        </div>
        <FooterDashboard />
    </div>
  )
}

export default StatusFailed