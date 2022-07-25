import React from "react";
import "../assets/css/Style.css";
import HeaderDashboard from "../components/HeaderDashboard";
import FooterDashboard from "../components/FooterDashboard";
import Navbar from "../components/Navbar";
import HambergerMenu from "../components/HambergerMenu";
import transfer from "../assets/img/arrow-up.png";
import topup from "../assets/img/plus.png";
import grafik from "../assets/img/graphic.png";
import dashboard from "../assets/img/history-dashboard.png";
import dashboard1 from "../assets/img/history-dashboard-1.png";
import dashboard2 from "../assets/img/history-dashboard-2.png";
import dashboard3 from "../assets/img/history-dashboard-3.png";

const Home = () => {
  return (
    <div>
      <HeaderDashboard />
      <div className="d-flex">
        <Navbar />
        <HambergerMenu />

        <article class="col-8 col-md-8 container-md">
          <div class="d-md-flex justify-content-between flex-md-row mb-4 p-4 left-slide-head col-md-12">
            <div class="d-flex flex-column">
              <h3 class="balance">Balance</h3>
              <h1 class="seratus20">Rp. 120.000</h1>
              <h3 class="number-phone">+62 813-9387-7946</h3>
            </div>
            <div class="d-flex flex-column">
              <div class="mb-3 home-transfer px-3 py-2">
                <a href="/ibootstrap/dashboard/transfer1.html">
                  <img
                    src={transfer}
                    style={{ width: "20%" }}
                    alt="transfer"
                    class="home-tf"
                  />{" "}
                  Transfer
                </a>
              </div>
              <div className="home-topup px-3 py-2">
                <a href="/ibootstrap/dashboard/topup.html">
                  <img
                    src={topup}
                    style={{ width: "20%" }}
                    alt="top up"
                    class="home-topup"
                  />{" "}
                  Top Up
                </a>
              </div>
            </div>
          </div>

          <aside class="d-md-flex flex-md-row justify-content-between">
            <div class="left-slide d-flex flex-column  col-12 col-md-6 p-5">
              <div class="d-flex justify-content-between">
                <div className="d-flex flex-column">
                  <img src="" alt="Income" />
                  <span className="income">Income</span>
                  <span className="expense">Rp 2.120.000</span>
                </div>
                <div className="d-flex flex-column">
                  <img src="" alt="Expense" />
                  <span className="income">Expense</span>
                  <span className="expense">Rp 1.560.000</span>
                </div>
              </div>
              <div>
                <img src={grafik} alt="graphic" class="img-fluid" />
              </div>
            </div>

            <div class="right-slide col-12 col-md-5">
              <div class="d-flex justify-content-between px-4 mt-3">
                <h3 class="trans-history">Transaction History</h3>
                <h3 class="see-all">See all</h3>
              </div>

              <div>
                <img
                  src={dashboard}
                  alt="History Dashboard"
                  class="img-fluid"
                />
                <img
                  src={dashboard2}
                  alt="History Dashboard"
                  class="img-fluid"
                />
                <img
                  src={dashboard1}
                  alt="History Dashboard"
                  class="img-fluid"
                />
                <img
                  src={dashboard3}
                  alt="History Dashboard"
                  class="img-fluid"
                />
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
