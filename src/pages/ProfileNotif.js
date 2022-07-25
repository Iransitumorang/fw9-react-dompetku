import React from 'react';
import '../assets/css/Style.css';
import HeaderDashboard from '../components/HeaderDashboard';
import FooterDashboard from '../components/FooterDashboard';
import Navbar from '../components/Navbar';
import HambergerMenu from '../components/HambergerMenu';

const ProfileNotif = () => {
  return (
    <div>
        <HeaderDashboard />
        <div className='d-flex'>
            <Navbar />
            <HambergerMenu />

            <article class="col-12 col-md-8">
            <div class="bg-primary d-flex justify-content-between mb-4 p-0 p-md-4 balance-parent">
                <div class="d-flex flex-column">
                    <h3 class="balance">Balance</h3>
                    <h1 class="seratus20">Rp. 120.000</h1>
                    <h3 class="number-phone">+62 813-9387-7946</h3>
                </div>
                <div class="d-flex flex-column">
                    <div class="mb-3">
                        <img src="../assets/images/home/Group 35.png" alt="transfer" class="img-fluid"/>
                    </div>
                    <div>
                        <img src="../assets/images/home/Group 34.png" alt="top up" class="topup-img img-fluid"/>
                    </div>
                </div>
            </div>

            <aside class="d-md-flex flex-row justify-content-between">
                <div class="left-slide d-flex flex-column col-12 col-md-6 p-md-5">
                    <div class="d-md-flex justify-content-md-between flex-row">
                        <div>
                            <img src="../assets/images/home/in2.png" class="img-fluid" alt='home'/>
                        </div>
                        <div>
                            <img src="../assets/images/home/out2.png" class="img-fluid" alt='home'/>
                        </div>
                    </div>
                    <div>
                        <img src="../assets/images/home/graphic.png" alt="graphic" class="img-fluid"/>
                    </div>
                </div>

                <div class="right-slide col-12 col-md-5">
                    <div class="d-md-flex justify-content-md-between flex-row px-4 mt-3">
                        <h3 class="trans-history">Transaction History</h3>
                        <h3 class="see-all">See all</h3>
                    </div>

                    <div>
                        <img src="../assets/images/home/history-dashboard.png" alt="History Dashboard" class="img-fluid" />
                        <img src="../assets/images/home/history-dashboard-2.png" alt="History Dashboard" class="img-fluid" />
                        <img src="../assets/images/home/history-dashboard-1.png" alt="History Dashboard" class="img-fluid" />
                        <img src="../assets/images/home/history-dashboard-3.png" alt="History Dashboard" class="img-fluid" />
                    </div>
                </div>
            </aside>
        </article>

        </div>
        <FooterDashboard />
    </div>
  )
}

export default ProfileNotif