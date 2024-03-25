import { Navigate } from "react-router-dom";
const Unprotected = ({ children }) => {
  // console.log(isLoggedIn);
  if (localStorage.token && localStorage.getItem("profession") === "Student") {
    return <Navigate to="/student-dashboard" replace />;
  } else if (
    localStorage.token &&
    localStorage.getItem("profession") === "Enterprenuer"
  ) {
    return <Navigate to="/enterprenuer-dashboard" replace />;
  } else if (
    localStorage.token &&
    localStorage.getItem("profession") === "Investor"
  ) {
    return <Navigate to="/investor-dashboard" replace />;
  }
  return children;
};
export default Unprotected;
