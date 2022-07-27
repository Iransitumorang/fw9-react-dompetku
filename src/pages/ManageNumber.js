// import React from 'react';
import '../assets/css/Style.css';
import HeaderDashboard from '../components/HeaderDashboard';
import FooterDashboard from '../components/FooterDashboard';
import Navbar from '../components/Navbar';
import HambergerMenu from '../components/HambergerMenu';
import trash from "../assets/img/trash.png"
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function ManageNumber () {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
        <HeaderDashboard />
        <div className='d-flex'>
            <Navbar />
            <HambergerMenu />
            <article className="col-12 col-md-8 ">
            <aside>
                <div className="right-slide p-5">
                    <div className="mt-2 ms-3">
                        <h3 className="start-acc">Manage Phone Number
                        </h3>
                        <h3 className="transfering">You can only delete the phone number and then <br/> you must add another
                            phone number.</h3>
                    </div>

                    <div className="d-md-flex justify-content-md-between p-md-2 primary-parent">
                        <div className="ms-4">
                            <h3 className="pt-2 primary">Primary</h3>
                            <h3 className="number-phone">+62 813 9387 7946</h3>
                        </div>
                        <div>
                            <img src={trash} className="p-4" alt='trash' onClick={handleShow}/>
                        </div>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title>Manage Phone Number</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Are you sure want to delete tihs number?</Modal.Body>
                            <Modal.Footer>
                            <Link to="/Home">
                                <Button variant="secondary" onClick={handleClose}>
                                    Yes
                                </Button>
                            </Link>
                            <Button variant="success" onClick={handleClose}>
                                Not Sure
                            </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                    <Link to="/AddNumber" className="w-25 text-decoration-none text-center" style={{marginLeft: "25vw"}}>
                            <Button type="button" variant="success" className="mt-5 btn-change-password">Add Number</Button>
                        </Link>
                </div>
            </aside>
        </article>
        </div>
        <FooterDashboard />
    </div>
  )
}

export default ManageNumber
