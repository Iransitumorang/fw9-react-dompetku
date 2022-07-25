import React from 'react';
import Sidebar from '../components/Sidebar';
import '../assets/css/Style.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';

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
                        <span className="input-group-text form-border2">
                            <i className="fa-regular fa-user"></i>
                        </span>
                        <input type="text" className="form-control form-border" value="Jonathan Mandel"/>
                    </div>
                    <div className="input-group flex-nowrap mt-5 mb-5">
                        <span className="input-group-text form-border2">
                            <i className="fa-regular fa-envelope"></i>
                        </span>
                        <input type="email" className="form-control form-border" value="pewdiepie1@gmail.com"/>
                    </div>
                    <div className="input-group flex-nowrap mb-3">
                        <span className="input-group-text form-border2">
                            <i className="fa-solid fa-lock"></i>
                        </span>
                        <input type="password" className="form-control form-border" placeholder="Create your password"/>
                    </div>
                </div>
                <div className='underlines'>
                    <a href="/ibootstrap/dashboard/home.html" className="d-grid btn-signup">
                        <Button type="button" variant="success">Sign Up</Button>
                    </a>
                </div>
                <h3 className="signup">Already have an account? Let’s <Link to="/Login">Log in</Link>
                </h3>
            </aside>
    </div>
  )
}

export default signup