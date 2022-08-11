    import React from 'react';
    import Sidebar from '../components/Sidebar';
    import '../assets/css/Style.css';
    import { Button } from 'react-bootstrap';

    import success from "../assets/img/success.png";

    function CreatePin() {
    return (
    <div className='d-flex'>
        <Sidebar />
        <aside className="col-12 col-md-5 d-flex flex-column justify-content-center gap-2 px-5">
                    <div className="mb-5">
                        <img src={success} alt="Successfully"/>
                    </div>
                    <h3 className="start-acc mt-2 mb-5">Your PIN Was Successfully Created</h3>
                    <h6 className="transfering">Your PIN was successfully created and you can now access <br/> all the features
                        in Zwallet. Login to your new account and <br/> start exploring!</h6>

                    <div className="d-grid mt-5 login-now">
                        <Button type="button" variant="success">Login Now</Button>
                    </div>
        </aside>
    </div>
    )
    }

    export default CreatePin