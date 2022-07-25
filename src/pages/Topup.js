import React from 'react';
import '../assets/css/Style.css';
import HeaderDashboard from '../components/HeaderDashboard';
import FooterDashboard from '../components/FooterDashboard';
import Navbar from '../components/Navbar';
import HambergerMenu from '../components/HambergerMenu';

const Topup = () => {
  return (
    <div>
        <HeaderDashboard />
        <div className='d-flex'>
            <Navbar />
            <HambergerMenu />

            <article class="col-12 col-md-8 ">
            <aside>
                <div class="right-slide p-5">
                    <div class="mt-2 ms-3">
                        <h3 class="how-to-topup">How To Top Up
                        </h3>
                    </div>

                    <div class="d-flex flex-column">
                        <div class="d-flex flex-column">
                            <img src="../assets/images/instructions.png" alt='instructions' />
                            <img src="../assets/images/instructions-1.png" alt='instructions' />
                            <img src="../assets/images/instructions-2.png" alt='instructions' />
                            <img src="../assets/images/instructions-3.png" alt='instructions' />
                            <img src="../assets/images/instructions-4.png" alt='instructions' />
                            <img src="../assets/images/instructions-5.png" alt='instructions' />
                            <img src="../assets/images/instructions-6.png" alt='instructions' />
                            <img src="../assets/images/instructions-7.png" alt='instructions' />
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

export default Topup