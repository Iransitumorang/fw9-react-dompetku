import React from 'react';
import '../assets/css/Style.css';
import HeaderDashboard from '../components/HeaderDashboard';
import FooterDashboard from '../components/FooterDashboard';
import Navbar from '../components/Navbar';
import HambergerMenu from '../components/HambergerMenu';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
                    <div className="d-flex flex-column text-center gap-4 mt-5 aside-value2">
                        <Link to="/PersonalInfo">
                            <img src={profile1} className="img-fluid" alt='Profile User' />
                        </Link>
                        <Link to="/ChangePassword">
                            <img src={profile2} className="img-fluid" alt='Profile User' />
                        </Link>
                        <Link to="/ChangePin">
                            <img src={profile3} className="img-fluid" alt='Profile User' />
                        </Link>
                        <Link to="/Home">
                            <img src={profile4} className="img-fluid" alt='Profile User' />
                        </Link>
                    </div>
                    <Link to="/Profile2" className="w-25 text-decoration-none" style={{marginLeft: "25vw"}}>
                        <Button type="button" variant="success" className="mt-5 btn-change-password">View Profile</Button>
                    </Link>
                </div>
            </aside>
        </article>

        </div>
        <FooterDashboard />
    </div>
  )
}

export default Profile1