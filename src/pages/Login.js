import React from 'react'

function Login() {
  return (
    <>
         <aside class="col-12 col-md-5 d-flex flex-column justify-content-center gap-2 px-5">
                <h3 class="start-asc container-md-fluid">Start Accessing Banking Needs <br/> With All Devices and All Platforms
                    <br/> With
                    30.000+ Users</h3>
                <h6 class="transfering">Transfering money is eassier than ever, you can access <br/> Zwallet wherever you
                    are. Desktop, laptop, mobile phone? <br/> we cover all of that for you!</h6>
                <div class="input-group flex-nowrap mt-5 mb-5">
                    <span class="input-group-text form-border2">
                        <i class="fa-regular fa-envelope"></i>
                    </span>
                    <input type="email" class="form-control form-border" value="pewdiepie1@gmail.com"/>
                </div>
                <div class="input-group flex-nowrap">
                    <span class="input-group-text form-border2">
                        <i class="fa-solid fa-lock"></i>
                    </span>
                    <input type="password" class="form-control form-border" placeholder="Enter your password"/>
                </div>
                <div class="text-end password">
                    <a href="fhfh">Forgot Password?</a>
                </div>
                <h3 class="invalid mt-3">Email or Password Invalid</h3>
                <div>
                    <a href="/ibootstrap/dashboard/home.html" class="d-grid">
                        <button type="button" class="btn btn-primary">Login</button>
                    </a>
                </div>
                <h3 class="signup">Don’t have an account? Let’s <a href="/ibootstrap/dashboard/signup.html">Sign Up</a></h3>
            </aside>
    </>
  )
}

export default Login