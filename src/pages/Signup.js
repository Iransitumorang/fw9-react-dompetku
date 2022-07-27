import React from 'react';
import Sidebar from '../components/Sidebar';
import '../assets/css/Style.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import { Form } from 'react-bootstrap';
import {Formik} from 'formik';
import * as Yup from 'yup';

import user from "../assets/img/icons8-person-32.png";
import mail from "../assets/img/icons8-mail-24.png";
import lock from "../assets/img/icons8-lock-24.png";

const loginSchema = Yup.object().shape({
    fullName: Yup.string().min(3, "Mininum 3 characters").max(15, "Maximum 15 characters").required("Required!"),
    email: Yup.string().email('Invalid email address format').required('Required'),
    password: Yup.string().min(6).required('Required')
  })
  
  const AuthForm = ({errors, handleSubmit, handleChange})=> {
    return (
        <>
        <Form className="form-list mb-5" onSubmit={handleSubmit}>
                    <Form.Group className="input-group flex-nowrap mb-3 mt-5">
                        <span className="input-group-text form-border2" style={{marginLeft: "-5px"}}>
                            <img src={user} alt="user" />
                        </span>
                        <Form.Control type="text" name="fullName" className="form-control form-border w-100 me-2" placeholder="Jonathan Mandel" onChange={handleChange} isInvalid={!!errors.fullName} />
                        <Form.Control.Feedback type="invalid">{errors.fullName}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="input-group flex-nowrap mt-5 mb-5">
                        <span className="input-group-text form-border2">
                            <img src={mail} alt="mail" />
                        </span>
                        <Form.Control type="email" name="email" onChange={handleChange} className="form-control form-border w-100 me-2" placeholder="pewdiepie1@gmail.com" isInvalid={!!errors.email}/>
                        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="input-group flex-nowrap mb-3">
                        <span className="input-group-text form-border2">
                            <img src={lock} alt="lock" />
                        </span>
                        <Form.Control type="password" name="password" className="form-control form-border w-100 me-2" placeholder="Create your password" onChange={handleChange} isInvalid={!!errors.password}/>
                        <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                    </Form.Group>
                <div className='underlines'>
                    <Link to="/Home" className="d-grid btn-signup mt-5">
                        <Button type="button" variant="success">Sign Up</Button>
                    </Link>
                </div>
                <h3 className="signup">Already have an account? Let’s <Link to="/Login">Log in</Link>
                </h3>
            </Form>
        </>
    )
  }

function signup() {
  return (
      <div className='d-flex'>
        <Sidebar />
        <aside className="col-12 col-md-5 d-flex flex-column justify-content-center gap-2 px-5">
                <h3 className="start-acc">Start Accessing Banking Needs <br/> With All Devices and All Platforms <br/>
                    With 30.000+ Users</h3>
                <h6 className="transfering">Transfering money is eassier than ever, you can access <br/> Zwallet wherever you
                    are. Desktop, laptop, mobile phone? <br/> we cover all of that for you!</h6>
                
                <div className='d-flex flex-column gap-5' >
                    <Formik
                    //   onSubmit={onLoginRequest}
                    initialValues={{fullname:'dadada', email: '', password: ''}}
                    validationSchema={loginSchema}>
                    {(props)=><AuthForm {...props} />}
                    </Formik>
                </div>
            </aside>
    </div>
  )
}

export default signup