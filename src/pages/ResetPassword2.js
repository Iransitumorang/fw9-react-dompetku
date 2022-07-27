import React from 'react';
import Sidebar from '../components/Sidebar';
import '../assets/css/Style.css';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import lock from "../assets/img/icons8-lock-24.png";

import {Formik} from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
    password: Yup.string().min(6).required('Required'),
    password2: Yup.string().min(6).required('Required')
  })
  
const AuthForm = ({errors, handleSubmit, handleChange})=> {
    return (
        <>
            <Form className="form-list mb-5" onSubmit={handleSubmit}>
                    <Form.Group className="input-group flex-nowrap mt-5 mb-5">
                        <span className="input-group-text form-border2">
                            <img src={lock} alt="lock"/>
                        </span>
                        <Form.Control type="password" name="password" onChange={handleChange} isInvalid={!!errors.password} className="form-control form-border w-100 me-2" placeholder="Input your new password"/>
                        <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="input-group flex-nowrap mt-5 mb-5">
                        <span className="input-group-text form-border2">
                            <img src={lock} alt="lock"/>
                        </span>
                        <Form.Control type="password" className="form-control form-border w-100 me-2" name="password2" onChange={handleChange}
                            placeholder="Re-Input your new password" isInvalid={!!errors.password2}/>
                            <Form.Control.Feedback type="invalid">{errors.password2}</Form.Control.Feedback>
                    </Form.Group>
                <div className='underlines'>
                    <Link to="/Login" className="d-grid rp-btn-confirm">
                        <Button type="button" variant="success">Reset Password</Button>
                    </Link>
                </div>
            </Form>
        </>
    )
  }

function ResetPassword() {
  
  return (
    <div className='d-flex'>
        <Sidebar />
        <aside className="col-12 col-md-5 d-flex flex-column justify-content-center gap-2 px-5">
            <h3 className="start-acc">Did You Forgot Your Password? <br/> Don’t Worry, You Can Reset Your <br/> Password In a Minutes.
            </h3>
                <h6 className="transfering">To reset your password, you must type your e-mail and we <br/> will send a link
                    to your email and you will be directed to the <br/> reset password screens.</h6> 

                <div className='d-flex flex-column gap-5' >
                    <Formik
                    //   onSubmit={onLoginRequest}
                    initialValues={{password: '', password2:''}}
                    validationSchema={loginSchema}>
                    {(props)=><AuthForm {...props} />}
                    </Formik>
                </div>
        </aside>
    </div>
  )
}

export default ResetPassword