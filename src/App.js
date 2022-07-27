import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CreatePin1 from './pages/CreatePin1';
import CreatePin2 from './pages/CreatePin2';
import ResetPassword from './pages/ResetPassword';
import ResetPassword2 from './pages/ResetPassword2';
import Home from './pages/Home';
import History from './pages/History';
import Transfer1 from './pages/Transfer1';
import Transfer2 from './pages/Transfer2';
import Confirmation from './pages/Confirmation';
import PinConfirm from './pages/PinConfirm';
import StatusSuccess from './pages/StatusSuccess';
import StatusFailed from './pages/StatusFailed';
import Topup from './pages/Topup';
import ProfileNotif from './pages/ProfileNotif';
import Profile1 from './pages/Profile1';
import Profile2 from './pages/Profile2';
import PersonalInfo from './pages/PersonalInfo';
import ChangePassword from './pages/ChangePassword';
import ChangePin from './pages/ChangePin';
import ChangePin2 from './pages/ChangePin2';
import AddNumber from './pages/AddNumber';
import ManageNumber from './pages/ManageNumber';
import Test from './pages/Test';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/CreatePin1" element={<CreatePin1 />}></Route>
        <Route path="/CreatePin2" element={<CreatePin2 />}></Route>
        <Route path="/ResetPassword" element={<ResetPassword />}></Route>
        <Route path="/ResetPassword2" element={<ResetPassword2 />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/History" element={<History />}></Route>
        <Route path="/Transfer1" element={<Transfer1 />}></Route>
        <Route path="/Transfer2" element={<Transfer2 />}></Route>
        <Route path="/Confirmation" element={<Confirmation />}></Route>
        <Route path="/PinConfirm" element={<PinConfirm />}></Route>
        <Route path="/StatusSuccess" element={<StatusSuccess />}></Route>
        <Route path="/StatusFailed" element={<StatusFailed />}></Route>
        <Route path="/Topup" element={<Topup />}></Route>
        <Route path="/ProfileNotif" element={<ProfileNotif />}></Route>
        <Route path="/Profile1" element={<Profile1 />}></Route>
        <Route path="/Profile2" element={<Profile2 />}></Route>
        <Route path="/PersonalInfo" element={<PersonalInfo />}></Route>
        <Route path="/ChangePassword" element={<ChangePassword />}></Route>
        <Route path="/ChangePin" element={<ChangePin />}></Route>
        <Route path="/ChangePin2" element={<ChangePin2 />}></Route>
        <Route path="/AddNumber" element={<AddNumber />}></Route>
        <Route path="/ManageNumber" element={<ManageNumber />}></Route>
        <Route path="/Test" element={<Test />}></Route>
      </Routes>
    </Router>
  )
}

export default App
