import React from 'react';
import '../assets/css/Style.css';
import HeaderDashboard from '../components/HeaderDashboard';
import FooterDashboard from '../components/FooterDashboard';
import Navbar from '../components/Navbar';
import HambergerMenu from '../components/HambergerMenu';

const ChangePin = () => {
  return (
    <div>
        <HeaderDashboard />
        <div className='d-flex'>
            <Navbar />
            <HambergerMenu />
            <article class="col-12 col-md-8 ">
            <aside>
                <div class="right-slide p-5">
                    <div class="mt-2 ms-3 mb-5">
                        <h3 class="change-pin">Change Pin
                        </h3>
                        <h3 class="enter-your-current">Enter your current 6 digits Zwallet PIN below to <br/> continue to the next
                            steps.
                        </h3>
                    </div>

                    <div class="auth-form-wrapper py-5 d-flex justify-content-center">
                        <div class="d-flex gap-4 flex-row pin-input-wrapper">
                            <div class="d-flex align-items-center value">
                                <input maxlength="1" min="0" max="9" type="number"/>
                            </div>
                            <div class="d-flex align-items-center value">
                                <input maxlength="1" min="0" max="9" type="number"/>
                            </div>
                            <div class="d-flex align-items-center value">
                                <input maxlength="1" min="0" max="9" type="number"/>
                            </div>
                            <div class="d-flex align-items-center value">
                                <input maxlength="1" min="0" max="9" type="number"/>
                            </div>
                            <div class="d-flex align-items-center value">
                                <input maxlength="1" min="0" max="9" type="number"/>
                            </div>
                            <div class="d-flex align-items-center value">
                                <input maxlength="1" min="0" max="9" type="number"/>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center">
                        <button type="button" class="btn btn-primary change-pin2">Change PIN</button>
                    </div>
                </div>
            </aside>
        </article>
        </div>
        <FooterDashboard />
    </div>
  )
}

export default ChangePin