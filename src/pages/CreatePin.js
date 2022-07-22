import React from 'react'

function CreatePin() {
  return (
   <>
    <aside class="col-12 col-md-5 d-flex flex-column justify-content-center gap-2 px-5">
            <h3 class="Secure">Secure Your Account, Your Wallet, <br/> and Your Data With 6 Digits PIN <br/> That You
                Created Yourself.</h3>
            <h6 class="Create-digits">Create 6 digits pin to secure all your money and your data in <br/> Zwallet
                app.Keep it secret and don’t tell anyone about your <br/> Zwallet account password and the PIN.</h6>
            <div class="auth-form-wrapper py-5">
                <div class="d-flex gap-4 flex-row pin-input-wrapper">
                    <div class="d-flex align-items-center form-create-pin">
                        <input maxlength="1" min="0" max="9" type="number"/>
                    </div>
                    <div class="d-flex align-items-center form-create-pin">
                        <input maxlength="1" min="0" max="9" type="number"/>
                    </div>
                    <div class="d-flex align-items-center form-create-pin">
                        <input maxlength="1" min="0" max="9" type="number"/>
                    </div>
                    <div class="d-flex align-items-center form-create-pin">
                        <input maxlength="1" min="0" max="9" type="number"/>
                    </div>
                    <div class="d-flex align-items-center form-create-pin">
                        <input maxlength="1" min="0" max="9" type="number"/>
                    </div>
                    <div class="d-flex align-items-center form-create-pin">
                        <input maxlength="1" min="0" max="9" type="number"/>
                    </div>
                </div>
            </div>
            <div class="d-grid">
                <button type="button" class="btn btn-primary">Confirm</button>
            </div>
        </aside>
   </>
  )
}

export default CreatePin