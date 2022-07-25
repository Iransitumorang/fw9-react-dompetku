// import React from 'react';
import '../assets/css/Style.css';
import HeaderDashboard from '../components/HeaderDashboard';
import FooterDashboard from '../components/FooterDashboard';
import Navbar from '../components/Navbar';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import HambergerMenu from '../components/HambergerMenu';
import contactdashboard from "../assets/img/contacts-dashboard.png";
import contactdashboard1 from "../assets/img/contacts-dashboard-1.png";
import contactdashboard2 from "../assets/img/contacts-dashboard-2.png";
import contactdashboard3 from "../assets/img/contacts-dashboard-3.png";

function PinConfirm () {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
        <HeaderDashboard />
        <div className='d-flex'>
            <Navbar />
            <HambergerMenu />
            <article className="col-12 col-md-8 ms-5">
              <div className="right-slide p-md-5">
                  <div className="mt-2 ms-3">
                      <h3 className="transfer-to">Transfer To </h3>
                  </div>

                  <div className="d-flex flex-column">
                      <div className="d-flex flex-column">
                          <img src={contactdashboard} alt="Dashboard Dashboard"/>
                      </div>
                      <h3 className="details">Details </h3>
                      <img src={contactdashboard} alt='Details'/>
                      <img src={contactdashboard1} alt='Details'/>
                      <img src={contactdashboard2} alt='Details'/>
                      <img src={contactdashboard3} alt='Details'/>
                  </div>

                  <div style={{textAlign: "End"}}>
                    <Button variant="success" className='modal-continue' onClick={handleShow}>
                        Continue
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title className="modal-title enter-pin ms-3 mt-4">Enter PIN to Transfer</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="enter-your ms-3">Enter your 6 digits PIN for confirmation to <br/> continue transferring money. </Modal.Body>
                        <Modal.Body>
                            <div className="auth-form-wrapper py-md-5 d-flex">
                                <div className="d-flex gap-4 flex-row pin-input-wrapper">
                                    <div className="d-flex align-items-center modal-value">
                                        <input maxlength="1" min="0" max="9" type="number"/>
                                    </div>
                                    <div className="d-flex align-items-center modal-value">
                                        <input maxlength="1" min="0" max="9" type="number"/>
                                    </div>
                                    <div className="d-flex align-items-center modal-value">
                                        <input maxlength="1" min="0" max="9" type="number"/>
                                    </div>
                                    <div className="d-flex align-items-center modal-value">
                                        <input maxlength="1" min="0" max="9" type="number"/>
                                    </div>
                                    <div className="d-flex align-items-center modal-value">
                                        <input maxlength="1" min="0" max="9" type="number"/>
                                    </div>
                                    <div className="d-flex align-items-center modal-value">
                                        <input maxlength="1" min="0" max="9" type="number"/>
                                    </div>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Link to="/StatusSuccess">
                                <Button variant="success" className="modal-btn-continue mb-4" onClick={handleClose}>
                                    Continue
                                </Button>
                            </Link>
                        </Modal.Footer>
                    </Modal>
                  </div>
              </div>
            </article>
        </div>
        <FooterDashboard />
    </div>
  )
}

export default PinConfirm