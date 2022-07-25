import React from 'react';
import '../assets/css/Style.css';
import HeaderDashboard from '../components/HeaderDashboard';
import FooterDashboard from '../components/FooterDashboard';
import Navbar from '../components/Navbar';
import HambergerMenu from '../components/HambergerMenu';

const Profile2 = () => {
  return (
    <div>
        <HeaderDashboard />
        <div className='d-flex'>
            <Navbar />
            <HambergerMenu />

            <article class="col-12 col-md-8 ">
            <div class="py-5 robert-profile">
                <img src="../assets/images/profil-robert.png" class="img-fluid" alt='profile users' />
            </div>
            <div class="d-md-flex mt-5">
                <div class="p-md-4 gap-4 d-flex flex-column col-12 col-md-6 me-4 robert-nav">
                    <a href="/ibootstrap/dashboard/personal-info.html">
                        <img src="../assets/images/profile-robert1.png" class="img-fluid" alt='profile users' />
                    </a>
                    <a href="/ibootstrap/dashboard/change-password.html">
                        <img src="../assets/images/profile-robert2.png" class="img-fluid" alt='profile users' />
                    </a>
                    <a href="/ibootstrap/dashboard/change-pin.html">
                        <img src="../assets/images/profile-robert3.png" class="img-fluid" alt='profile users' />
                    </a>
                    <a href="/ibootstrap/dashboard/home.html">
                        <img src="../assets/images/profile-robert4.png" class="img-fluid" alt='profile users' />
                    </a>
                    
                </div>
                <div class="p-md-4 col-12 col-md-5 right-bottom2">
                    <div class="d-flex justify-content-between px-2">
                        <h3 class="contacts-info">Contacts Info</h3>
                        <h3 class="see-all">See all</h3>
                    </div>
                    <div>
                        <img src="../assets/images/profil2a.png" class="img-fluid" alt='profile users' />
                        <img src="../assets/images/profil2b.png" class="img-fluid" alt='profile users' />
                        <img src="../assets/images/profil2c.png" class="img-fluid" alt='profile users' />
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