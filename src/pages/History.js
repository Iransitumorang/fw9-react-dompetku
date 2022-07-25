import React from 'react';
import '../assets/css/Style.css';
import HeaderDashboard from '../components/HeaderDashboard';
import FooterDashboard from '../components/FooterDashboard';
import Navbar from '../components/Navbar';
import HambergerMenu from '../components/HambergerMenu';
import dashboard from "../assets/img/history-dashboard.png";
import dashboard1 from "../assets/img/history-dashboard-1.png";
import dashboard2 from "../assets/img/history-dashboard-2.png";
import dashboard3 from "../assets/img/history-dashboard-3.png";

const History = () => {
  return (
    <div>
            <HeaderDashboard />
        <div className='d-flex'>
            <Navbar />
            <HambergerMenu />
            <article class="col-12 col-md-8 ms-5">
                <aside>
                    <div class="right-slide p-md-5 p-0 w-100">
                        <div class="px-4 mt-2">
                            <h3 class="trans-history">Transaction History</h3>
                            <h3 class="my-5 this-week">This Week</h3>
                        </div>

                        <div class="d-flex flex-column">
                            <div class="d-flex flex-column w-50">
                                <img src={dashboard} alt="History Dashboard"
                                    class="img-fluid"/>
                                <img src={dashboard2} alt="History Dashboard"
                                    class="img-fluid"/>
                                <h3 class="ms-4 my-4 this-month">This Month</h3>
                                <img src={dashboard1} alt="History Dashboard"
                                    class="img-fluid"/>
                                <img src={dashboard3} alt="History Dashboard"
                                    class="img-fluid"/>
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

export default History