// import React, { Fragment, useState } from "react";
// import Nav2 from "./Navbar2";
// import Footer from "./Footer";
// import { useEffect } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";
// function StudentIdeas() {
//   const navigate = useNavigate();
//   const [ideas, setIdeas] = useState(null);
//   const [user, setUser] = useState([]);
//   useEffect(() => {
//     const fetchIdeas = async () => {
//       try {
//         const headers = {
//           "Content-Type": "application/json",
//           "x-auth-token": localStorage.getItem("token"),
//         };

//         let ideaVar = await axios.get(
//           "https://akova-backend.vercel.app/api/idea/getidea/me",
//           {
//             headers: headers,
//           }
//         );
//         // console.log(ideaVar);
//         for (let i = 0; i < ideaVar.data.length; i++) {
//           // console.log(ideaVar.data[i].problem.user);
//           if (ideaVar.data[i].status === "approve") {
//             let userX = await axios.get(
//               `https://akova-backend.vercel.app/api/auth/getEnterprenuer/${ideaVar.data[i].problem.user}`,
//               { headers: headers }
//             );
//             // console.log(userX);
//             ideaVar.data[i].enterprenuer = userX;
//           }
//         }
//         // console.log(ideaVar);
//         setIdeas(ideaVar);
//       } catch (err) {
//         window.alert(err.response.data.msg);
//         navigate("/student-dashboard");
//       }
//     };
//     fetchIdeas();
//   }, []);
//   // console.log(user);
//   let info = null;
//   if (ideas != null) {
//     // console.log(ideas);
//     let color;
//     const ideasList = ideas.data;
//     info = ideasList.map((idea) => {
//       // console.log(idea);
//       let text = null;
//       if (idea.status === "pending") {
//         color = "warning";
//         text = "PENDING";
//       } else if (idea.status === "reject") {
//         color = "danger";
//         text = "REJECTED";
//       } else if (idea.status === "approve") {
//         color = "success";
//         text = "APPROVED";
//       }

//       return (
//         <div className="col-sm-4 mt-5" key={idea._id}>
//           <div className="idea-tab px-3 py-2">
//             <h3 className="text-center mb-3">{idea.problem.title}</h3>
//             <blockquote>
//               <strong>Contributer</strong>:<em>{idea.problem.contributer}</em>
//             </blockquote>
//             <p>
//               <strong>Problem</strong>:{idea.problem.problemStatement}
//             </p>
//             <p>
//               <strong>Idea Overview</strong>:{idea.overview}
//             </p>
//             <p>
//               <strong>Idea Description</strong>:{idea.description}
//             </p>
//             <p>
//               <strong>Attachment</strong>:
//               <a
//                 href={`https://${idea.attachment}`}
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 Git Repository
//               </a>
//             </p>
//             <p>
//               <strong>Submission Date</strong>:
//               {new Date(idea.date).toDateString()}
//             </p>
//             <p>
//               <strong>Status</strong>:
//               <span className={`badge bg-${color}`}>{text}</span>
//             </p>
//             {/* {console.log(idea)} */}
//             {idea.status === "approve" ? (
//               <div>
//                 <p>
//                   <strong> Email Address of Enterprenuer</strong>:
//                   <strong className="text-primary">
//                     {idea.enterprenuer.data.email}
//                   </strong>
//                 </p>
//               </div>
//             ) : null}
//             <div className="d-flex justify-content-center mb-3">
//               <Link to={`/student-view/${idea.problem._id}`}>
//                 <button className="btn btn-primary">View Project</button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       );
//     });
//   }
//   return (
//     <Fragment>
//       <Nav2 />
//       <div className="container main-idea">
//         <h2>My Project Ideas</h2>
//         <div className="row">{info}</div>
//       </div>
//       <Footer />
//     </Fragment>
//   );
// }
// export default StudentIdeas;

//With Modal

import React, { Fragment, useState } from "react";
import Nav2 from "./Navbar2";
import Footer from "./Footer";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
function StudentIdeas() {
  const navigate = useNavigate();
  const [ideas, setIdeas] = useState(null);
  // const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        const headers = {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        };

        let ideaVar = await axios.get(
          "https://akova-backend.vercel.app/api/idea/getidea/me",
          {
            headers: headers,
          }
        );
        // console.log(ideaVar);
        for (let i = 0; i < ideaVar.data.length; i++) {
          // console.log(ideaVar.data[i].problem.user);
          if (ideaVar.data[i].status === "approve") {
            let userX = await axios.get(
              `https://akova-backend.vercel.app/api/auth/getEnterprenuer/${ideaVar.data[i].problem.user}`,
              { headers: headers }
            );
            // console.log(userX);
            ideaVar.data[i].enterprenuer = userX;
          }
        }
        // console.log(ideaVar);
        setIdeas(ideaVar);
      } catch (err) {
        window.alert(err.response.data.msg);
        navigate("/student-dashboard");
      }
    };
    fetchIdeas();
  }, []);
  // console.log(user);
  let info = null;
  if (ideas != null) {
    // console.log(ideas);
    let color;
    const ideasList = ideas.data;
    info = ideasList.map((idea) => {
      // console.log(idea);
      let text = null;
      if (idea.status === "pending") {
        color = "warning";
        text = "PENDING";
      } else if (idea.status === "reject") {
        color = "danger";
        text = "REJECTED";
      } else if (idea.status === "approve") {
        color = "success";
        text = "APPROVED";
      }

      return (
        <div className="col-sm-4 mt-5" key={idea._id}>
          <div className="idea-tab px-3 py-2">
            <h3 className="text-center mb-3">{idea.problem.title}</h3>
            <blockquote>
              <strong>Contributer</strong>:<em>{idea.problem.contributer}</em>
            </blockquote>
            <p>
              <strong>Problem</strong>:{idea.problem.problemStatement}
            </p>
            <p>
              <strong>Idea Overview</strong>:{idea.overview}
            </p>
            <p>
              <strong>Idea Description</strong>:
              <p>
                {idea.description.slice(0, 20)} ...{" "}
                <button
                  type="button"
                  className="btn text-primary"
                  data-toggle="modal"
                  data-target={`#myModal${idea._id}`}
                >
                  View More
                </button>
              </p>
              <div
                id={`myModal${idea._id}`}
                className="modal fade"
                role="dialog"
              >
                <div className="modal-dialog" style={{ maxWidth: "800px" }}>
                  <div className="modal-content">
                    <div className="modal-header d-flex justify-content-center">
                      <h4 className="modal-title">{idea.problem.title}</h4>
                    </div>
                    <div className="modal-body">
                      <h5>Problem Description</h5>
                      <p style={{ wordWrap: "break-word" }}>
                        {idea.description}
                      </p>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-default text-danger"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </p>

            <p>
              <strong>Attachment</strong>:
              <a
                href={`https://${idea.attachment}`}
                target="_blank"
                rel="noreferrer"
              >
                Git Repository
              </a>
            </p>
            <p>
              <strong>Submission Date</strong>:
              {new Date(idea.date).toDateString()}
            </p>
            <p>
              <strong>Status</strong>:
              <span className={`badge bg-${color}`}>{text}</span>
            </p>
            {/* {console.log(idea)} */}
            {idea.status === "approve" ? (
              <div>
                <p>
                  <strong> Email Address of Enterprenuer</strong>:
                  <strong className="text-primary">
                    {idea.enterprenuer.data.email}
                  </strong>
                </p>
              </div>
            ) : null}
            <div className="d-flex justify-content-center mb-3">
              <Link to={`/student-view/${idea.problem._id}`}>
                <button className="btn btn-primary">View Project</button>
              </Link>
            </div>
          </div>
        </div>
      );
    });
  }
  return (
    <Fragment>
      <Nav2 />
      <div className="container main-idea">
        <h2>My Project Ideas</h2>
        <div className="row">{info}</div>
      </div>
      <Footer />
    </Fragment>
  );
}
export default StudentIdeas;

