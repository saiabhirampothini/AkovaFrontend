import Nav2 from "./Navbar2";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "./Footer";
function Student() {
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
          "https://akova-backend.vercel.app/api/getposts/all",
          {
            headers: headers,
          }
        );
        // console.log(problems);
        setProblems(problemsList.data);
      } catch (err) {
        // console.log();
        window.alert(err.response.data.msg);
      }
    };
    fetchProblems();
  }, []);
  const handleSearch = async (e) => {
    setSearch(e.target.value);
  };
  let cards = null;
  if (problems != null) {
    // console.log(problems);
    const filteredProblems = problems.filter((problem) => {
      return (
        problem.title.toLowerCase().includes(search.toLowerCase()) ||
        problem.contributer.toLowerCase().includes(search.toLowerCase()) ||
        problem.domain.toLowerCase().includes(search.toLowerCase())
      );
    });

    // console.log(filteredProblems);
    cards = filteredProblems.map((problem) => {
      // console.log(problem);
      let uses = problem.uses.split(",");
      let state = null;
      let color = null;
      if (new Date() < new Date(problem.dueDate)) {
        state = "Running";
        color = "success";
      } else {
        state = "Stopped";
        color = "danger";
      }
      // console.log(new Date());
      // let id = problem._id;
      // return <li key={problem.contributer}>{problem.title}</li>;
      if (new Date() < new Date(problem.dueDate)) {
        return (
          <div className="row proj-tab-stu mt-5" key={problem._id}>
            <div className="col-sm-6">
              <div className="px-4 py-4">
                <h2 className="h2 text-center">{problem.title}</h2>
                <p className="prj-des-stu">{problem.description.slice(0,200)}...</p>
                <h4 className="h4 text-secondary">Enhances the works</h4>
                <ol>
                  <li>{uses[0]}</li>
                  <li>{uses[1]}</li>
                  <li>{uses[2]}</li>
                </ol>
                <p className="prb-sta-stu">
                  <strong className="text-secondary">Problem Statement</strong>{" "}
                  :{problem.problemStatement}
                </p>

                <div>
                  <span className="text-secondary h6">
                    <strong>Contributer</strong>
                  </span>
                  :<strong className="ml-1">{problem.contributer}</strong>
                </div>

                <div className="mb-2 mt-2">
                  <p>
                    <span className="text-secondary">
                      <strong>Due Date</strong>
                    </span>
                    :
                    <strong className="ml-1">
                      {new Date(problem.dueDate).toDateString()}{" "}
                    </strong>
                    <span> </span>
                    <span className={`badge bg-${color} mx-3 text-white`}>
                      {state}
                    </span>
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <Link to={`/student-view/${problem._id}`}>
                    <button className="btn btn-success">
                      View More About Project
                    </button>
                  </Link>
                  {/* <button className="btn btn-primary">See Demo</button> */}
                </div>
              </div>
            </div>
            <div
              style={{
                textAlign: "right",
                paddingLeft: "0",
                paddingRight: "0",
              }}
              className="col-sm-6"
            >
              <img
                src={problem.image.toString()}
                alt="Architecture of project or flow diagram"
                className="img-responsive simg"
              />
            </div>
          </div>
        );
      }
    });
  }

  return (
    <div>
      <Nav2 />
      <div className="container-fluid proj-stu px-5">
        <h1 className="h1 text-center">Latest Projects</h1>

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

        <div className="d-flex flex-column">{cards != null ? cards : ""}</div>
      </div>
      <Footer />
    </div>
  );
}
export default Student;
