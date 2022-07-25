import React from 'react';
import '../assets/css/Style.css';
import HeaderDashboard from '../components/HeaderDashboard';
import FooterDashboard from '../components/FooterDashboard';
import Navbar from '../components/Navbar';
import HambergerMenu from '../components/HambergerMenu';

const ChangePassword = () => {
  return (
    <div>
        <HeaderDashboard />
        <div className='d-flex'>
            <Navbar />
            <HambergerMenu />
            <article class="col-12 col-md-8 ">
            <aside>
                <div class=" p-5">
                    <div class="mt-2 ms-3 mb-5">
                        <h3 class="change-password">Change Password
                        </h3>
                        <h3 class="you-must-enter">You must enter your current password and then <br/> type your new password twice.
                        </h3>
                    </div>
                </div>
            </aside>

            <div class="d-flex flex-column align-items-center gap-3">
                <div class="input-group flex-nowrap mb-3">
                    <span class="input-group-text form-border2">
                        <i class="fa-solid fa-lock"></i>
                    </span>
                    <input type="password" class="form-control form-border" placeholder="Current password"/>
                </div>
                <div class="input-group flex-nowrap mb-3">
                    <span class="input-group-text form-border2">
                        <i class="fa-solid fa-lock"></i>
                    </span>
                    <input type="password" class="form-control form-border" placeholder="New password"/>
                </div>
                <div class="input-group flex-nowrap mb-3">
                    <span class="input-group-text form-border2">
                        <i class="fa-solid fa-lock"></i>
                    </span>
                    <input type="password" class="form-control form-border" placeholder="Repeat New password"/>
                </div>

                <div class="input-group flex-nowrap mb-3 mt-3 d-grid">
                    <button class="btn btn-primary mb-5 btn-change-password" type="button">Change Password
                    </button>
                </div>
            </div>
        </article>
        </div>
        <FooterDashboard />
    </div>
  )
}

export default ChangePassword