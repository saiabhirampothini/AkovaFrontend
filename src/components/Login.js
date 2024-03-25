// import React, { Fragment } from "react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const login = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    if (email && password) {
      let res;
      try {
        res = await axios.post("https://akova-backend.vercel.app/api/auth", user);
        // console.log(res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("profession", res.data.profession);
        if (localStorage.getItem("profession") === "Student") {
          navigate("/student-dashboard");
        } else if (localStorage.getItem("profession") === "Enterprenuer") {
          navigate("/enterprenuer-dashboard");
        } else if (localStorage.getItem("profession") === "Investor") {
          navigate("/investor-dashboard");
        }
      } catch (err) {
        for (let i = 0; i < err.response.data.errors.length; i++) {
          window.alert(err.response.data.errors[i].msg);
        }
      }
    }
  };
  return (
    <>
      {/* {console.log(user)} */}
      <section className="vh-100" style={{ backgroundColor: "#ffffff" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card shadow-2-strong"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">Sign in</h3>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="typeEmailX-2"
                      className="form-control form-control-lg"
                      placeholder="Email"
                      name="email"
                      value={user.email}
                      onChange={handleChange}
                    />
                    {/* <label className="form-label" htmlFor="typeEmailX-2">
                      Email
                    </label> */}
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="typePasswordX-2"
                      className="form-control form-control-lg"
                      name="password"
                      placeholder="Password"
                      value={user.password}
                      onChange={handleChange}
                    />
                    {/* <label className="form-label" htmlFor="typePasswordX-2">
                      Password
                    </label> */}
                  </div>
                  {/* Checkbox */}

                  <button
                    className="btn btn-primary btn-lg btn-block"
                    type="submit"
                    onClick={(e) => {
                      login(e);
                    }}
                  >
                    Login
                  </button>
                  <hr className="my-4" />
                  {/* <button
                    className="btn btn-lg btn-block btn-primary"
                    style={{ backgroundColor: "#dd4b39" }}
                    type="submit"
                  >
                    <i className="fab fa-google me-2" /> Sign in with google
                  </button> */}
                  <Link to="/register">
                    <button
                      className="btn btn-lg btn-block btn-primary mb-2"
                      style={{ backgroundColor: "#3b5998" }}
                      type="submit"
                    >
                      <i className="fab fa-facebook-f me-2" />
                      Register
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
