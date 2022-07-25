import React from 'react';
import '../assets/css/Style.css';
import HeaderDashboard from '../components/HeaderDashboard';
import FooterDashboard from '../components/FooterDashboard';
import Navbar from '../components/Navbar';
import HambergerMenu from '../components/HambergerMenu';

import profile from "../assets/img/profil-robert.png";
import profile1 from "../assets/img/profile-robert1.png";
import profile2 from "../assets/img/profile-robert2.png";
import profile3 from "../assets/img/profile-robert3.png";
import profile4 from "../assets/img/profile-robert4.png";
import contactdashboard from "../assets/img/contacts-dashboard.png";
import contactdashboard1 from "../assets/img/contacts-dashboard-1.png";
import contactdashboard2 from "../assets/img/contacts-dashboard-2.png";

const Profile2 = () => {
  return (
    <div>
        <HeaderDashboard />
        <div className='d-flex'>
            <Navbar />
            <HambergerMenu />
            <article className="col-12 col-md-8 ">
            <div className="py-5 robert-profile">
                <img src={profile} className="img-fluid" alt='profile users' />
            </div>
            <div className="d-md-flex mt-5">
                <div className="p-md-4 gap-4 d-flex flex-column col-12 col-md-6 me-4 robert-nav">
                    <a href="/ibootstrap/dashboard/personal-info.html">
                        <img src={profile1} className="img-fluid" alt='profile users' />
                    </a>
                    <a href="/ibootstrap/dashboard/change-password.html">
                        <img src={profile2} className="img-fluid" alt='profile users' />
                    </a>
                    <a href="/ibootstrap/dashboard/change-pin.html">
                        <img src={profile3} className="img-fluid" alt='profile users' />
                    </a>
                    <a href="/ibootstrap/dashboard/home.html">
                        <img src={profile4} className="img-fluid" alt='profile users' />
                    </a>
                    
                </div>
                <div className="p-md-4 col-12 col-md-5 right-bottom2">
                    <div className="d-flex justify-content-between px-2">
                        <h3 className="contacts-info">Contacts Info</h3>
                        <h3 className="see-all">See all</h3>
                    </div>
                    <div>
                        <img src={contactdashboard} className="img-fluid" alt='profile users' />
                        <img src={contactdashboard2} className="img-fluid" alt='profile users' />
                        <img src={contactdashboard1} className="img-fluid" alt='profile users' />
                    </div>
                </div>
            </div>
        </article>

        </div>
        <FooterDashboard />
    </div>
  )
}

export default Profile2