import React from 'react';
import '../assets/css/Style.css';
import HeaderDashboard from '../components/HeaderDashboard';
import FooterDashboard from '../components/FooterDashboard';
import Navbar from '../components/Navbar';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HambergerMenu from '../components/HambergerMenu';
import lock from "../assets/img/icons8-lock-24.png";
import {Formik} from 'formik'
import * as Yup from 'yup'

const loginSchema = Yup.object().shape({
  password: Yup.string().min(6).required('Required'),
  password2: Yup.string().min(6).required('Required'),
  password3: Yup.string().min(6).required('Required')
})

const AuthForm = ({errors, handleSubmit, handleChange})=> {
    return (
        <>
            <Form className="d-flex flex-column align-items-center gap-3 px-5" onSubmit={handleSubmit}>
                <Form.Group className="input-group flex-nowrap mb-3">
                    <span className="input-group-text form-border2">
                    <img src={lock} className="img-fluid" alt='lock' />
                    </span>
                    <Form.Control type="password" name="password" onChange={handleChange} isInvalid={!!errors.password} className="form-control form-border w-100 me-2" placeholder="Current password"/>
                    <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="input-group flex-nowrap mb-3">
                    <span className="input-group-text form-border2">
                        <img src={lock} className="img-fluid" alt='lock' />
                    </span>
                    <Form.Control type="password" className="form-control form-border w-100 me-2" placeholder="New password" name="password2" onChange={handleChange} isInvalid={!!errors.password2}/>
                    <Form.Control.Feedback type="invalid">{errors.password2}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="input-group flex-nowrap mb-3">
                    <span className="input-group-text form-border2">
                        <img src={lock} className="img-fluid" alt='lock' />
                    </span>
                    <Form.Control type="password" className="form-control form-border w-100 me-2" placeholder="Repeat New password" name="password3" onChange={handleChange} isInvalid={!!errors.password3}/>
                    <Form.Control.Feedback type="invalid">{errors.password3}</Form.Control.Feedback>
                </Form.Group>

                <Link to="/Login" className="input-group flex-nowrap mb-3 mt-3 d-grid">
                    <Button variant="success" className="mb-5 btn-change-password" type="button">Change Password
                    </Button>
                </Link>
            </Form>
        </>
    )
}

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

            <div className='d-flex flex-column gap-5' >
                    <Formik
                    //   onSubmit={onLoginRequest}
                    initialValues={{password: '', password2:'', password3:''}}
                    validationSchema={loginSchema}>
                    {(props)=><AuthForm {...props} />}
                    </Formik>
                </div>
        </article>
        </div>
        <FooterDashboard />
    </div>
  )
}

export default ChangePassword