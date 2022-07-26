import React from 'react';
import '../assets/css/Style.css';
import HeaderDashboard from '../components/HeaderDashboard';
import FooterDashboard from '../components/FooterDashboard';
import Navbar from '../components/Navbar';
import HambergerMenu from '../components/HambergerMenu';

import pi from "../assets/img/personal info.png";
import pi2 from "../assets/img/personal info 2.png";
import pi3 from "../assets/img/personal info 3.png";
import pi4 from "../assets/img/personal info 4.png";

const PersonalInfo = () => {
  return (
    <div>
        <HeaderDashboard />
        <div className='d-flex'>
            <Navbar />
            <HambergerMenu />
            <article className="col-12 col-md-8 ">
            <aside>
                <div className="right-slide p-md-5">
                    <div className="mt-2 ms-3">
                        <h3 className="personal-info">Personal Information</h3>
                        <h3 className="wegot-personal">We got your personal information from the sign <br/> up proccess. If you want
                            to make changes on <br/> your information, contact our support.</h3>
                    </div>

                    <div className="d-flex flex-column">
                        <div className="d-flex flex-column">
                            <img src={pi} className="img-fluid" alt='personal info' />
                            <img src={pi2} className="img-fluid" alt='personal info' />
                            <img src={pi3} className="img-fluid" alt='personal info' />
                            <img src={pi4} className="img-fluid" alt='personal info' />
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