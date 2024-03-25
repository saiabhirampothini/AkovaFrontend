import { useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import React, { Fragment, useState } from "react";
import Footer from "./Footer";
import Nav4 from "./Navbar4";
function InterestedInvestments() {
  const navigate = useNavigate();
  const [interests, setInterests] = useState(null);
  useEffect(() => {
    const fetchInterests = async () => {
      try {
        const headers = {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        };

        let int = await axios.get("http://localhost:5000/api/invest/i", {
          headers: headers,
        });
        if (int.data.length === 0) {
          window.alert("You did not show interest in any project to invest");
          navigate("/investor-dashboard");
        }
        setInterests(int);
      } catch (err) {
        window.alert(err.response.data.msg);
      }
    };
    fetchInterests();
  }, []);
  // console.log(interests);
  let info = null;
  if (interests != null) {
    // console.log(ideas);

    const intrestList = interests.data;
    info = intrestList.map((intrest) => {
      // console.log(intrest);
      return (
        <div className="col-sm-4 mt-5" key={intrest._id}>
          <div className="idea-tab px-3 py-2">
            <h3 className="text-center mb-3">{intrest.project.title}</h3>

            <p>
              <strong>Quotation</strong>:{intrest.project.quotation}
            </p>
            <p>
              <strong>Coded Investment Amount</strong>:
              {intrest.project.investment}
            </p>
            <p>
              <strong>Submission Date</strong>:
              {new Date(intrest.date).toDateString()}
            </p>

            <div className="d-flex justify-content-center mb-3">
              <Link to={`/investor-view/${intrest.project._id}`}>
                <button className="btn btn-primary">View Details</button>
              </Link>
            </div>
          </div>
        </div>
      );
    });
  }
  return (
    <div>
      <Fragment>
        <Nav4 />
        <div className="container main-idea">
          <h2>My Investment Interests</h2>
          <div className="row">{info}</div>
        </div>
        <Footer />
      </Fragment>
    </div>
  );
}
export default InterestedInvestments;
