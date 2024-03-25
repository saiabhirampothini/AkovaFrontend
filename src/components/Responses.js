import React, { Fragment } from "react";
import Nav3 from "./Navbar3";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Responses() {
  const navigate = useNavigate();
  let id = useParams();
  id = id.id;
  // console.log(id);
  const [problems, setProblems] = useState(null);
  const [ideas, setIdeas] = useState(null);
  const users = [];
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
    const fetchIdeas = async () => {
      try {
        const headers = {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        };
        let ideasList = await axios.get(
          `https://akova-backend.vercel.app/api/idea/getideas/${id}`,
          {
            headers: headers,
          }
        );
        // console.log(problemsList);
        setIdeas(ideasList.data);
      } catch (err) {
        window.alert(err.response.data.msg);
        navigate("/enterprenuer-dashboard");
        // console.log(err.response.data.msg);
      }
    };
    fetchIdeas();
  }, []);
  const onClickReject = async (e, idea) => {
    // e.preventDeafult();
    const ideaUpdate = { ...idea };
    ideaUpdate.status = "reject";
    try {
      const headers = {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      };
      let res = await axios.put(
        `https://akova-backend.vercel.app/api/idea/update/${ideaUpdate._id}`,
        ideaUpdate,
        {
          headers: headers,
        }
      );
      if (res) {
        window.location.reload();
      }
    } catch (err) {
      window.alert(err.msg);
    }
  };
  const onClickApprove = async (e, idea) => {
    // e.preventDeafult();
    const ideaUpdate = { ...idea };
    ideaUpdate.status = "approve";
    try {
      const headers = {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      };
      // console.log(ideaUpdate._id);
      let res = await axios.put(
        `https://akova-backend.vercel.app/api/idea/update/${ideaUpdate._id}`,
        ideaUpdate,
        {
          headers: headers,
        }
      );
      if (res) {
        window.location.reload();
      }
    } catch (err) {
      window.alert(err.msg);
    }
  };

  const probs = [problems];
  let title;
  if (problems != null) title = probs[0].title;
  // console.log(ideas);
  let ideasInfo;
  let index = 1;
  // console.log(users);
  if (ideas != null) {
    ideasInfo = ideas.map((idea) => {
      // console.log(idea);
      return (
        <div className="res-tab p-3 mb-5" key={idea._id}>
          <h3 className="text-center">Response {index++}</h3>
          <p className="sol-res" style={{ marginBottom: "0" }}>
            Solution Overview
          </p>
          <p style={{ fontSize: "22px", marginTop: "0" }}>{idea.overview}</p>
          <p className="sol-res" style={{ marginBottom: "0" }}>
            Description
          </p>
          <p style={{ fontSize: "18px", marginTop: "0" }}>{idea.description}</p>
          <p className="sol-res" style={{ marginBottom: "0" }}>
            Attachments
          </p>
          <ul style={{ listStyle: "none" }}>
            <li>
              <a href={`https://${idea.attachment}`} target="_blank">
                GitHub Repository
              </a>
            </li>
          </ul>
          <p className="sol-res" style={{ marginBottom: "0" }}>
            Response Received On
          </p>
          <p style={{ fontSize: "18px", marginTop: "0" }}>
            {new Date(idea.date).toDateString()}
          </p>
          <p className="sol-res" style={{ marginBottom: "0" }}>
            Posted by
          </p>
          <blockquote>
            <strong>{idea.user.name}</strong>
          </blockquote>
          <div className="d-flex justify-content-around">
            {idea.status === "reject" ? (
              <div className="text-danger h5">
                <strong>You rejected this idea</strong>
              </div>
            ) : null}
            {idea.status === "approve" ? (
              <div>
                <strong className="text-success h5">
                  You approved this idea
                </strong>
                <blockquote>
                  Email Address of Student:
                  <strong className="text-primary">{idea.user.email}</strong>
                </blockquote>
              </div>
            ) : null}
            {idea.status === "pending" ? (
              <div>
                <button
                  className="btn btn-success"
                  onClick={(e) => {
                    onClickApprove(e, idea);
                  }}
                >
                  Approve
                </button>
              </div>
            ) : null}
            {idea.status === "pending" ? (
              <div>
                <button
                  className="btn btn-danger"
                  onClick={(e) => {
                    onClickReject(e, idea);
                  }}
                >
                  Reject
                </button>
              </div>
            ) : null}
          </div>
        </div>
      );
    });
  }
  return (
    <Fragment>
      <Nav3 />
      <div className="container main-res">
        <h1 className="h1 text-center mb-4">{title}</h1>
        <h2 className="mt-5 text-secondary mb-5">
          Responses {ideas != null ? ideas.length : ""}
        </h2>

        <div className="d-flex flex-column">{ideasInfo}</div>
      </div>

      <Footer />
    </Fragment>
  );
}
export default Responses;
