import React from 'react';
import '../assets/css/Style.css';
import HeaderDashboard from '../components/HeaderDashboard';
import FooterDashboard from '../components/FooterDashboard';
import Navbar from '../components/Navbar';
import HambergerMenu from '../components/HambergerMenu';

const PersonalInfo = () => {
  return (
    <div>
        <HeaderDashboard />
        <div className='d-flex'>
            <Navbar />
            <HambergerMenu />
            <article class="col-12 col-md-8 ">
            <aside>
                <div class="right-slide p-md-5">
                    <div class="mt-2 ms-3">
                        <h3 class="personal-info">Personal Information
                        </h3>
                        <h3 class="wegot-personal">We got your personal information from the sign <br/> up proccess. If you want
                            to make changes on <br/> your information, contact our support.</h3>
                    </div>

                    <div class="d-flex flex-column">
                        <div class="d-flex flex-column">
                            <img src="../assets/images/personal info 2.png" class="img-fluid" alt='personal info' />
                            <img src="../assets/images/personal info 3.png" class="img-fluid" alt='personal info' />
                            <img src="../assets/images/personal info.png" class="img-fluid" alt='personal info' />
                            <img src="../assets/images/personal info 4.png" class="img-fluid" alt='personal info' />
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

export default PersonalInfo