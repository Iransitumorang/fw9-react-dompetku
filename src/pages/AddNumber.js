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
import { BsTelephone } from 'react-icons/bs';

const loginSchema = Yup.object().shape({
    phoneNumber: Yup.string().min(10).max(15).required('Required')
  })
  
const AuthForm = ({errors, handleSubmit, handleChange})=> {
    return (
        <>
            <Form className="d-flex justify-content-center flex-column" onSubmit={handleSubmit}>
                <Form.Group className="input-group flex-nowrap mb-3 form-value" style={{alignSelf: "center"}}>
                    <span className="input-group-text form-border2">
                        <BsTelephone/>
                    </span>
                    <Form.Control type="number" name="phoneNumber" className="form-control form-border w-100 me-2" placeholder="Enter your phone number" onChange={handleChange} isInvalid={!!errors.phoneNumber} />
                    <Form.Control.Feedback type="invalid">{errors.phoneNumber}</Form.Control.Feedback>
                </Form.Group>
            <Link to="/Home" className="d-grid col-6 mx-auto">
                <Button variant="success" className="mt-3 mb-5 add-number2" type="button">Add Phone Number</Button>
            </Link>
            </Form>
        </>
    )
}

const AddNumber = () => {
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
                        <h3 className="start-acc">Add Phone Number</h3>
                        <h3 className="transfering">Add at least one phone number for the transfer <br/> ID so you can
                            start transfering your money to <br/> another user.
                        </h3>
                    </div>

                    <div className='d-flex flex-column gap-5' >
                    <Formik
                    //   onSubmit={onLoginRequest}
                    initialValues={{phoneNumber: ''}}
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

export default AddNumber