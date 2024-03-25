import React, { Fragment, useState } from "react";
import Nav3 from "./Navbar3";
import Footer from "./Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PostProblem() {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    image: "",
    description: "",
    title: "",
    problemStatement: "",
    use1: "",
    use2: "",
    use3: "",
    technologies: "",
    languages: "",
    dueDate: "",
    domain: "",
    output: "",
    githubrepository: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const postProblem = async (e) => {
    e.preventDefault();
    let uses = post.use1 + "," + post.use2 + "," + post.use3;
    let dueDate = new Date(post.dueDate);
    const {
      image,
      description,
      title,
      problemStatement,
      technologies,
      languages,
      domain,
      output,
      githubrepository,
    } = post;
    let problem = {
      image,
      description,
      uses,
      title,
      problemStatement,
      technologies,
      languages,
      domain,
      dueDate,
      output,
      githubrepository,
    };
    const headers = {
      "Content-Type": "application/json",
      "x-auth-token": localStorage.getItem("token"),
    };
    if (title) {
      let res;
      try {
        res = await axios.post(
          "https://akova-backend.vercel.app/api/postproblem",
          problem,
          { headers: headers }
        );
        // console.log(res);
        if (res) {
          window.alert("Problem sucessfully posted");
          navigate("/enterprenuer-dashboard");
        }
      } catch (err) {
        // console.log(err);
        for (let i = 0; i < err.response.data.errors.length; i++) {
          window.alert(err.response.data.errors[i].msg);
        }
      }
    }
  };

  return (
    <Fragment>
      <Nav3 />
      <div className="container main-post">
        <h1 className="h1 text-center">Upload a project</h1>
        <p className="text-secondary" style={{ fontSize: "28px" }}>
          Project Details
        </p>
        <form action="#">
          <div className="form-group">
            <h5>Project Title</h5>
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="eg.. artificial intelligence based project"
              name="title"
              value={post.title}
              onChange={handleChange}
            />
            <h5 className="mt-3">Technologies & Languages</h5>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Technologies"
                  name="technologies"
                  value={post.technologies}
                  onChange={handleChange}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Languages"
                  name="languages"
                  value={post.languages}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mt-4">
              <h4>Give the domain</h4>
              <input
                className="form-control"
                type="text"
                placeholder="Domain"
                name="domain"
                value={post.domain}
                onChange={handleChange}
              />
            </div>
            <h5 className="mt-5">Description (Elaborated)</h5>
            <div className="form-group">
              <div className="text-right">
                <textarea
                  className="form-control"
                  rows="10"
                  name="description"
                  value={post.description}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>

            <h5 className="mt-5">Use 1</h5>
            <input
              className="form-control"
              type="text"
              placeholder="Give one use"
              name="use1"
              value={post.use1}
              onChange={handleChange}
            />
            <h5 className="mt-5">Use 2</h5>
            <input
              className="form-control"
              type="text"
              placeholder="Give a use"
              name="use2"
              value={post.use2}
              onChange={handleChange}
            />
            <h5 className="mt-5">Use 3</h5>
            <input
              className="form-control"
              type="text"
              placeholder="Give a use"
              name="use3"
              value={post.use3}
              onChange={handleChange}
            />
            <h5 className="mt-5">Output</h5>
            <input
              className="form-control"
              type="text"
              placeholder="Give a use"
              name="output"
              value={post.output}
              onChange={handleChange}
            />
            <h5 className="mt-5">Give Image Link</h5>
            <input
              className="form-control"
              type="text"
              placeholder="Link"
              name="image"
              value={post.image}
              onChange={handleChange}
            />
            <h5 className="mt-5">Give Git Repo Link</h5>
            <input
              className="form-control"
              type="text"
              placeholder="Link"
              name="githubrepository"
              value={post.githubrepository}
              onChange={handleChange}
            />
            <h5 className="mt-5">Enter Due Date</h5>
            <input
              placeholder="Select date (YYYY/MM/DD)"
              type="text"
              className="form-control"
              name="dueDate"
              value={post.dueDate}
              onChange={handleChange}
            />

            <h3 className="mt-5">Enter your problem statement</h3>
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="The problem is about.."
              name="problemStatement"
              value={post.problemStatement}
              onChange={handleChange}
            />

            <div className="d-flex justify-content-between mt-5 mb-5 container">
              {/* <button className="btn btn-primary">Save</button>
              <button className="btn btn-danger">Delete</button> */}
              <button
                type="submit"
                className="btn btn-success"
                onClick={(e) => {
                  postProblem(e);
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </Fragment>
  );
}

export default PostProblem;
