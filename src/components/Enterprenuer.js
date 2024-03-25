import Nav3 from "./Navbar3";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Footer";
function Enterprenuer() {
  const [problems, setProblems] = useState(null);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const headers = {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        };
        let problemsList = await axios.get(
          "https://akova-backend.vercel.app/api/getposts/me",
          {
            headers: headers,
          }
        );
        // console.log(problems);
        setProblems(problemsList.data);
      } catch (err) {
        // console.log(err);
        window.alert(err.response.data.msg);
      }
    };
    fetchProblems();
  }, []);
  const handleSearch = async (e) => {
    setSearch(e.target.value);
  };
  let cards = null;
  let cardsInactive = null;
  if (problems != null) {
    const filteredProblems = problems.filter((problem) => {
      return (
        problem.title.toLowerCase().includes(search.toLowerCase()) ||
        problem.domain.toLowerCase().includes(search.toLowerCase())
      );
    });
    cards = filteredProblems.map((problem) => {
      let state = null;
      let color = null;
      if (new Date() < new Date(problem.dueDate)) {
        state = "Running";
        color = "success";
      } else {
        state = "Stopped";
        color = "danger";
      }
      if (new Date() < new Date(problem.dueDate)) {
        return (
          <div className="row proj-tab-enter mt-5" key={problem._id}>
            <div className="col-sm-6">
              <div className="py-3 px-4">
                <h2 className="h2 text-center mt-2">{problem.title}</h2>
                <p className="mt-3 des-enter">
                  Description
                  <span
                    className={`badge badge-${color} mx-5`}
                    style={{ textAlign: "right" }}
                  >
                    {state}
                  </span>
                </p>
                <p className="prj-des-enter">{problem.description}</p>
                <p className="des-enter">Problem Statement</p>
                <p className="prb-sta-enter">{problem.problemStatement}</p>
                <p>
                  <span className="des-enter">Due-Date </span>
                  <span style={{ fontSize: "18px" }}>
                    {new Date(problem.dueDate).toDateString()}
                  </span>
                </p>
                <div className="d-flex justify-content-between my-4">
                  <Link to={`/enterprenuer-responses/${problem._id}`}>
                    <button className="btn btn-success">View Responses</button>
                  </Link>
                  <Link to={`/enterprenuer-view/${problem._id}`}>
                    <button className="btn btn-primary">View Project</button>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6"
              style={{
                textAlign: "right",
                paddingRight: "0",
                paddingLeft: "0",
              }}
            >
              <img
                src={problem.image}
                alt="Architecture or flow of project"
                className="img-responsive eimg"
              />
            </div>
          </div>
        );
      }
    });
    cardsInactive = filteredProblems.map((problem) => {
      let state = null;
      let color = null;
      if (new Date() < new Date(problem.dueDate)) {
        state = "Running";
        color = "success";
      } else {
        state = "Stopped";
        color = "danger";
      }
      if (new Date() > new Date(problem.dueDate)) {
        return (
          <div className="row proj-tab-enter mt-5" key={problem._id}>
            <div className="col-sm-6">
              <div className="py-3 px-4">
                <h2 className="h2 text-center mt-2">{problem.title}</h2>
                <p className="mt-3 des-enter">
                  Description
                  <span
                    className={`badge badge-${color} mx-5`}
                    style={{ textAlign: "right" }}
                  >
                    {state}
                  </span>
                </p>
                <p className="prj-des-enter">{problem.description}</p>
                <p className="des-enter">Problem Statement</p>
                <p className="prb-sta-enter">{problem.problemStatement}</p>
                <p>
                  <span className="des-enter">Due-Date </span>
                  <span style={{ fontSize: "18px" }}>
                    {new Date(problem.dueDate).toDateString()}
                  </span>
                </p>
                <div className="d-flex justify-content-between my-4">
                  <Link to={`/enterprenuer-responses/${problem._id}`}>
                    <button className="btn btn-success">View Responses</button>
                  </Link>
                  <Link to={`/enterprenuer-view/${problem._id}`}>
                    <button className="btn btn-primary">View Project</button>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6"
              style={{
                textAlign: "right",
                paddingRight: "0",
                paddingLeft: "0",
              }}
            >
              <img
                src={problem.image}
                alt="Architecture or flow of project"
                className="img-responsive eimg"
              />
            </div>
          </div>
        );
      }
    });
  }
  return (
    <div>
      <Nav3 />
      <div className="container-fluid main-enter px-5">
        <h1 className="text-center">My Projects</h1>
        <input
          className="form-control mr-sm-4 mt-4"
          type="search"
          placeholder="Search by Title,Contributer or Domain"
          aria-label="Search"
          value={search}
          onChange={(e) => {
            handleSearch(e);
          }}
        />
        <h2 className="mt-5">Active Problems</h2>
        <div className="d-flex flex-column">{cards != null ? cards : ""}</div>
        <h2 className="mt-2">Inactive Problems</h2>
        <div className="d-flex flex-column">
          {cardsInactive != null ? cardsInactive : ""}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Enterprenuer;
