import React from "react";
import "../assets/css/Style.css";
import HeaderDashboard from "../components/HeaderDashboard";
import FooterDashboard from "../components/FooterDashboard";
import Navbar from "../components/Navbar";
import { Link, useLocation } from "react-router-dom";
import HambergerMenu from "../components/HambergerMenu";
import transfer from "../assets/img/arrow-up.png";
import topup from "../assets/img/plus.png";
import grafik from "../assets/img/graphic.png";
import arrowdown from "../assets/img/icons8-down-24.png";
import arrowup from "../assets/img/icons8-up-arrow-24.png";
import jekeen from "../assets/img/jessica-keen.png";
import samsuhi from "../assets/img/sam-suhi.jpg";
import adobe from "../assets/img/adobe.png";
import netflix from "../assets/img/netflix.png";

function Data(props) {
  return <span className='search-receiver'> {props.name}</span>
}

function Contacts(props) {
  return <span className='desc-tf'>{props.desc}</span>
}

const Home = () => {
  const location = useLocation();
  
  return (
    <div>
      {location.state?.id && <h4>{location.state.id}</h4>}
      <HeaderDashboard />
      <div className="d-flex resp-home">
        <Navbar />
        <HambergerMenu />

        <article className="col-8 col-md-8 container-md">
          <div className="d-md-flex justify-content-between flex-md-row mb-4 p-4 left-slide-home col-md-12">
            <div className="d-flex flex-column">
              <h3 className="balance-home">Balance</h3>
              <h1 className="seratus20-home">Rp. 120.000</h1>
              <h3 className="number-phone-home">+62 813-9387-7946</h3>
            </div>
            <div className="d-flex flex-column">
              <div className="mb-3 home-transfer px-3 py-2">
                <Link to="/Transfer1">
                  <img
                    src={transfer}
                    style={{ width: "20%" }}
                    alt="transfer"
                    className="home-tf"
                  />
                  Transfer
                </Link>
              </div>
              <div className="home-topup px-3 py-2">
                <Link to="/Topup">
                  <img
                    src={topup}
                    style={{ width: "20%" }}
                    alt="top up"
                    className="home-topup"
                  />{" "}
                  Top Up
                </Link>
              </div>
            </div>
          </div>

          <aside className="d-md-flex flex-md-row justify-content-between">
            <div className="left-slide d-flex flex-column  col-12 col-md-6 p-5">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column">
                  <img src={arrowdown} alt="Income" style={{ width: "30%" }} />
                  <span className="income">Income</span>
                  <span className="expense">Rp 2.120.000</span>
                </div>
                <div className="d-flex flex-column">
                  <img src={arrowup} alt="Expense" style={{ width: "30%" }} />
                  <span className="income">Expense</span>
                  <span className="expense">Rp 1.560.000</span>
                </div>
              </div>
              <div>
                <img src={grafik} alt="graphic" className="img-fluid" />
              </div>
            </div>

            <div className="right-slide col-12 col-md-5">
              <div className="d-flex justify-content-between px-4 mt-3">
                <h3 className="trans-history">Transaction History</h3>
                <Link to="/History" className="see-all">
                  See all
                </Link>
              </div>

              <div className="d-flex flex-column gap-4 p-4">
                <div className='d-flex flex-row'>
                    <img src={samsuhi} alt="Samuel Suhi"/>
                   <div className="d-flex flex-fill justify-content-between">
                    <div className='d-flex flex-column ms-3'>
                        <Data name="Samuel Suhi"/>
                        <Contacts desc="Transfer"/>
                      </div>
                      <span className="home-rp">+Rp 50.000</span>
                   </div>
                </div>
                <div className='d-flex flex-row'>
                    <img src={netflix} alt="Netflix" className="bg-white"/>
                  <div className="d-flex flex-fill justify-content-between">
                    <div className='d-flex flex-column ms-3'>
                      <Data name="Netflix"/>
                      <Contacts desc="Subscription"/>
                    </div>
                    <span className="home-rp2">-Rp149.000</span>
                  </div>
                </div>
                <div className='d-flex flex-row'>
                      <img src={jekeen} alt="Christine Mar"/>
                  <div className="d-flex flex-fill justify-content-between">
                      <div className='d-flex flex-column ms-3'>
                        <Data name="Christine Mar..."/>
                        <Contacts desc="Transfer"/>
                      </div>
                      <span className="home-rp">+Rp 150.000</span>
                  </div>
                </div>
                <div className='d-flex flex-row'>
                      <img src={adobe} alt="Adobe Inc." className="bg-white2"/>
                  <div className="d-flex flex-fill justify-content-between">
                      <div className='d-flex flex-column ms-3'>
                        <Data name="Adobe Inc."/>
                        <Contacts desc="Subscription"/>
                      </div>
                      <span className="home-rp2">-Rp249.000</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </article>
      </div>
      <FooterDashboard />
    </div>
  );
};

export default Home;
