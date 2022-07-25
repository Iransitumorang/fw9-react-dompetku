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

const Profile1 = () => {
  return (
    <div>
        <HeaderDashboard />
        <div className='d-flex'>
            <Navbar />
            <HambergerMenu />
            <article className="col-12 col-md-8 ">
            <aside>
                <div className="right-slide p-md-5">
                    <div className="d-flex justify-content-center">
                        <img src={profile} className="img-fluid" alt='Profile User' />
                    </div>
                    <div className="d-flex flex-column justify-content-center gap-4 mt-5 aside-value2">
                        <a href="/ibootstrap/dashboard/personal-info.html">
                            <img src={profile1} className="img-fluid" alt='Profile User' />
                        </a>
                        <a href="/ibootstrap/dashboard/change-password.html">
                            <img src={profile2} className="img-fluid" alt='Profile User' />
                        </a>
                        <a href="/ibootstrap/dashboard/change-pin.html">
                            <img src={profile3} className="img-fluid" alt='Profile User' />
                        </a>
                        <a href="/ibootstrap/dashboard/home.html">
                            <img src={profile4} className="img-fluid" alt='Profile User' />
                        </a>
                    </div>
                    <a href="/ibootstrap/dashboard/profile2.html" className="w-25 text-decoration-none" style={{marginLeft: "22vw"}}>
                        <button type="button" className="btn btn-secondary mt-5">View Profile</button>
                    </a>
                </div>
            </aside>
        </article>

        </div>
        <FooterDashboard />
    </div>
  )
}

export default Profile1