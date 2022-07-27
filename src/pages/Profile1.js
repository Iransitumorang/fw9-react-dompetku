import React from 'react';
import '../assets/css/Style.css';
import HeaderDashboard from '../components/HeaderDashboard';
import FooterDashboard from '../components/FooterDashboard';
import Navbar from '../components/Navbar';
import HambergerMenu from '../components/HambergerMenu';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import profile from "../assets/img/profil-robert.png";
import head from "../assets/img/robert-head.png";
import notes from "../assets/img/icons8-pencil-24.png";
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
                    <div className="d-flex flex-column">
                        <img src={head} className="robert-head mt-2 img-fluid align-center" alt="robert-head" style={{width: "10%", alignSelf: "center"}}/>
                        <div className="d-flex justify-content-center  mt-2">
                            <img src={notes} className="robert-head img-fluid" alt="robert-head" style={{alignSelf: "center", width: "2%", marginRight: "5px"}}/>
                            <span style={{fontWeight: "400", fontSize: "16px", lineHeight: "27px", color: "#7A7886"}}>Edit</span>
                        </div>
                        <span className="text-center my-3" style={{fontWeight: "700", fontSize: "24px",lineHeight: "32px", color: "#4D4B57"}}>Robert Chandler</span>
                        <span className="text-center">+62 813-9387-7946</span>
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