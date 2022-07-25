import React from 'react';
import '../assets/css/Style.css';
import HeaderDashboard from '../components/HeaderDashboard';
import FooterDashboard from '../components/FooterDashboard';
import Navbar from '../components/Navbar';
import HambergerMenu from '../components/HambergerMenu';

function ManageNumber () {
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
                        <h3 class="manage-numb">Manage Phone Number
                        </h3>
                        <h3 class="you-can-only">You can only delete the phone number and then <br/> you must add another
                            phone number.</h3>
                    </div>


                    <div class="d-md-flex justify-content-md-between p-md-2 primary-parent">
                        <div class="ms-4">
                            <h3 class="pt-2 primary">Primary</h3>
                            <h3 class="number-phone">+62 813 9387 7946</h3>
                        </div>
                        <div>
                            <img src="../assets/images/trash.png" class="p-4" alt='trash'/>
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

export default ManageNumber
