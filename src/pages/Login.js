import React from 'react'
import Sidebar from '../components/Sidebar';
import '../assets/css/Style.css';
// import { Link, useLocation, useNavigate, Alert } from "react-router-dom";
import {Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Formik} from 'formik';
import * as Yup from 'yup';
import { AiOutlineMail } from 'react-icons/ai';
import { FiLock } from 'react-icons/fi';
// import { useAuth0 } from "@auth0/auth0-react";


const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address format').required('Required'),
    password: Yup.string().min(6).required('Required')
  })

  const AuthForm = ({errors, handleSubmit, handleChange})=> {
    // const location = useLocation();
    // const navigate = useNavigate();
  
    // const onLogin = () => {
    //   localStorage.setItem("auth", "randomToken");
    //   navigate("/home");
    // };

    // const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    // !isAuthenticated && (
    <>
    {/* {location.state?.errorMsg && (
          <Alert variant="danger">{location.state.errorMsg}</Alert>
        )} */}
        <Form noValidate onSubmit={handleSubmit}>
            <Form.Group className="input-group flex-nowrap mt-5 mb-5 d-flex" controlId="formBasicEmail">
                <div className="input-group-text form-border2">
                    {/* <img src={mail} alt="mail" /> */}
                    <AiOutlineMail />
                </div>
                <Form.Control name="email" onChange={handleChange} type="email" className="form-control form-border w-100 me-2" placeholder="Pewdiepie1@gmail.com" isInvalid={!!errors.email}/>
                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="input-group flex-nowrap" controlId="formBasicPassword">
                <div className="input-group-text form-border2">
                    {/* <img src={lock} alt="lock" /> */}
                    <FiLock />
                </div>
                <Form.Control name="password" type="password" className="form-control form-border w-100 me-2" placeholder="Enter your password"  onChange={handleChange} isInvalid={!!errors.password}/>
                <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
            </Form.Group>

                <div className="text-end password mt-2">
                    <Link to="/ResetPassword">Forgot Password?</Link>
                </div>
                <h3 className="invalid mt-3">Email or Password Invalid</h3>
                <Link to="/Home" className="d-grid btn-login underlines">
                    <Button type="submit" variant="success" >Login</Button>
                </Link>
                <h3 className="signup">Don’t have an account? Let’s <Link to="/Signup">Sign Up</Link></h3>
        </Form>
    </>
        // )

        )
    }
    
    function Login() {
    // const dispatch = useDispatch();
    // const token = useSelector((state) => state.auth.token);
    // const navigate = useNavigate();
  
    // const onLogin = (value) => {
    //   const data = { email: value.email, password: value.password };
    //   dispatch(login(data));
    // };
  
    // React.useEffect(() => {
    //   if (token) {
    //     navigate("/dashboard");
    //   }
    // }, [navigate, token]);

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