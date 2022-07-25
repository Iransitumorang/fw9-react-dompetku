import React from 'react';
import Sidebar from '../components/Sidebar';
import '../assets/css/Style.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';

function signup() {
  return (
      <div className='d-flex'>
        <Sidebar />
        <aside class="col-12 col-md-5 d-flex flex-column justify-content-center gap-2 px-5">
                <h3 class="start-acc">Start Accessing Banking Needs <br/> With All Devices and All Platforms <br/>
                    With 30.000+ Users</h3>
                <h6 class="transfering">Transfering money is eassier than ever, you can access <br/> Zwallet wherever you
                    are. Desktop, laptop, mobile phone? <br/> we cover all of that for you!</h6>
                <div class="form-list mb-5">
                    <div class="input-group flex-nowrap mb-3 mt-5">
                        <span class="input-group-text form-border2">
                            <i class="fa-regular fa-user"></i>
                        </span>
                        <input type="text" class="form-control form-border" value="Jonathan Mandel"/>
                    </div>
                    <div class="input-group flex-nowrap mt-5 mb-5">
                        <span class="input-group-text form-border2">
                            <i class="fa-regular fa-envelope"></i>
                        </span>
                        <input type="email" class="form-control form-border" value="pewdiepie1@gmail.com"/>
                    </div>
                    <div class="input-group flex-nowrap mb-3">
                        <span class="input-group-text form-border2">
                            <i class="fa-solid fa-lock"></i>
                        </span>
                        <input type="password" class="form-control form-border" placeholder="Create your password"/>
                    </div>
                </div>
                <div className='underlines'>
                    <a href="/ibootstrap/dashboard/home.html" class="d-grid btn-signup">
                        <Button type="button" variant="success">Sign Up</Button>
                    </a>
                </div>
                <h3 class="signup">Already have an account? Let’s <Link to="/Login">Log in</Link>
                </h3>
            </aside>
    </div>
  )
}

export default signup