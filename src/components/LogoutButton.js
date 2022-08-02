import React from 'react';
import logoutImg from "../assets/img/icons8-logout-32.png";
import { NavLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

function LogoutButton() {
    const { logout, isAuthenticated } = useAuth0();
//   const navigate = useNavigate();
//     const onLogout = () => {
//         localStorage.removeItem("auth");
//         navigate("/Login");
//       };

  return (
    isAuthenticated && (
    <div>
        <NavLink onClick={() => logout({ returnTo: window.location.origin })} activeClassname="active" className="nav-link      logout-nav ps-3" to="/Login">
            <img src={logoutImg} style={{width: "15%"}} className="img-fluid me-3" alt='Logout' /> Logout
        </NavLink>
    </div>
    )
  )
}

export default LogoutButton