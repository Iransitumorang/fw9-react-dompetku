import React from 'react'
import Sidebar from '../components/Sidebar';
import '../assets/css/Style.css';
// import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import mail from "../assets/img/icons8-mail-24.png";
import lock from "../assets/img/icons8-lock-24.png";
import {Form, Button} from 'react-bootstrap';
import {Formik} from 'formik';
import * as Yup from 'yup';
// import { AiOutlineMail } from 'react-icons/ai';

const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address format').required('Required'),
    password: Yup.string().min(6).required('Required')
  })

  const AuthForm = ({errors, handleSubmit, handleChange})=> {
  console.log(errors)
  return (
    <>
            <Form noValidate onSubmit={handleSubmit}>
                <Form.Group className="input-group flex-nowrap mt-5 mb-5 d-flex" controlId="formBasicEmail">
                    <div className="input-group-text form-border2">
                        <img src={mail} alt="mail" />
                    </div>
                    {/* <AiOutlineMail /> */}
                        <Form.Control name="email" onChange={handleChange} type="email" className="form-control form-border w-100 me-2" placeholder="pewdiepie1@gmail.com" isInvalid={!!errors.email}/>
                        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="input-group flex-nowrap" controlId="formBasicPassword">
                    <div className="input-group-text form-border2">
                        <img src={lock} alt="lock" />
                    </div>
                    <Form.Control name="password" type="password" className="form-control form-border w-100 me-2" placeholder="Enter your password" onChange={handleChange} isInvalid={!!errors.password}/>
                    <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                </Form.Group>

                <div className="text-end password">
                    <Link to="/ResetPassword">Forgot Password?</Link>
                </div>
                <h3 className="invalid mt-3">Email or Password Invalid</h3>
                <Link to="/Home" className="d-grid btn-login underlines">
                    <Button type="submit" variant="success">Login</Button>
                </Link>
                <h3 className="signup">Don’t have an account? Let’s <Link to="/Signup">Sign Up</Link></h3>
            </Form>
    </>
  )
}

function Login() {
    // const onLoginRequest = (val) => {
    //     if(val.email === 'admin@mail.com' && val.password === '1234'){
    //       window.alert('Login success')
    //     }else{
    //       window.alert('Login Failed')
    //     }
    //   }
  return (
    <>
        <div className='d-flex'>
            <Sidebar />
            <aside className="col-12 col-md-5 d-flex flex-column justify-content-center gap-2 px-5">
                <h3 className="start-acc container-md-fluid">Start Accessing Banking Needs <br/> With All Devices and All Platforms
                    <br/> With
                    30.000+ Users</h3>
                <h6 className="transfering">Transfering money is eassier than ever, you can access <br/> Zwallet wherever you
                    are. Desktop, laptop, mobile phone? <br/> we cover all of that for you!</h6>

                <div className='d-flex flex-column gap-5' >
                    <Formik
                    //   onSubmit={onLoginRequest}
                    initialValues={{email: '', password: ''}}
                    validationSchema={loginSchema}>
                    {(props)=><AuthForm {...props} />}
                    </Formik>
                </div>
            </aside>
        </div>
          </>
  )
}

export default Login