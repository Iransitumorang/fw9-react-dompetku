import React from 'react'

function sidebar() {
  return (
    <>
    {/* <div class="row min-vh-100"> */}
    <article class="col-12 col-md-7 right-slide mb-3 row min-vh-100">
        <div>
            <img src="../../assets/img/dompetku2.png" alt="logo brand" class="w-25 mt-3 ms-5 img-fluid"/>
        </div>
        <div class="d-flex flex-column align-items-center">
            <div>
                <img src="../assets/images/a-transaction.png" alt="transaction" class="img-fluid"/>
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

export default sidebar