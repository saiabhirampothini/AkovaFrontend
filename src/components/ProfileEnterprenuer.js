import Nav3 from "./Navbar3";
import { useEffect, useState } from "react";
import axios from "axios";
function ProfileEnterprenuer() {
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
    if(password.length>=8){
    try {
      const headers = {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      };
      const newPassowrd = { password };
      let res = await axios.put(
        "https://akova-backend.vercel.app/api/users/change",
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
    }
    else{
      window.alert("Password should be minimum of 8 characters");
      window.location.reload();
    }
  };
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const headers = {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        };
        let res = await axios.get("https://akova-backend.vercel.app/api/auth/profile", {
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
    console.log(user);
    let userArr = [{ ...user.data }];
    info = userArr.map((userX) => {
      return (
        <div className="container proj-tab p-3 col-sm-4 mt-5" key={userX._id}>
          <h1 className="text-center">Profile</h1>

          <div className="p-3">
            <p className="text-secondary h5">
              <strong>Name</strong>
            </p>
            <p className="h5 ml-4">
              <strong>{userX.name}</strong>
            </p>
          </div>

          <div className="p-3">
            <p className="text-secondary h5">
              <strong>Email</strong>
            </p>
            <p className="h5 ml-4">
              <strong>{userX.email}</strong>
            </p>
          </div>
          <div className="p-3">
            <p className="text-secondary h5">
              <strong>Your Profession</strong>
            </p>
            <p className="h5 ml-4">
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
      <Nav3 />
      <div className="row mt-5">{info}</div>
    </div>
  );
}
export default ProfileEnterprenuer;
