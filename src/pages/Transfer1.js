import React from 'react';
import '../assets/css/Style.css';
import HeaderDashboard from '../components/HeaderDashboard';
import FooterDashboard from '../components/FooterDashboard';
import Navbar from '../components/Navbar';
import HambergerMenu from '../components/HambergerMenu';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import samsuhi from "../assets/img/sam-suhi.jpg";
import motoro from "../assets/img/momo-toro.png";
import jekeen from "../assets/img/jessica-keen.png";
import mile from "../assets/img/mile.png";
import search from "../assets/img/icons8-search-24.png";

function Data(props) {
    return <span className='search-receiver'> {props.name}</span>
}

function Contacts(props) {
    return <span className='numb-tf'>{props.number}</span>
}

const Transfer1 = () => {
  return (
    <div>
        <HeaderDashboard />
        <div className='d-flex'>
            <Navbar />
            <HambergerMenu />
            <article className="col-12 col-md-8">
                <aside>
                    <div className="right-slide p-md-5">
                        <div className="mt-2 ms-3">
                            <h3 className="search-receiver">Search Receiver
                            </h3>
                            <div className="form-list mb-5">
                                <div className="input-group flex-nowrap mt-5 mb-5">
                                    <span className="input-group-text form-border2">
                                        <img src={search} alt="search" />
                                    </span>
                                    <input type="email" className="form-control form-border" placeholder="Search receiver here" />
                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-column mb-5">
                            <div className="d-flex flex-column gap-5">
                                <div className='d-flex flex-row'>
                                    <img src={samsuhi} alt="Samuel Suhi"/>
                                    <div className='d-flex flex-column ms-3'>
                                        <Data name="Samuel Suhi"/>
                                        <Contacts number="+62 813-8492-9994"/>
                                    </div>
                                </div>
                                <div className='d-flex flex-row'>
                                    <img src={motoro} alt="Momo Taro"/>
                                    <div className='d-flex flex-column ms-3'>
                                        <Data name="Momo Taro"/>
                                        <Contacts number="+62 812-4343-6731"/>
                                    </div>
                                </div>
                                <div className='d-flex flex-row'>
                                    <img src={jekeen} alt="Jessica Keen"/>
                                    <div className='d-flex flex-column ms-3'>
                                        <Data name="Jessica Keen"/>
                                        <Contacts number="+62 811-3452-5252"/>
                                    </div>
                                </div>
                                <div className='d-flex flex-row'>
                                    <img src={mile} alt="Michael Le"/>
                                    <div className='d-flex flex-column ms-3'>
                                        <Data name="Michael Le"/>
                                        <Contacts number="+62 810-4224-4613"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Link to="/Transfer2" className="mt-5 ms-4">
                            <Button variant="success" className="btn-change-password">Transfer</Button>
                        </Link>
                    </div>
                </aside>
            </article>
        </div>
        <FooterDashboard />
    </div>
  )
}

export default Transfer1