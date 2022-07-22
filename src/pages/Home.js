import React from 'react'

function Home() {
  return (
    <>
         <article class="col-8 col-md-8 container-md">
      <div class="bg-primary d-md-flex justify-content-between flex-md-row mb-4 p-4 left-slide-head col-md-12">
        <div class="d-flex flex-column">
          <h3 class="balance">Balance</h3>

          <h1 class="seratus20">Rp. 120.000</h1>

          <h3 class="number-phone">+62 813-9387-7946</h3>
        </div>
        <div class="d-flex flex-column">
          <div class="mb-3 transfer">
            <a href="/ibootstrap/dashboard/transfer1.html">
              <img src="../assets/images/home/Group 35.png" alt="transfer" class="img-tf">
            </a>
          </div>
          <div>
            <a href="/ibootstrap/dashboard/topup.html">
              <img src="../assets/images/home/Group 34.png" alt="top up" style="height: 80%;" class="img-topup">
            </a>
          </div>
        </div>
      </div>

      <aside class="d-md-flex flex-md-row justify-content-between">
        <div class="left-slide d-flex flex-column  col-12 col-md-6 p-5">
          <div class="d-flex justify-content-between">
            <div>
              <img src="../assets/images/home/in2.png" class="img-fluid">
            </div>
            <div>
              <img src="../assets/images/home/out2.png" class="img-fluid">
            </div>
          </div>
          <div>
            <img src="../assets/images/home/graphic.png" alt="graphic" class="img-fluid">
          </div>
        </div>

        <div class="right-slide col-12 col-md-5">
          <div class="d-flex justify-content-between px-4 mt-3">
            <h3 class="trans-history">Transaction History</h3>
            <h3 class="see-all">See all</h3>
          </div>

          <div>
            <img src="../assets/images/home/history-dashboard.png" alt="History Dashboard" class="img-fluid">
            <img src="../assets/images/home/history-dashboard-2.png" alt="History Dashboard" class="img-fluid">
            <img src="../assets/images/home/history-dashboard-1.png" alt="History Dashboard" class="img-fluid">
            <img src="../assets/images/home/history-dashboard-3.png" alt="History Dashboard" class="img-fluid">
          </div>
        </div>
      </aside>
    </article>
    </>
  )
}

export default Home