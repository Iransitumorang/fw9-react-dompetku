import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const auth = localStorage.getItem("auth");

  return auth ? (
    children
  ) : (
    <Navigate
      to="/login"
      replace={true}
      state={{ errorMsg: "You must login to access this page" }}
    />
  );
};

export default PrivateRoute;
