import React, { Fragment } from "react";
import Nav4 from "./Navbar4";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function InvestorView() {
  let id = useParams();
  id = id.id;
  // console.log(id);
  const [problems, setProblems] = useState(null);
  const [status, setStatus] = useState(null);
  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const headers = {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        };
        let problemsList = await axios.get(
          `http://localhost:5000/api/invest/${id}`,
          {
            headers: headers,
          }
        );
        // console.log(problemsList);
        setProblems(problemsList.data);
      } catch (err) {
        window.alert(err.response.data.msg);
        // console.log(err);
      }
    };
    const fetchStatus = async () => {
      try {
        const headers = {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        };
        let invest = await axios.get(
          `http://localhost:5000/api/invest/status/${id}`,
          {
            headers: headers,
          }
        );
        // console.log(problemsList);
        setStatus(invest);
      } catch (err) {
        // window.alert(err.response.data.msg);
        console.log(err);
      }
    };
    fetchProblems();
    fetchStatus();
  }, []);
  const submitInterest = async (e) => {
    try {
      const headers = {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      };
      const data = { interest: true };
      let res = await axios.put(
        `http://localhost:5000/api/invest/${id}`,
        data,
        {
          headers: headers,
        }
      );
      if (res) {
        window.alert("Your interest submitted");
        window.location.reload();
      }
      // console.log(problemsList);
    } catch (err) {
      window.alert(err.response.data.msg);
      // console.log(err);
    }
  };
  // console.log(problems);
  // console.log(status);
  const probs = [problems];
  let info = null;
  if (problems != null) {
    info = probs.map((problem) => {
      let uses = problem.uses.split(",");
      return (
        <div key={problem._id}>
          <h1 className="h1">{problem.title}</h1>
          <p>
            Contributer:<strong>{problem.enterprenuer.name}</strong>
          </p>
          {/* <!-- <p className="motive">Motive:</p> -->
      <!-- <h4>To detect the cancer cells accurately for efficient treatment of patients</h4> --> */}
          <p className="tech">Technologies Used:</p>
          <p>
            <strong>
              {problem.technologies},{problem.languages}
            </strong>
          </p>
          <h5 className="mt-5">Description:</h5>
          <p className="des">{problem.description}</p>
          <h5>Going to be revolutionary in:</h5>
          <ol>
            <li>{uses[0]}</li>
            <li>{uses[1]}</li>
            <li>{uses[2]}</li>
          </ol>
          <h5>Architecture / Flow diagram of project</h5>
          <img
            src={problem.image}
            alt="drone-img"
            className="img-fluid"
            width="800px"
            height="auto"
          />
          <p
            style={{
              color: "grey",
              marginTop: "32px",
              fontSize: "18px",
              marginBottom: "8px",
            }}
          >
            Quotation
          </p>
          <h6 className="h5">{problem.quotation}</h6>
          <p
            style={{
              color: "grey",
              marginTop: "32px",
              fontSize: "18px",
              marginBottom: "8px",
            }}
          >
            Amount of investment coded in rupees
          </p>
          <h6 className="h5">{problem.investment}</h6>
          {/* <!-- <p style="color:grey;margin-top:32px;font-size:18px;margin-bottom:8px;" >Click to Action</p> --> */}
          <div className="d-flex justify-content-between align-items-center mb-5 mt-5">
            <div className="up-car p-4">
              {status === null ? (
                <h6 className="h5 text-center mb-3">
                  Showing interst to invest!
                </h6>
              ) : null}

              {status === null ? (
                <div className="d-flex justify-content-center">
                  <button
                    className="btn btn-success"
                    onClick={(e) => {
                      submitInterest(e);
                    }}
                  >
                    Notify interst
                  </button>
                </div>
              ) : null}
              {status !== null ? (
                <div>
                  <p className="text-success h4">
                    You showed interst to invest in this project
                  </p>
                  <p>
                    <span className="text-secondary">
                      Email of Enterprenuer
                    </span>
                    :
                    <span className="text-primary h5">
                      {problem.enterprenuer.email}
                    </span>
                  </p>
                </div>
              ) : null}
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
        <div className="container mainview">{info != null ? info : ""}</div>
        <Footer />
      </Fragment>
    </div>
  );
}

export default InvestorView;
