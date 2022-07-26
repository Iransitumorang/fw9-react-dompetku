import React from 'react';
import '../assets/css/Style.css';
import HeaderDashboard from '../components/HeaderDashboard';
import FooterDashboard from '../components/FooterDashboard';
import Navbar from '../components/Navbar';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HambergerMenu from '../components/HambergerMenu';
import lock from "../assets/img/icons8-lock-24.png";

const ChangePassword = () => {
  return (
    <div>
        <HeaderDashboard />
        <div className='d-flex'>
            <Navbar />
            <HambergerMenu />
            <article className="col-12 col-md-8 ">
            <aside>
                <div className=" p-5">
                    <div className="mt-2 ms-3 mb-5">
                        <h3 className="start-acc">Change Password
                        </h3>
                        <h3 className="transfering">You must enter your current password and then <br/> type your new password twice.
                        </h3>
                    </div>
                </div>
            </aside>

            <div className="d-flex flex-column align-items-center gap-3 px-5">
                <div className="input-group flex-nowrap mb-3">
                    <span className="input-group-text form-border2">
                    <img src={lock} className="img-fluid" alt='lock' />
                    </span>
                    <input type="password" className="form-control form-border" placeholder="Current password"/>
                </div>
                <div className="input-group flex-nowrap mb-3">
                    <span className="input-group-text form-border2">
                        <img src={lock} className="img-fluid" alt='lock' />
                    </span>
                    <input type="password" className="form-control form-border" placeholder="New password"/>
                </div>
                <div className="input-group flex-nowrap mb-3">
                    <span className="input-group-text form-border2">
                        <img src={lock} className="img-fluid" alt='lock' />
                    </span>
                    <input type="password" className="form-control form-border" placeholder="Repeat New password"/>
                </div>

                {/* <div className="input-group flex-nowrap mb-3 mt-3 d-grid"> */}
                <Link to="/Login" className="input-group flex-nowrap mb-3 mt-3 d-grid">
                    <Button variant="success" className="mb-5 btn-change-password" type="button">Change Password
                    </Button>
                </Link>
                {/* </div> */}
            </div>
        </article>
        </div>
        <FooterDashboard />
    </div>
  )
}

export default ChangePassword