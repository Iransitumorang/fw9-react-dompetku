import React from 'react';
import '../assets/css/Style.css';
import HeaderDashboard from '../components/HeaderDashboard';
import FooterDashboard from '../components/FooterDashboard';
import Navbar from '../components/Navbar';
import HambergerMenu from '../components/HambergerMenu';

const Profile1 = () => {
  return (
    <div>
        <HeaderDashboard />
        <div className='d-flex'>
            <Navbar />
            <HambergerMenu />

            <article class="col-12 col-md-8 ">
            <aside>
                <div class="right-slide p-md-5">
                    <div class="d-flex justify-content-center">
                        <img src="../assets/images/profil-robert.png" class="img-fluid" alt='Profile User' />
                    </div>
                    <div class="d-flex flex-column justify-content-center gap-4 mt-5 aside-value2">
                        <a href="/ibootstrap/dashboard/personal-info.html">
                            <img src="../assets/images/profile-robert1.png" class="img-fluid" alt='Profile User' />
                        </a>
                        <a href="/ibootstrap/dashboard/change-password.html">
                            <img src="../assets/images/profile-robert2.png" class="img-fluid" alt='Profile User' />
                        </a>
                        <a href="/ibootstrap/dashboard/change-pin.html">
                            <img src="../assets/images/profile-robert3.png" class="img-fluid" alt='Profile User' />
                        </a>
                        <a href="/ibootstrap/dashboard/home.html">
                            <img src="../assets/images/profile-robert4.png" class="img-fluid" alt='Profile User' />
                        </a>
                    </div>
                    <a href="/ibootstrap/dashboard/profile2.html" class="w-25 text-decoration-none" style={{marginLeft: "22vw"}}>
                        <button type="button" class="btn btn-secondary mt-5">View Profile</button>
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