import React from 'react';
import '../assets/css/Style.css';
import HeaderDashboard from '../components/HeaderDashboard';
import FooterDashboard from '../components/FooterDashboard';
import Navbar from '../components/Navbar';
import HambergerMenu from '../components/HambergerMenu';

function PinConfirm () {
  return (
    <div>
        <HeaderDashboard />
        <div className='d-flex'>
            <Navbar />
            <HambergerMenu />
            <article class="col-12 col-md-8 ">
              <div class="right-slide p-md-5">
                  <div class="mt-2 ms-3">
                      <h3 class="transfer-to">Transfer To </h3>
                  </div>

                  <div class="d-flex flex-column">
                      <div class="d-flex flex-column">
                          <img src="../assets/images/home/contacts-dashboard.png" alt="Dashboard Dashboard"/>
                      </div>
                      <h3 class="details">Details </h3>
                      <img src="../assets/images/home/confirm-1.png" alt='Details'/>
                      <img src="../assets/images/home/confirm-2.png" alt='Details'/>
                      <img src="../assets/images/home/confirm-3.png" alt='Details'/>
                      <img src="../assets/images/home/confirm-4.png" alt='Details'/>
                  </div>
                  <div>
                      <div class="d-flex justify-content-end">
                          <button type="button" class="btn btn-primary continue" data-bs-toggle="modal"
                              data-bs-target="#exampleModal"> Continue
                          </button>
                      </div>

                      {/* <!-- Modal --> */}
                      <div class="modal fade modal-wrapper" id="exampleModal" tabindex="-1"
                          aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div class="modal-dialog modal-dialog-centered">
                              <div class="modal-content">
                                  <div class="modal-header">
                                      <h5 class="modal-title enter-pin" id="exampleModalLabel">Enter PIN to Transfer</h5>
                                      <button type="button" class="btn-close" data-bs-dismiss="modal"
                                          aria-label="Close">
                                      </button>
                                  </div>
                                  <div>
                                      <h6 class="enter-your ms-3">Enter your 6 digits PIN for
                                          confirmation to <br/> continue transferring money. 
                                      </h6>
                                  </div>
                                  <div class="modal-body">
                                      <div class="auth-form-wrapper py-md-5 d-flex justify-content-center">
                                          <div class="d-flex gap-4 flex-row pin-input-wrapper">
                                              <div class="d-flex align-items-center modal-value">
                                                  <input maxlength="1" min="0" max="9" type="number"/>
                                              </div>
                                              <div class="d-flex align-items-center modal-value">
                                                  <input maxlength="1" min="0" max="9" type="number"/>
                                              </div>
                                              <div class="d-flex align-items-center modal-value">
                                                  <input maxlength="1" min="0" max="9" type="number"/>
                                              </div>
                                              <div class="d-flex align-items-center modal-value">
                                                  <input maxlength="1" min="0" max="9" type="number"/>
                                              </div>
                                              <div class="d-flex align-items-center modal-value">
                                                  <input maxlength="1" min="0" max="9" type="number"/>
                                              </div>
                                              <div class="d-flex align-items-center modal-value">
                                                  <input maxlength="1" min="0" max="9" type="number"/>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="modal-footer">
                                      <button type=" button" class="btn btn-primary btn-continue"
                                          data-bs-dismiss="modal">Continue
                                      </button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            </article>
        </div>
        <FooterDashboard />
    </div>
  )
}

export default PinConfirm