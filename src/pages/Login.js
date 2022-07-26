import React from 'react'
import Sidebar from '../components/Sidebar';
import '../assets/css/Style.css';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import mail from "../assets/img/icons8-mail-24.png";
import lock from "../assets/img/icons8-lock-24.png";

function Login() {
  return (
    <div className='d-flex'>
        <Sidebar />
         <aside className="col-12 col-md-5 d-flex flex-column justify-content-center gap-2 px-5">
                <h3 className="start-acc container-md-fluid">Start Accessing Banking Needs <br/> With All Devices and All Platforms
                    <br/> With
                    30.000+ Users</h3>
                <h6 className="transfering">Transfering money is eassier than ever, you can access <br/> Zwallet wherever you
                    are. Desktop, laptop, mobile phone? <br/> we cover all of that for you!</h6>
                <div className="input-group flex-nowrap mt-5 mb-5">
                    <span className="input-group-text form-border2">
                    <img src={mail} alt="mail" />
                    </span>
                    <input type="email" className="form-control form-border" value="pewdiepie1@gmail.com"/>
                </div>
                <div className="input-group flex-nowrap">
                    <span className="input-group-text form-border2">
                    <img src={lock} alt="lock" />
                    </span>
                    <input type="password" className="form-control form-border" placeholder="Enter your password"/>
                </div>
                <div className="text-end password">
                    <Link to="/ResetPassword">Forgot Password?</Link>
                </div>
                <h3 className="invalid mt-3">Email or Password Invalid</h3>
                <div className='underlines'>
                    <Link to="/Home" className="d-grid btn-login">
                        <Button type="button" variant="success">Login</Button>
                    </Link>
                </div>
                <h3 className="signup">Don’t have an account? Let’s <Link to="/Signup">Sign Up</Link></h3>
            </aside>
    </div>
  )
}

export default Login