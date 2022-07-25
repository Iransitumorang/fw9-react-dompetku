import React from 'react';
import '../assets/css/Style.css';
import HeaderDashboard from '../components/HeaderDashboard';
import FooterDashboard from '../components/FooterDashboard';
import Navbar from '../components/Navbar';
import HambergerMenu from '../components/HambergerMenu';

const AddNumber = () => {
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
                        <h3 class="add-number">Add Phone Number</h3>
                        <h3 class="add-least">Add at least one phone number for the transfer <br/> ID so you can
                            start transfering your money to <br/> another user.
                        </h3>
                    </div>

                    <div>
                        <div class="d-flex justify-content-center">
                            <div class="input-group flex-nowrap mb-3 form-value">
                                <span class="input-group-text form-border2">
                                    <i class="fa-solid fa-phone"></i>
                                </span>
                                <input type="number" class="form-control form-border"
                                    placeholder="Enter your phone number"/>
                            </div>
                        </div>
                        <div class="d-grid col-6 mx-auto">
                            <button class="btn btn-primary mt-3 mb-5 add-number2" type="button">Add Phone Number</button>
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

export default AddNumber