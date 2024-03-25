import "./App.css";
import "./main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Student from "./components/Student";
import Enterprenuer from "./components/Enterprenuer";
import ProtectedRouteStudent from "./components/ProtectedRouteStudent";
import ProtectedRouteEnterprenuer from "./components/ProtectedRouteEnterprenuer";
import ProtectedRouteInvestor from "./components/ProtectedRouteInvestor";
import Unprotected from "./components/Unprotected";
import PostProblem from "./components/PostProblem";
import StudentView from "./components/StudentView";
import EnterprenuerView from "./components/EnterprenuerView";
import SubmitIdea from "./components/SubmitIdea";
import Responses from "./components/Responses";
import StudentIdeas from "./components/StudentIdeas";
import ProfileStudent from "./components/ProfileStudent";
import ProfileEnterprenuer from "./components/ProfileEnterprenuer";
import ProfileInvestor from "./components/ProfileInvestor";
import RequestInvestment from "./components/RequestInvestment";
import InvestorDashboard from "./components/InvestorDashboard";
import InvestorView from "./components/InvestorView";
import InterestedInvestments from "./components/InterestedInvestments";
import InvestmentRequestStatus from "./components/InvestmentRequestStatus";
import Error from "./components/Error";
import EnterprenuerInvestView from "./components/EnterprenuerInvestView";
function App() {
  useEffect(() => {
    const token = localStorage.getItem("token");
    const verifyToken = async () => {
      if (token) {
        try {
          const headers = {
            "Content-Type": "application/json",
            "x-auth-token": localStorage.getItem("token"),
          };
          await axios.get("https://akova-backend.vercel.app/api/auth", {
            headers: headers,
          });
        } catch (err) {
          window.alert(err.response.data.msg);
          localStorage.removeItem("token");
          window.location.reload();
        }
      }
    };
    verifyToken();
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Unprotected>
                <Home />
              </Unprotected>
            }
          />
          <Route
            path="/login"
            element={
              <Unprotected>
                <Login />
              </Unprotected>
            }
          />
          <Route
            path="/register"
            element={
              <Unprotected>
                <Register />
              </Unprotected>
            }
          />
          <Route
            path="/student-dashboard"
            element={
              <ProtectedRouteStudent>
                <Student />
              </ProtectedRouteStudent>
            }
          />
          <Route
            path="/enterprenuer-dashboard"
            element={
              <ProtectedRouteEnterprenuer>
                <Enterprenuer />
              </ProtectedRouteEnterprenuer>
            }
          />
          <Route
            path="/post-problem"
            element={
              <ProtectedRouteEnterprenuer>
                <PostProblem />
              </ProtectedRouteEnterprenuer>
            }
          />
          <Route
            path="/student-view/:id"
            element={
              <ProtectedRouteStudent>
                <StudentView />
              </ProtectedRouteStudent>
            }
          />
          <Route
            path="/enterprenuer-view/:id"
            element={
              <ProtectedRouteEnterprenuer>
                <EnterprenuerView />
              </ProtectedRouteEnterprenuer>
            }
          />
          <Route
            path="/student-submit-idea/:id"
            element={
              <ProtectedRouteStudent>
                <SubmitIdea />
              </ProtectedRouteStudent>
            }
          />
          <Route
            path="/enterprenuer-responses/:id"
            element={
              <ProtectedRouteEnterprenuer>
                <Responses />
              </ProtectedRouteEnterprenuer>
            }
          />
          <Route
            path="/student-ideas"
            element={
              <ProtectedRouteStudent>
                <StudentIdeas />
              </ProtectedRouteStudent>
            }
          />
          <Route
            path="/student-profile"
            element={
              <ProtectedRouteStudent>
                <ProfileStudent />
              </ProtectedRouteStudent>
            }
          />
          <Route
            path="/enterprenuer-profile"
            element={
              <ProtectedRouteEnterprenuer>
                <ProfileEnterprenuer />
              </ProtectedRouteEnterprenuer>
            }
          />
          <Route
            path="/invest-project"
            element={
              <ProtectedRouteEnterprenuer>
                <RequestInvestment />
              </ProtectedRouteEnterprenuer>
            }
          />
          <Route
            path="/investor-dashboard"
            element={
              <ProtectedRouteInvestor>
                <InvestorDashboard />
              </ProtectedRouteInvestor>
            }
          />
          <Route
            path="/investor-profile"
            element={
              <ProtectedRouteInvestor>
                <ProfileInvestor />
              </ProtectedRouteInvestor>
            }
          />
          <Route
            path="/investor-view/:id"
            element={
              <ProtectedRouteInvestor>
                <InvestorView />
              </ProtectedRouteInvestor>
            }
          />
          <Route
            path="/interested-investment"
            element={
              <ProtectedRouteInvestor>
                <InterestedInvestments />
              </ProtectedRouteInvestor>
            }
          />
          <Route
            path="/investment-status"
            element={
              <ProtectedRouteEnterprenuer>
                <InvestmentRequestStatus />
              </ProtectedRouteEnterprenuer>
            }
          />
          <Route
            path="//enterprenuer-invest-view/:id"
            element={
              <ProtectedRouteEnterprenuer>
                <EnterprenuerInvestView />
              </ProtectedRouteEnterprenuer>
            }
          />
          <Route path="/*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
