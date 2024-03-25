import Nav4 from "./Navbar4";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function InvestorDashboard() {
  const [problems, setProblems] = useState(null);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const headers = {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        };
        let problemsList = await axios.get(
          "http://localhost:5000/api/invest/projects",
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
    fetchProjects();
  }, []);
  // console.log(problems);
  const handleSearch = async (e) => {
    setSearch(e.target.value);
  };
  let cards = null;
  if (problems != null) {
    // console.log(problems);
    const filteredProblems = problems.filter((problem) => {
      return (
        problem.title.toLowerCase().includes(search.toLowerCase()) ||
        problem.enterprenuer.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        problem.domain.toLowerCase().includes(search.toLowerCase())
      );
    });
    // console.log(filteredProblems);
    cards = filteredProblems.map((problem) => {
      // console.log(problem);
      let uses = problem.uses.split(",");
      // console.log(new Date());
      // let id = problem._id;
      // return <li key={problem.contributer}>{problem.title}</li>;
      if (problem.accepted === false) {
        return (
          <div className="row proj-tab-stu mt-5" key={problem._id}>
            <div className="col-sm-6">
              <div className="px-4 py-4">
                <h2 className="h2 text-center">{problem.title}</h2>
                <p className="prj-des-stu">{problem.description}</p>
                <h4 className="h4 text-secondary">Enhances the works</h4>
                <ol>
                  <li>{uses[0]}</li>
                  <li>{uses[1]}</li>
                  <li>{uses[2]}</li>
                </ol>
                <div className="mb-2">
                  <span className="text-secondary h6">
                    <strong>Domain</strong>
                  </span>
                  :<strong className="ml-1">{problem.domain}</strong>
                </div>
                <div className="mb-2">
                  <span className="text-secondary h6">
                    <strong>Date of request</strong>
                  </span>
                  :
                  <strong className="ml-1">
                    {new Date(problem.date).toDateString()}
                  </strong>
                </div>
                <div className="mb-2">
                  <span className="text-secondary h6">
                    <strong>Contributer</strong>
                  </span>
                  :<strong className="ml-1">{problem.enterprenuer.name}</strong>
                </div>

                <div className="d-flex justify-content-between mt-3">
                  <Link to={`/investor-view/${problem._id}`}>
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
      <Nav4 />
      <div className="container-fluid proj-stu px-5">
        <h1 className="h1 text-center">Latest Projects</h1>

        <input
          className="form-control mr-sm-4 mt-4 mb-2"
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
export default InvestorDashboard;
