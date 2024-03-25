import React, { Fragment, useState } from "react";
import Nav3 from "./Navbar3";
import Footer from "./Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function RequestInvestment() {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    image: "",
    description: "",
    title: "",
    quotation: "",
    use1: "",
    use2: "",
    use3: "",
    technologies: "",
    languages: "",
    domain: "",
    investment: "",
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
    const {
      image,
      description,
      title,
      quotation,
      technologies,
      languages,
      domain,
      investment,
    } = post;
    let problem = {
      image,
      description,
      uses,
      title,
      quotation,
      technologies,
      languages,
      domain,
      investment,
    };

    const headers = {
      "Content-Type": "application/json",
      "x-auth-token": localStorage.getItem("token"),
    };
    if (
      title &&
      description &&
      uses &&
      image &&
      quotation &&
      technologies &&
      languages &&
      domain &&
      investment &&
      !isNaN(investment)
    ) {
      let res;
      try {
        res = await axios.post("http://localhost:5000/api/invest", problem, {
          headers: headers,
        });
        // console.log(res);
        if (res) {
          window.alert("Investment request sucessfully posted");
          navigate("/enterprenuer-dashboard");
        }
      } catch (err) {
        // console.log(err);
        for (let i = 0; i < err.response.data.errors.length; i++) {
          window.alert(err.response.data.errors[i].msg);
        }
      }
    } else {
      if (isNaN(investment)) {
        window.alert("Investment should be a number");
        window.location.reload();
      } else window.alert("Please fill all the fields");
    }
  };

  return (
    <Fragment>
      <Nav3 />
      <div className="container main-post">
        <h1 className="h1 text-center">Ask for an Investment</h1>
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

            <h5 className="mt-5">Give Image Link</h5>
            <input
              className="form-control"
              type="text"
              placeholder="Link"
              name="image"
              value={post.image}
              onChange={handleChange}
            />
            <h5 className="mt-5">
              Enter the required investment amount (in Rupees)
            </h5>
            <input
              className="form-control"
              type="text"
              placeholder="Rupees"
              name="investment"
              value={post.investment}
              onChange={handleChange}
            />

            <h3 className="mt-5">
              Please enter a Quotation for your Investment
            </h3>
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="The request is about.."
              name="quotation"
              value={post.quotation}
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
export default RequestInvestment;
