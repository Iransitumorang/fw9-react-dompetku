import React from 'react';
import Sidebar from '../components/Sidebar';
import '../assets/css/Style.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import lock from "../assets/img/icons8-lock-24.png";

function ResetPassword() {
  return (
    <div className='d-flex'>
        <Sidebar />
        <aside className="col-12 col-md-5 d-flex flex-column justify-content-center gap-2 px-5">
            <h3 className="start-acc">Did You Forgot Your Password? <br/> Don’t Worry, You Can Reset Your <br/> Password In a Minutes.
            </h3>
                <h6 className="transfering">To reset your password, you must type your e-mail and we <br/> will send a link
                    to your email and you will be directed to the <br/> reset password screens.</h6>
                <div className="form-list mb-5">
                    <div className="input-group flex-nowrap mt-5 mb-5">
                        <span className="input-group-text form-border2">
                            <img src={lock} alt="lock"/>
                        </span>
                        <input type="password" className="form-control form-border" placeholder="Input your new password"/>
                    </div>
                    <div className="input-group flex-nowrap mt-5 mb-5">
                        <span className="input-group-text form-border2">
                            <img src={lock} alt="lock"/>
                        </span>
                        <input type="password" className="form-control form-border"
                            placeholder="Re-Input your new password"/>
                    </div>
                </div>
                <div className='underlines'>
                    <Link to="/Login" className="d-grid rp-btn-confirm">
                        <Button type="button" variant="success">Reset Password</Button>
                    </Link>
                </div>
        </aside>
    </div>
  )
}

export default ResetPassword