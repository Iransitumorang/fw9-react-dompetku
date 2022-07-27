import React from 'react'
import Sidebar from '../components/Sidebar';
import '../assets/css/Style.css';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
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
                <Form>
                    <Form.Group className="input-group flex-nowrap mt-5 mb-5" controlId="formBasicEmail">
                        <span className="input-group-text form-border2">
                            <img src={mail} alt="mail" />
                        </span>
                        <Form.Control type="email" className="form-control form-border" placeholder="pewdiepie1@gmail.com"/>
                    </Form.Group>
                    <Form.Group className="input-group flex-nowrap" controlId="formBasicPassword">
                        <span className="input-group-text form-border2">
                            <img src={lock} alt="lock" />
                        </span>
                        <Form.Control type="password" className="form-control form-border" placeholder="Enter your password"/>
                    </Form.Group>
                    <Form.Text className="text-end password text-end">
                        <Link to="/ResetPassword">Forgot Password?</Link>
                    </Form.Text>
                    <h3 className="invalid mt-3">Email or Password Invalid</h3>
                    <div className='underlines'>
                        <Link to="/Home" className="d-grid btn-login">
                            <Button type="button" variant="success">Login</Button>
                        </Link>
                    </div>
                    <h3 className="signup">Don’t have an account? Let’s <Link to="/Signup">Sign Up</Link></h3>
                </Form>
            </aside>
    </div>
  )
}

export default Login