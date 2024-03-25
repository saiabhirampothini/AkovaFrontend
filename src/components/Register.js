import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    profession: "",
    password: "",
    repassword: "",
  });
  const navigate = useNavigate();
  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const register = async (e) => {
    e.preventDefault();
    const { name, email, password, repassword, profession } = user;
    if (name && email && profession && password && password === repassword) {
      let res;
      try {
        res = await axios.post("https://akova-backend.vercel.app/api/users", user);
        console.log(res.data);
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
    } else {
      window.alert("Enter valid details");
    }
  };
  return (
    <>
      {/* {console.log(user)} */}
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: 25 }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>
                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              placeholder="Your Name"
                              name="name"
                              value={user.name}
                              onChange={(e) => {
                                onChange(e);
                              }}
                            />
                            {/* <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              Your Name
                            </label> */}
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                              placeholder="Your Email"
                              name="email"
                              value={user.email}
                              onChange={(e) => {
                                onChange(e);
                              }}
                            />
                            {/* <label
                              className="form-label"
                              htmlFor="form3Example3c"
                            >
                              Your Email
                            </label> */}
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            {/* <input
                              type="text"
                              id="form3Example3d"
                              className="form-control"
                              placeholder="Your Profession"
                              name="profession"
                              value={user.profession}
                              onChange={(e) => {
                                onChange(e);
                              }}
                            /> */}
                            <select
                              name="profession"
                              onChange={(e) => {
                                onChange(e);
                              }}
                              value={user.profession}
                              className="registration-input custom-select"
                            >
                                <option>Your Profession</option>
                              <option value="Student">Student</option>
                              <option value="Enterprenuer">Enterprenuer</option>
                              <option value="Investor">Investor</option>
                            </select>

                            {/* <label
                              className="form-label"
                              htmlFor="form3Example3c"
                            >
                              Your Email
                            </label> */}
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                              placeholder="Password"
                              name="password"
                              value={user.password}
                              onChange={(e) => {
                                onChange(e);
                              }}
                            />
                            {/* <label
                              className="form-label"
                              htmlFor="form3Example4c"
                            >
                              Password
                            </label> */}
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4d"
                              className="form-control"
                              placeholder="Reenter-Password"
                              name="repassword"
                              value={user.repassword}
                              onChange={(e) => {
                                onChange(e);
                              }}
                            />
                            {/* <label
                              className="form-label"
                              htmlFor="form3Example4c"
                            >
                              Password
                            </label> */}
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw" />
                          {/* <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4cd"
                              className="form-control"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example4cd"
                            >
                              Repeat your password
                            </label>
                          </div> */}
                        </div>
                        {/* <div className="form-check d-flex justify-content-center mb-5">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            defaultValue=""
                            id="form2Example3c"
                          />
                          {/* <label
                            className="form-check-label"
                            htmlFor="form2Example3"
                            
                          >
                            <p>I agree all statements in </p>
                            <a href="#!">Terms of service</a>
                          </label> 
                        </div> */}
                        {/* <div className="row mb-5">
                          <legend className="col-form-label col-sm-2 pt-0">
                            I'm:
                          </legend>
                          <div className="col-sm-10">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="gridRadios"
                                id="gridRadios1"
                                value="option1"
                                // checked
                              />
                              <label
                                className="form-check-label"
                                htmlFor="gridRadios1"
                              >
                                Student
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="gridRadios"
                                id="gridRadios2"
                                value="option2"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="gridRadios2"
                              >
                                Enterprenuer
                              </label>
                            </div>
                          </div>
                        </div> */}
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="button"
                            className="btn btn-primary btn-lg"
                            onClick={(e) => {
                              register(e);
                            }}
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample imageen"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Register;
