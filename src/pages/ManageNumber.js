import React from 'react';
import '../assets/css/Style.css';
import HeaderDashboard from '../components/HeaderDashboard';
import FooterDashboard from '../components/FooterDashboard';
import Navbar from '../components/Navbar';
import HambergerMenu from '../components/HambergerMenu';
import trash from "../assets/img/trash.png"

function ManageNumber () {
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
                            <img src={trash} className="p-4" alt='trash'/>
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

export default ManageNumber
