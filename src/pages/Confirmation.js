import React from 'react';
import '../assets/css/Style.css';
import HeaderDashboard from '../components/HeaderDashboard';
import FooterDashboard from '../components/FooterDashboard';
import Navbar from '../components/Navbar';
import HambergerMenu from '../components/HambergerMenu';

const Confirmation = () => {
  return (
    <div>
        <HeaderDashboard />
        <div className='d-flex'>
            <Navbar />
            <HambergerMenu />

            <article class="col-12 col-md-8">
                <div class="right-slide p-md-5">
                    <div class="mt-2 ms-3">
                        <h3 class="transfer">Transfer To
                        </h3>
                    </div>

                    <div class="d-flex flex-column">
                        <div class="d-flex flex-column">
                            <img src="../assets/images/home/contacts-dashboard.png" alt="Dashboard Dashboard"/>
                        </div>
                        <h3 class="details">Details</h3>
                        <img src="../assets/images/home/confirm-1.png" alt='details'/>
                        <img src="../assets/images/home/confirm-2.png" alt='details'/>
                        <img src="../assets/images/home/confirm-3.png" alt='details'/>
                        <img src="../assets/images/home/confirm-4.png" alt='details'/>
                    </div>
                    <div class="d-flex justify-content-end">
                        <button class="btn btn-primary px-4 mt-5 me-3 transfer">Continue</button>
                    </div>
                </div>
            </article>
        </div>
        <FooterDashboard />
    </div>
  )
}

export default Confirmation