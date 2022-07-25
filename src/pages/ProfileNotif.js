// import React from 'react';
import '../assets/css/Style.css';
import FooterDashboard from '../components/FooterDashboard';
import Navbar from '../components/Navbar';
import HambergerMenu from '../components/HambergerMenu';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import dompetku2 from "../assets/img/dompetku2.png";
import right from "../assets/img/home-header.png";

import transfer from "../assets/img/arrow-up.png";
import topup from "../assets/img/plus.png";
import grafik from "../assets/img/graphic.png";
import dashboard from "../assets/img/history-dashboard.png";
import dashboard1 from "../assets/img/history-dashboard-1.png";
import dashboard2 from "../assets/img/history-dashboard-2.png";
import dashboard3 from "../assets/img/history-dashboard-3.png";
import arrowdown from "../assets/img/icons8-down-24.png";
import arrowup from "../assets/img/icons8-up-arrow-24.png";

const ProfileNotif = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return ( 
    <div>
        <header className = "header-dashboard d-md-flex justify-content-between d-none mb-5 pe-3 py-2" >
            <div className = "container-fluid d-flex justify-content-between" >
                <img src = { dompetku2 }
                className = "img-fluid" style = {{ maxWidth: "13%" }} alt = "Logo" />
                <img src = { right } alt = 'Brand' onClick = { handleShow } /> 
            </div > 
        </header> 
        <div className = "d-flex" >
            <Navbar />
            <HambergerMenu />

            <article className = "col-8 col-md-8 container-md" >
                <div className = "d-md-flex justify-content-between flex-md-row mb-4 p-4 left-slide-home col-md-12" >
                    <div className = "d-flex flex-column" >
                        <h3 className = "balance-home" > Balance </h3> 
                        <h1 className = "seratus20-home" > Rp .120 .000 </h1> 
                        <h3 className = "number-phone-home" > +62 813 - 9387 - 7946 </h3> 
                    </div> 
                    <div className = "d-flex flex-column" >
                        <div className = "mb-3 home-transfer px-3 py-2" >
                            <a href = "/ibootstrap/dashboard/transfer1.html" >
                                <img src = { transfer } style = {{ width: "20%" }} alt = "transfer" className = "home-tf" />Transfer 
                            </a> 
                        </div> 
                        <div className = "home-topup px-3 py-2" >
                            <a href = "/ibootstrap/dashboard/topup.html" >
                                <img src = { topup } style = {{ width: "20%" }} alt = "top up" className = "home-topup" /> Top Up 
                            </a> 
                        </div> 
                    </div> 
                </div>

                <aside className = "d-md-flex flex-md-row justify-content-between" >
                    <div className = "left-slide d-flex flex-column  col-12 col-md-6 p-5" >
                        <div className = "d-flex justify-content-between" >
                            <div className = "d-flex flex-column" >
                                <img src = { arrowdown } alt = "Income" style = {{ width: "30%" }}/> 
                                <span className = "income" > Income </span> 
                                <span className = "expense" > Rp 2.120 .000 </span> 
                            </div > 
                            <div className = "d-flex flex-column" >
                                <img src = { arrowup } alt = "Expense" style = {{ width: "30%" }}/> 
                                <span className = "income" > Expense </span> 
                                <span className = "expense" > Rp 1.560 .000 </span> 
                            </div > 
                        </div> 
                        <div className = 'mt-5' >
                            <img src = { grafik } alt = "graphic" className = "img-fluid" />
                        </div> 
                    </div>

                    <div className = "right-slide col-12 col-md-5" >
                        <div className = "d-flex justify-content-between px-4 mt-3" >
                            <h3 className = "trans-history" > Transaction History </h3> 
                            <h3 className = "see-all" > See all </h3> 
                        </div >

                        <div >
                            <img src = { dashboard }alt = "History Dashboard" className = "img-fluid" />
                            <img src = { dashboard2 }alt = "History Dashboard" className = "img-fluid" />
                            <img src = { dashboard1 } alt = "History Dashboard" className = "img-fluid" />
                            <img src = { dashboard3 } alt = "History Dashboard" className = "img-fluid" />
                        </div> 
                    </div > 
                    <div >
                        <Modal show = { show } onHide = { handleClose } >
                            <Modal.Header closeButton >
                                <Modal.Title className = "today" > Today </Modal.Title> 
                            </Modal.Header > 
                        <Modal.Body >
                            <div className = "px-2 mt-2 ms-3 modal-notif w-100" >
                                <div className = 'd-flex flex-row' >
                                    <img src = { arrowdown } alt = "Income" style = {{ width: "10%" }}/> 
                                    <div className = 'd-flex flex-column' >
                                        <span > Transfered from Joshua Lee </span> 
                                        <span > Rp220 .000 </span> 
                                    </div > 
                                </div> 
                                <div className = 'd-flex flex-row' >
                                    <img src = { arrowup } alt = "Expense" style = {{ width: "10%" }}/> 
                                    <div className = 'd-flex flex-column' >
                                        <span > Netflix subscription </span> 
                                        <span > Rp149 .000 </span> 
                                    </div > 
                                </div> 
                                <span className = "this-week" > This Week </span> 
                                <div className = 'd-flex flex-row' >
                                    <img src = { arrowup } alt = "Expense" style = {{ width: "10%" }} /> 
                                    <div className = 'd-flex flex-column' >
                                        <span > Transfer to Jessica Lee </span> 
                                        <span > Rp100 .000 </span> 
                                    </div > 
                                </div> 
                                <div className = 'd-flex flex-row' >
                                    <img src = { arrowdown } alt = "Income" style = {{ width: "10%" }}/> 
                                    <div className = 'd-flex flex-column' >
                                        <span > Top up from BNI E - Banking </span> 
                                        <span > Rp300 .000 </span> 
                                    </div > 
                                </div> 
                            </div > 
                        </Modal.Body> 
                        </Modal > 
                    </div> 
                </aside > 
            </article> 
        </div > 
        <FooterDashboard />
    </div>
    )
}

export default ProfileNotif