import React from 'react';
import '../assets/css/Style.css';
import HeaderDashboard from '../components/HeaderDashboard';
import FooterDashboard from '../components/FooterDashboard';
import Navbar from '../components/Navbar';
import HambergerMenu from '../components/HambergerMenu';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Formik} from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
    password: Yup.string().min(6).required('Required'),
    password2: Yup.string().min(6).required('Required')
  })
  
const AuthForm = ({errors, handleSubmit, handleChange})=> {
    return (
        <>
         <Form className="auth-form-wrapper py-5 d-flex justify-content-center">
            <Form.Group className="d-flex gap-4 flex-row pin-input-wrapper" style={{marginLeft: "auto"}}>
                <div className="d-flex align-items-center value">
                    <Form.Control maxlength="1" min="0" max="9" type="number"/>
                </div>
                <div className="d-flex align-items-center value">
                    <Form.Control maxlength="1" min="0" max="9" type="number"/>
                </div>
                <div className="d-flex align-items-center value">
                    <Form.Control maxlength="1" min="0" max="9" type="number"/>
                </div>
                <div className="d-flex align-items-center value">
                    <Form.Control maxlength="1" min="0" max="9" type="number"/>
                </div>
                <div className="d-flex align-items-center value">
                    <Form.Control maxlength="1" min="0" max="9" type="number"/>
                </div>
                <div className="d-flex align-items-center value">
                    <Form.Control maxlength="1" min="0" max="9" type="number"/>
                </div>
            </Form.Group>
        </Form>
        <Link to="/ChangePin2" className="d-flex justify-content-center">
            <Button type="button" variant="success" className="change-pin2 btn-change-password">Change PIN</Button>
        </Link>
        </>
    )
}

const ChangePin = () => {
  return (
    <div>
        <HeaderDashboard />
        <div className='d-flex'>
            <Navbar />
            <HambergerMenu />
            <article className="col-12 col-md-8 ">
            <aside>
                <div className="right-slide p-5">
                    <div className="mt-2 ms-3 mb-5">
                        <h3 className="start-acc">Change Pin
                        </h3>
                        <h3 className="transfering">Enter your current 6 digits Zwallet PIN below to <br/> continue to the next
                            steps.
                        </h3>
                    </div>

                    <div className='d-flex flex-column gap-5' >
                    <Formik
                    //   onSubmit={onLoginRequest}
                    initialValues={{password: '', password2:''}}
                    validationSchema={loginSchema}>
                    {(props)=><AuthForm {...props} />}
                    </Formik>
                </div>
                </div>
            </aside>
        </article>
        </div>
        <FooterDashboard />
    </div>
  )
}

export default ChangePin