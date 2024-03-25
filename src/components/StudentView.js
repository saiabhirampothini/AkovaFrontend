import React, { Fragment } from "react";
import Nav2 from "./Navbar2";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
function StudentView() {
  let id = useParams();
  id = id.id;
  // console.log(id);
  const [problems, setProblems] = useState(null);
  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const headers = {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        };
        let problemsList = await axios.get(
          `http://localhost:5000/api/getposts/post/${id}`,
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
  const probs = [problems];
  let info = null;
  if (problems != null) {
    info = probs.map((problem) => {
      let uses = problem.uses.split(",");
      return (
        <div key={problem._id}>
          <h1 className="h1">{problem.title}</h1>
          <p>
            Contributer:<strong>{problem.contributer}</strong>
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
          <h5>Output:</h5>
          <p className="des">The output of the above project is</p>
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
            Problem Statement
          </p>
          <h6 className="h5">{problem.problemStatement}</h6>
          <h6 className="h6 text-secondary">
            Any one who can solve this will get awarded
          </h6>
          {/* <!-- <p style="color:grey;margin-top:32px;font-size:18px;margin-bottom:8px;" >Click to Action</p> --> */}
          <div className="d-flex justify-content-between align-items-center mb-5 mt-5">
            <div>
              <div className="flex justify-content-around">
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
            </div>

            {new Date() < new Date(problem.dueDate) ? (
              <div className="up-car p-4">
                <h6 className="h5 text-center">Got the solution!</h6>
                <p style={{ fontSize: "20px" }}>
                  You can upload your idea here
                </p>
                <div className="d-flex justify-content-center">
                  <Link to={`/student-submit-idea/${id}`}>
                    <button className="btn btn-success">Upload Idea</button>
                  </Link>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      );
    });
  }
  return (
    <Fragment>
      <Nav2 />
      <div className="container mainview">{info != null ? info : ""}</div>
      <Footer />
    </Fragment>
  );
}
export default StudentView;
