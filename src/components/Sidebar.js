import React from 'react';
import '../assets/css/Style.css';
import dompetku2 from "../assets/img/dompetku2.png";
import transaction from "../assets/img/a-transaction.png";

function Sidebar() {
  return (
    <>
    {/* <div class="row min-vh-100"> */}
    <article class="col-12 col-md-7 right-slide-login mb-3 row min-vh-100">
        <div>
            <img src={dompetku2} alt="logo brand" class="w-25 mt-3 ms-5 img-fluid"/>
        </div>
        <div class="d-flex flex-column align-items-center">
            <div>
                <img src={transaction} alt="transaction" class="img-fluid"/>
            </div>
            <div>
                <h3 class="covering">App that Covering Banking Needs.</h3>
                <h5 class="dompetku">Dompetku is an application that focussing in banking needs for all users
                    <br/> in the world. Always updated and always following world trends.<br/> 5000+ users
                    registered in Zwallet everyday with worldwide <br/> users coverage.</h5>
            </div>
        </div>
    </article>
    </>
  )
}

export default Sidebar