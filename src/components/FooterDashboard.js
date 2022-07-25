import React from 'react';
import '../assets/css/Style.css';

function FooterDashboard() {
  return (
    <div>
        <footer className="d-flex justify-content-between pb-1 pt-2 mt-5">
            <div className="ms-5 all-reserved">
                <h3>2020 Zwallet. All right reserved.</h3>
            </div>

            <div className="d-flex me-5 contact-us">
                <h3 className="me-3">+62 5637 8882 9901</h3>
                <h3>contact@zwallet.com</h3>
            </div>
        </footer>
    </div>
  )
}

export default FooterDashboard