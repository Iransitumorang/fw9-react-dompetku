import React from 'react';
import Sidebar from '../components/Sidebar';
import '../assets/css/Style.css';
import { Button } from 'react-bootstrap';

function ResetPassword() {
  return (
    <div className='d-flex'>
        <Sidebar />
          <aside class="col-12 col-md-5 d-flex flex-column justify-content-center gap-2 px-5">
                <h3 class="forgot-pass">Did You Forgot Your Password? <br/> Don’t Worry, You Can Reset Your <br/> Password In a Minutes. </h3>
                <h6 class="reset-your-pass">To reset your password, you must type your e-mail and we <br/> will send a link to your email and you will be directed to the <br/> reset password screens.</h6>
            <div class="form-list mb-5">
                <div class="input-group flex-nowrap mt-5 mb-5">
                    <span class="input-group-text form-border2">
                        <i class="fa-regular fa-envelope"></i>
                    </span>
                    <input type="email" class="form-control form-border" value="pewdiepie1@gmail.com"/>
                </div>
            </div>
                <div class="d-grid rp-btn-confirm">
                    <Button type="button" variant="success">Confirm</Button>
                </div>
            </aside>
    </div>
  )
}

export default ResetPassword