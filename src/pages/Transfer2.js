import React from 'react';
import '../assets/css/Style.css';
import HeaderDashboard from '../components/HeaderDashboard';
import FooterDashboard from '../components/FooterDashboard';
import Navbar from '../components/Navbar';
import HambergerMenu from '../components/HambergerMenu';
import contactdashboard from "../assets/img/contacts-dashboard.png";
import notes from "../assets/img/icons8-pencil-24.png";
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Formik} from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
    amount: Yup.string().min(5, 'Amount Minimum 10.000').max(8, 'Maximum Rp. 10.000.000').required('Required'),
    notes: Yup.string().min(3, "Mininum 3 characters").max(15, "Maximum 15 characters").required("Required!")
  })

const AuthForm = ({errors, handleSubmit, handleChange})=> {
    return (
        <>
            <Form className='text-center'  onSubmit={handleSubmit}>
                <Form.Control type="number" name="amount" className="form-control form-border me-5 amount-value d-inline" placeholder="0.00" onChange={handleChange} isInvalid={!!errors.amount} />
                <Form.Control.Feedback type="invalid">{errors.amount}</Form.Control.Feedback>
                <h3 className="seratus20">Rp120.000 Available </h3>

                <Form.Group className="form-list mb-5 parent-input w-50">
                    <div className="input-group flex-nowrap mt-5 mb-3 border-i">
                        <span className="input-group-text form-border2">
                            <img src={notes} alt="notes"/>
                       </span>
                        <Form.Control type="text" name="notes" className="form-control form-border w-100 me-5" placeholder="For buying some socks" onChange={handleChange} isInvalid={!!errors.notes} />
                        <Form.Control.Feedback type="invalid">{errors.notes}</Form.Control.Feedback>
                    </div>
                </Form.Group>
            </Form>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <Link to="/StatusSuccess">
                    <Button variant="success" className="px-4 me-3 mt-5 continue" type="button" style={{fontWeight: "700", fontSize: "18px", lineHeight: "25px"}}>Continue
                    </Button>
                </Link>
            </div>
        </>
    )
  }

const Transfer2 = () => {
  return (
    <div>
    <HeaderDashboard />
    <div className='d-flex'>
        <Navbar />
        <HambergerMenu />
        <article className="col-8 ">
            <aside>
                <div className="right-slide p-5">
                    <div className="mt-2 ms-3">
                        <h3 className="transfer-money">Transfer Money </h3>
                    </div>

                    <div className="d-flex flex-column">
                        <div className="d-flex flex-column">
                            <img src={contactdashboard} alt="Dashboard Dashboard"/>
                        </div>
                        <h3 className="type-amount ms-3 mb-5">Type the amount you want to transfer and then
                            <br/> press continue to the next steps.
                        </h3>
                        

                    <div className='d-flex flex-column gap-5' >
                    <Formik
                    //   onSubmit={onLoginRequest}
                    initialValues={{amount: '', notes: ''}}
                    validationSchema={loginSchema}>
                    {(props)=><AuthForm {...props} />}
                    </Formik>
                    </div>
                    </div>
                </div>
            </aside>
        </article>
        </div>
        <FooterDashboard />
    </div>
  )
}

export default Transfer2