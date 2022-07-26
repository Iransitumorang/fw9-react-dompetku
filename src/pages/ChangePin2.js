import React from 'react';
import '../assets/css/Style.css';
import HeaderDashboard from '../components/HeaderDashboard';
import FooterDashboard from '../components/FooterDashboard';
import Navbar from '../components/Navbar';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HambergerMenu from '../components/HambergerMenu';

function ChangePin2 () {
  return (
    <div>
        <HeaderDashboard />
        <div className='d-flex'>
            <Navbar />
            <HambergerMenu />
            <article className="col-8 ">
              <aside>
                  <div className="right-slide p-5">
                      <div className="mt-2 ms-3 mb-5">
                          <h3 className='start-acc'>Change Pin </h3>
                          <h3 className='transfering'>Type your new 6 digits security PIN to use in <br/> Zwallet.. </h3>
                      </div>

                      <div className="auth-form-wrapper py-5 d-flex justify-content-center">
                          <div className="d-flex gap-4 flex-row pin-input-wrapper justify-content-center">
                              <div className="d-flex align-items-center value">
                                  <input maxlength="1" min="0" max="9" type="number"/>
                              </div>
                              <div className="d-flex align-items-center value   ">
                                  <input maxlength="1" min="0" max="9" type="number"/>
                              </div>
                              <div className="d-flex align-items-center value   ">
                                  <input maxlength="1" min="0" max="9" type="number"/>
                              </div>
                              <div className="d-flex align-items-center value   ">
                                  <input maxlength="1" min="0" max="9" type="number"/>
                              </div>
                              <div className="d-flex align-items-center value   ">
                                  <input maxlength="1" min="0" max="9" type="number"/>
                              </div>
                              <div className="d-flex align-items-center value   ">
                                  <input maxlength="1" min="0" max="9" type="number"/>
                              </div>
                        </div>
                      </div>
                      {/* <div className="d-flex justify-content-center"> */}
                      <Link to="/Home" className="d-flex justify-content-center">
                          <Button variant="success" type="button" className="change-pin-btn">Change PIN</Button>
                      </Link>
                      {/* </div> */}
                  </div>
              </aside>
            </article>
        </div>
        <FooterDashboard />
    </div>
  )
}

export default ChangePin2
