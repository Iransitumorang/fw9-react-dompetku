import React from 'react';
import logoutImg from "../assets/img/icons8-logout-32.png";
import { Link } from 'react-router-dom';
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
        <Link onClick={() => logout({ returnTo: window.location.origin })} className="nav-link logout-nav ps-3" to="/Login">
                <img src={logoutImg} style={{width: "15%"}} className="img-fluid me-3" alt='Logout' /> Logout
              </Link>
    </div>
    )
  )
}

export default LogoutButton