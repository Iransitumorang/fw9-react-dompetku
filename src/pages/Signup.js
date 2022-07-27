import React from 'react';
import Sidebar from '../components/Sidebar';
import '../assets/css/Style.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';

import user from "../assets/img/icons8-person-32.png";
import mail from "../assets/img/icons8-mail-24.png";
import lock from "../assets/img/icons8-lock-24.png";

function signup() {
  return (
      <div className='d-flex'>
        <Sidebar />
        <aside className="col-12 col-md-5 d-flex flex-column justify-content-center gap-2 px-5">
                <h3 className="start-acc">Start Accessing Banking Needs <br/> With All Devices and All Platforms <br/>
                    With 30.000+ Users</h3>
                <h6 className="transfering">Transfering money is eassier than ever, you can access <br/> Zwallet wherever you
                    are. Desktop, laptop, mobile phone? <br/> we cover all of that for you!</h6>
                <div className="form-list mb-5">
                    <div className="input-group flex-nowrap mb-3 mt-5">
                        <span className="input-group-text form-border2" style={{marginLeft: "-5px"}}>
                            <img src={user} alt="user" />
                        </span>
                        <input type="text" className="form-control form-border" placeholder="Jonathan Mandel"/>
                    </div>
                    <div className="input-group flex-nowrap mt-5 mb-5">
                        <span className="input-group-text form-border2">
                            <img src={mail} alt="mail" />
                        </span>
                        <input type="email" className="form-control form-border" placeholder="pewdiepie1@gmail.com"/>
                    </div>
                    <div className="input-group flex-nowrap mb-3">
                        <span className="input-group-text form-border2">
                        <img src={lock} alt="lock" />
                        </span>
                        <input type="password" className="form-control form-border" placeholder="Create your password"/>
                    </div>
                </div>
                <div className='underlines'>
                    <Link to="/Home" className="d-grid btn-signup">
                        <Button type="button" variant="success">Sign Up</Button>
                    </Link>
                </div>
                <h3 className="signup">Already have an account? Let’s <Link to="/Login">Log in</Link>
                </h3>
            </aside>
    </div>
  )
}

export default signup