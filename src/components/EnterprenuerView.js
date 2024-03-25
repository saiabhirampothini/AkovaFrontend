import React, { Fragment } from "react";
// import { Link } from "react-router-dom";
import Nav3 from "./Navbar3";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
function EnterprenuerView() {
  let id = useParams();
  id = id.id;
  // console.log(id);
  const [problems, setProblems] = useState(null);
  const [newDueDate, setDate] = useState("");
  const [check, setCheck] = useState(false);
  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const headers = {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        };
        let problemsList = await axios.get(
          `https://akova-backend.vercel.app/api/getposts/post/${id}`,
          {
            headers: headers,
          }
        );
        // console.log(problemsList);
        setProblems(problemsList.data);
      } catch (err) {
        window.alert(err.msg);
        // console.log(err);
      }
    };
    fetchProblems();
  }, []);
  const handleDate = async (e) => {
    setDate(e.target.value);
  };
  const changeDueDate = async (e, problem) => {
    if (newDueDate.length === 0) {
      window.alert("Date required");
      window.location.reload();
    }

    const date = new Date(newDueDate);
    if (!isNaN(date.getTime())) {
      const newProblem = { ...problem };
      newProblem.dueDate = newDueDate;
      try {
        const headers = {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        };
        let res = await axios.put(
          `https://akova-backend.vercel.app/api/postproblem/updateDate`,
          newProblem,
          {
            headers: headers,
          }
        );
        if (res) {
          window.alert(res.data.msg);
          // console.log(res.data.msg);
          window.location.reload();
        }
      } catch (err) {
        // console.log(err);
        window.alert(err.response.data.msg);
      }
    }
  };
  const onEdit = async (e) => {
    setCheck(true);
  };
  const probs = [problems];
  let info = null;
  if (problems != null) {
    info = probs.map((problem) => {
      let uses = problem.uses.split(",");
      return (
        <div key={problem._id}>
          <h1 className="h1">{problem.title}</h1>
          <div className="d-flex justify-content-between">
            <div>
              <p>
                Contributer:<strong>{problem.contributer}</strong>
              </p>
              {/* <!-- <p className="motive-enter">motive-enter:</p> -->
          <!-- <h4>To detect the cancer cells accurately for efficient treatment of patients</h4> --> */}
              <p className="tech-enter">Technologies Used:</p>
              <p>
                <strong>
                  {problem.technologies},{problem.languages}
                </strong>
              </p>
            </div>
            <div>
              {check === false ? (
                <button
                  className="btn btn-info"
                  id="btn-edit"
                  style={{ display: "block" }}
                  onClick={(e) => {
                    onEdit(e);
                  }}
                >
                  Edit Due Date
                </button>
              ) : null}
              {check === true ? (
                <div>
                  <input
                    className="form-control mr-sm-4 mt-4 form-inline"
                    placeholder="New Due Date(YYYY/MM/DD)"
                    value={newDueDate}
                    onChange={(e) => handleDate(e)}
                    id="newDueDate"
                  />
                  <button
                    className="btn btn-success mt-1"
                    id="btn-sumbit"
                    onClick={(e) => changeDueDate(e, problem)}
                  >
                    Sumbit
                  </button>
                </div>
              ) : null}
            </div>
          </div>
          <p
            style={{
              color: "grey",
              marginTop: "32px",
              fontSize: "18px",
              marginBottom: "8px",
            }}
          >
            Problem Statement
          </p>
          <h6 className="h5">{problem.problemStatement}</h6>

          <h5 className="mt-5" style={{ color: "grey" }}>
            Description:
          </h5>
          <p className="des-enter-view" style={{ color: "black" }}>
            {problem.description}
          </p>
          <h5 style={{ color: "grey" }} className="mt-3">
            Going to be revolutionary in:
          </h5>
          <ol>
            <li style={{ color: "black", fontSize: "18px" }}>{uses[0]}</li>
            <li style={{ color: "black", fontSize: "18px" }}>{uses[1]}</li>
            <li style={{ color: "black", fontSize: "18px" }}>{uses[2]}</li>
          </ol>
          <h5 style={{ color: "grey" }}>Output:</h5>
          <p className="des-enter-view" style={{ color: "black" }}>
            The output of the above project is
          </p>
          <img
            src={problem.image}
            alt="drone-img"
            className="img-fluid"
            width="800px"
            height="auto"
          />

          {/* <!-- <p style="color:grey;margin-top:32px;font-size:18px;margin-bottom:8px;" >Click to Action</p> --> */}
          <p className="mt-5">
            Due Date Given:
            <span style={{ fontSize: "18px", fontWeight: "medium" }}>
              {new Date(problem.dueDate).toDateString()}
            </span>
          </p>
          <div>
            <a
              href={`https://${problem.githubrepository}`}
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn btn-primary mx-2">
                {" "}
                GitHub Repository of Problem
              </button>
            </a>

            {/* <button className="btn btn-outline-warning">See Demo</button> */}
          </div>
          {/* <h6 className="h6 text-secondary">
            Any one who can solve this will get awarded
          </h6> */}
        </div>
      );
    });
  }
  return (
    <Fragment>
      <Nav3 />
      <div className="container main-enterview">{info != null ? info : ""}</div>

      <Footer />
    </Fragment>
  );
}
export default EnterprenuerView;
