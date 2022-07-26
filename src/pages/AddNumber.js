import React from 'react';
import '../assets/css/Style.css';
import HeaderDashboard from '../components/HeaderDashboard';
import FooterDashboard from '../components/FooterDashboard';
import Navbar from '../components/Navbar';
import HambergerMenu from '../components/HambergerMenu';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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

                    <div>
                        <div className="d-flex justify-content-center">
                            <div className="input-group flex-nowrap mb-3 form-value">
                                <span className="input-group-text form-border2">
                                    <i className="fa-solid fa-phone"></i>
                                </span>
                                <input type="number" className="form-control form-border"
                                    placeholder="Enter your phone number"/>
                            </div>
                        </div>
                        {/* <div className="d-grid col-6 mx-auto"> */}
                        <Link to="/Home" className="d-grid col-6 mx-auto">
                            <Button variant="success" className="mt-3 mb-5 add-number2" type="button">Add Phone Number</Button>
                        </Link>
                        {/* </div> */}
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