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
            <article className="col-12 col-md-8 text-center">
                <div className="py-5 robert-profile">
                    <img src={profile} className="img-fluid" alt='profile users' />
                </div>
                <div className="d-md-flex mt-5">
                    <div className="p-md-4 gap-4 d-flex flex-column col-12 col-md-6 me-4 robert-nav">
                        <Link to="/PersonalInfo">
                            <img src={profile1} className="img-fluid" alt='profile users' />
                        </Link>
                        <Link to="/ChangePassword">
                            <img src={profile2} className="img-fluid" alt='profile users' />
                        </Link>
                        <Link to="/ChangePin">
                            <img src={profile3} className="img-fluid" alt='profile users' />
                        </Link>
                        <Link to="/Home">
                            <img src={profile4} className="img-fluid" alt='profile users' />
                        </Link>
                        
                    </div>
                    <div className="p-md-4 col-12 col-md-5 right-bottom2">
                        <div className="d-flex justify-content-between px-2">
                            <h3 className="contacts-info">Contacts Info</h3>
                            <Link to="/History" className="see-all">See all
                            </Link>
                        </div>
                        <div>
                            <img src={contactdashboard} className="img-fluid" alt='profile users' style={{height: "5vw"}}/>
                            <img src={contactdashboard2} className="img-fluid" alt='profile users' style={{height: "5vw"}}/>
                            <img src={contactdashboard1} className="img-fluid" alt='profile users' style={{height: "5vw"}}/>
                        </div>
                        <Link to="/ManageNumber" className="w-25 text-decoration-none" style={{marginLeft: "5vw"}}>
                            <Button type="button" variant="success" className="mt-5 btn-change-password">Manage Number</Button>
                        </Link>
                    </div>
                </div>
            </article>

        </div>
        <FooterDashboard />
    </div>
  )
}

export default Profile2