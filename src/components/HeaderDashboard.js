// import React from 'react';
import dompetku2 from "../assets/img/dompetku2.png";
import { Link } from 'react-router-dom';
import head from "../assets/img/robert-head.png";
import notif from "../assets/img/robert-notif.png";
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import arrowdown from "../assets/img/icons8-down-24.png";
import arrowup from "../assets/img/icons8-up-arrow-24.png";

function HeaderDashboard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <header className="header-dashboard d-md-flex justify-content-between d-none mb-5 pe-3 py-2">
        <div className="container-fluid d-flex justify-content-between">
          <Link to="/">
            <img src={dompetku2} className="img-fluid" style={{maxWidth: "75%"}} alt="Logo"/>
          </Link>
            {/* <img src={right} alt='Brand' className="notif-modal img-fluid" data-bs-toggle="modal" data-bs-target="#exampleModal"/> */}
          <div className="d-flex" style={{height: "70%"}}>
              <img src={head} className="robert-head mt-2" alt="robert-head"/>
              <div className="px-4 text-center">
                <h3 style={{fontWeight: "700", fontSize: "18px", color: "#FFFFFF", marginBottom: "unset"}}>Robert Chandler</h3>
                <span style={{fontWeight: "400", fontSize: "13px", color: "#FFFFFF"}}>+62 8139 3877 7946</span>
              </div>
              <img src={notif} className="notif-head mt-2" alt="robert-head"  onClick = { handleShow }/>
          </div>
        </div>
        <div>
          <Modal show = { show } onHide = { handleClose } >
            <Modal.Header closeButton >
              <Modal.Title className = "today ms-3 mt-4"> Today </Modal.Title> 
            </Modal.Header > 
            <Modal.Body >
                <div className = "px-2 mt-2 ms-3 modal-notif w-100">
                  <div className = 'd-flex flex-row modal-pn mb-4 p-3'>
                    <img src = {arrowdown} alt = "Income" style = {{width: "10%", height: "30px"}}/> 
                    <div className = 'd-flex flex-column' >
                      <span className='modal-span1'> Transfered from Joshua Lee </span> 
                      <span className='modal-span2'> Rp220 .000 </span> 
                    </div > 
                  </div> 
                  <div className = 'd-flex flex-row modal-pn mb-4 p-3'>
                    <img src = { arrowup } alt = "Expense" style = {{width: "10%", height: "30px"}}/> 
                    <div className = 'd-flex flex-column'>
                      <span className='modal-span1'> Netflix subscription </span> 
                      <span className='modal-span2'> Rp149 .000 </span> 
                    </div > 
                  </div> 
                  <span className = "this-week"> This Week </span> 
                  <div className = 'd-flex flex-row modal-pn my-4 p-3'>
                    <img src = { arrowup } alt = "Expense" style = {{ width: "10%", height: "30px" }} /> 
                    <div className = 'd-flex flex-column' >
                      <span className='modal-span1'> Transfer to Jessica Lee </span> 
                      <span className='modal-span2'> Rp100 .000 </span> 
                    </div > 
                  </div> 
                  <div className = 'd-flex flex-row modal-pn mb-4 p-3'>
                    <img src = { arrowdown } alt = "Income" style = {{ width: "10%", height: "30px" }}/> 
                    <div className = 'd-flex flex-column' >
                      <span className='modal-span1'> Top up from BNI E - Banking </span> 
                      <span className='modal-span2'> Rp300 .000 </span> 
                    </div > 
                  </div> 
                </div > 
            </Modal.Body> 
          </Modal > 
        </div> 
    </header>
  )
}

export default HeaderDashboard
