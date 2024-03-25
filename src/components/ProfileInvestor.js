import Nav4 from "./Navbar4";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Footer";
function ProfileInvestor() {
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState("");
  const [state, setState] = useState(false);
  const changePassword = async (e) => {
    setState(true);
  };
  const handleChange = async (e) => {
    setPassword(e.target.value);
  };
  const sumbitPassword = async (e) => {
    try {
      const headers = {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      };
      const newPassowrd = { password };
      let res = await axios.put(
        "http://localhost:5000/api/users/change",
        newPassowrd,
        {
          headers: headers,
        }
      );
      if (res) {
        window.alert(res.data.msg);
        localStorage.removeItem("token");
        window.location.reload();
      }
    } catch (err) {
      window.alert(err.data.msg);
    }
  };
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const headers = {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        };
        let res = await axios.get("http://localhost:5000/api/auth/profile", {
          headers: headers,
        });
        if (res) {
          setUser(res);
        }
      } catch (err) {
        window.alert(err.data.msg);
      }
    };
    fetchUser();
  }, []);
  let info = null;

  if (user != null) {
    // console.log(user);
    let userArr = [{ ...user.data }];
    info = userArr.map((userX) => {
      return (
        <div className="container proj-tab p-3 col-sm-4 mt-5" key={userX._id}>
          <h1 className="text-center">Profile</h1>

          <div className="p-3">
            <p className="text-secondary h5">
              <strong>Name</strong>
            </p>
            <p className="h5 pl-4">
              <strong>{userX.name}</strong>
            </p>
          </div>

          <div className="p-3">
            <p className="text-secondary h5">
              <strong>Email</strong>
            </p>
            <p className="h5 pl-4">
              <strong>{userX.email}</strong>
            </p>
          </div>
          <div className="p-3">
            <p className="text-secondary h5">
              <strong>Your Profession</strong>
            </p>
            <p className="h5 pl-4">
              <strong>{userX.profession}</strong>
            </p>
          </div>
          <div className="p-3">
            <p className="text-secondary h5">
              <strong>You are a member since</strong>
            </p>
            <p className="h5 ml-4">
              <strong>{new Date(userX.date).toDateString()}</strong>
            </p>
          </div>
          <div className="p-3">
            <p className="text-secondary h5">
              <strong>Change Your Password</strong>
            </p>
            {state === true ? (
              <input
                className="form-control mr-sm-4 mt-4 form-inline"
                placeholder="Enter new password"
                type="password"
                value={password}
                onChange={(e) => handleChange(e)}
              />
            ) : null}
            {state === true ? (
              <button
                className="btn btn-primary mt-1"
                onClick={(e) => {
                  sumbitPassword(e);
                }}
              >
                Submit
              </button>
            ) : null}
            {state === false ? (
              <button
                className="btn btn-primary mt-1"
                onClick={(e) => changePassword(e)}
              >
                Change Password
              </button>
            ) : null}
          </div>
        </div>
      );
    });
  }
  return (
    <div>
      <Nav4 />
      <div className="row mt-5 mb-5">{info}</div>
      <Footer />
    </div>
  );
}
export default ProfileInvestor;
