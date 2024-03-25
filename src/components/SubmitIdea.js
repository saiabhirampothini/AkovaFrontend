import React, { Fragment, useState } from "react";
import Nav2 from "./Navbar2";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function SubmitIdea() {
  const navigate = useNavigate();
  let id = useParams();
  id = id.id;
  const [state, setState] = useState({
    overview: "",
    description: "",
    attachment: "",
  });

  //For fetching project title
  const [problem, setProblem] = useState(null);
  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const headers = {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        };
        let problemx = await axios.get(
          `https://akova-backend.vercel.app/api/getposts/post/${id}`,
          {
            headers: headers,
          }
        );
        setProblem(problemx);
      } catch (err) {
        window.alert(err.msg);
        // console.log(err);
      }
    };
    fetchProblems();
  }, []);
  let title;
  if (problem != null) {
    title = problem.data.title;
  }
  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const onClick = async (e) => {
    e.preventDefault();
    const { overview, description, attachment } = state;
    if (overview && description && attachment) {
      let res;
      try {
        const headers = {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        };
        res = await axios.post(`https://akova-backend.vercel.app/api/idea/${id}`, state, {
          headers: headers,
        });
        // console.log(res);
        if (res) {
          window.alert("Idea Submitted Successfully");
          navigate("/student-dashboard");
        }
      } catch (err) {
        for (let i = 0; i < err.response.data.errors.length; i++) {
          window.alert(err.response.data.errors[i].msg);
        }
      }
    } else {
      window.alert("Enter all the fields");
    }
  };
  return (
    <Fragment>
      <Nav2 />
      <div className="container main-submit">
        <h1 className="mb-5">{title}</h1>
        <h5 className="h3">Solution Overview</h5>
        <input
          className="form-control form-control-lg"
          type="text"
          placeholder="Type something.."
          name="overview"
          value={state.overview}
          onChange={(e) => {
            onChange(e);
          }}
        />
        <h3 className="mb-4 mt-5">Upload your idea</h3>

        <form>
          <div className="form-group">
            {/* <!-- <label for="exampleFormControlTextarea1">Enter your idea</label> --> */}
            <div className="text-right">
              {/* <!-- <button type="button" className="btn btn-success">
                <i className="bi bi-link-45deg" style="font-size: 30px;color: green;"></i>
              </button> --> */}
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                name="description"
                value={state.description}
                onChange={(e) => {
                  onChange(e);
                }}
                rows="10"
              ></textarea>
            </div>
          </div>
        </form>
        <h5 className="mb-4 mt-5 container">GitHub Link</h5>
        <form>
          <div className="form-group ">
            {/* <!-- <label for="exampleFormControlTextarea1">Enter your idea</label> --> */}
            <div className="text-right">
              {/* <!-- <button type="button" className="btn btn-success">
              <i className="bi bi-link-45deg" style="font-size: 30px;color: green;"></i>
            </button> --> */}
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                name="attachment"
                value={state.attachment}
                onChange={(e) => {
                  onChange(e);
                }}
                rows="1"
              ></textarea>
            </div>
          </div>
        </form>
        <div className="d-flex justify-content-between">
          {/* <div className="mt-4">
            <form>
              <div className="form-group">
                <label for="exampleFormControlFile1">Upload a file</label>
                <input
                  type="file"
                  className="form-control-file"
                  id="exampleFormControlFile1"
                />
              </div>
            </form>
          </div> */}
          <div className="mt-4">
            {problem != null && new Date() < new Date(problem.data.dueDate) ? (
              <button
                className="btn btn-success"
                onClick={(e) => {
                  onClick(e);
                }}
              >
                Submit Idea
              </button>
            ) : null}
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
}
export default SubmitIdea;
