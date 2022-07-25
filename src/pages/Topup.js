import React from 'react';
import '../assets/css/Style.css';
import HeaderDashboard from '../components/HeaderDashboard';
import FooterDashboard from '../components/FooterDashboard';
import Navbar from '../components/Navbar';
import HambergerMenu from '../components/HambergerMenu';

// import instructions1 from "../assets/img/instructions.png";
// import instructions2 from "../assets/img/instructions-1.png";
// import instructions3 from "../assets/img/instructions-2.png";
// import instructions4 from "../assets/img/instructions-3.png";
// import instructions5 from "../assets/img/instructions-4.png";
// import instructions6 from "../assets/img/instructions-5.png";
// import instructions7 from "../assets/img/instructions-6.png";
// import instructions8 from "../assets/img/instructions-7.png";

const Topup = () => {
  return (
    <div>
        <HeaderDashboard />
        <div className='d-flex'>
            <Navbar />
            <HambergerMenu />

            <article className="col-12 col-md-8 ">
            <aside>
                <div className="right-slide p-5">
                    <div className="mt-2">
                        <h3 className="how-to-topup">How To Top Up
                        </h3>
                    </div>

                    <div className="d-flex flex-column gap-5 mt-3">
                            {/* <img src={instructions1} alt='instructions' />
                            <img src={instructions2} alt='instructions' />
                            <img src={instructions3} alt='instructions' />
                            <img src={instructions4} alt='instructions' />
                            <img src={instructions5} alt='instructions' />
                            <img src={instructions6} alt='instructions' />
                            <img src={instructions7} alt='instructions' />
                            <img src={instructions8} alt='instructions' /> */}
                            <div className="instructions p-4 d-flex flex-row">
                                <span className='angka me-3'>1</span>
                                <span className='inst-value'>Go to the nearest ATM or you can use E-Banking.</span>
                            </div>
                            <div className="instructions p-4 d-flex flex-row">
                                <span className='angka me-3'>2</span>
                                <span className='inst-value'>Type your security number on the ATM or E-Banking.</span>
                            </div>
                            <div className="instructions p-4 d-flex flex-row">
                                <span className='angka me-3'>3</span>
                                <span className='inst-value'>Select “Transfer” in the menu</span>
                            </div>
                            <div className="instructions p-4 d-flex flex-row">
                                <span className='angka me-3'>4</span>
                                <span className='inst-value'>Type the virtual account number that we provide you at the top.</span>
                            </div>
                            <div className="instructions p-4 d-flex flex-row">
                                <span className='angka me-3'>5</span>
                                <span className='inst-value'>Type the amount of the money you want to top up.</span>
                            </div>
                            <div className="instructions p-4 d-flex flex-row">
                                <span className='angka me-3'>6</span>
                                <span className='inst-value'>Read the summary details</span>
                            </div>
                            <div className="instructions p-4 d-flex flex-row">
                                <span className='angka me-3'>7</span>
                                <span className='inst-value'>Press transfer / top up</span>
                            </div>
                            <div className="instructions p-4 d-flex flex-row">
                                <span className='angka me-3'>8</span>
                                <span className='inst-value'>You can see your money in Zwallet within 3 hours.</span>
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

export default Topup