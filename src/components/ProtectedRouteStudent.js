import { Navigate } from "react-router-dom";
const ProtectedRouteStudent = ({ children }) => {
  // console.log(isLoggedIn);
  if (!localStorage.token) {
    return <Navigate to="/login" replace />;
  } else if (
    localStorage.token &&
    localStorage.getItem("profession") === "Student"
  )
    return children;
  else return <Navigate to="/login" replace />;
};
export default ProtectedRouteStudent;
