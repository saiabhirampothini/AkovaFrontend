// import React, { Fragment } from "react";
// import Navbar1 from "./Navbar1";
// import Footer from "./Footer";

// function index() {
//   return (
//     <Fragment>
//       <Navbar1 />
//       <div className="container-fluid main-bg">
//         <h1 className="h1 brand mt-3 ml-3">Akova</h1>
//         <p className="quote mt-3 ml-5">
//           Innovation distinguishes between a leader and a follower
//         </p>
//       </div>
//       <div className="container-fulid px-5 intro" style={{ marginTop: "3rem" }}>
//         <h1 style={{ color: "gray" }}>What is Akova??</h1>
//         <p style={{ fontSize: "26px" }} className="px-3">
//           Akova is a portal where the budding techies and enterprenuers can
//           mutually exchange their ideas
//         </p>
//       </div>
//       <div className="student-home">
//         <div className="">
//           <h2 className="">Students</h2>
//           <blockquote className="px-3" style={{ fontSize: "22px" }}>
//             Students can explore their skills and can gain more knowlede by
//             giving solutions to the problems that are higly complex and huge
//           </blockquote>
//           <p className="px-4" style={{ fontSize: "22px" }}>
//             <strong>Uses for students</strong>
//           </p>
//           <ol style={{ fontSize: "18px" }}>
//             <li>Can interact with professionals</li>
//             <li>Can get internships from top MNCs</li>
//             <li>Can get works experience at high level</li>
//           </ol>
//         </div>
//       </div>
//       <div className="enterprenuer-home">
//         <div className="">
//           <h2 className="">Enterprenuers</h2>
//           <blockquote className="px-3" style={{ fontSize: "22px" }}>
//             Students can explore their skills and can gain more knowlede by
//             giving solutions to the problems that are higly complex and huge
//           </blockquote>
//           <p className="px-4" style={{ fontSize: "22px" }}>
//             <strong>Uses for students</strong>
//           </p>
//           <ol style={{ fontSize: "18px" }}>
//             <li>Can interact with professionals</li>
//             <li>Can get internships from top MNCs</li>
//             <li>Can get works experience at high level</li>
//           </ol>
//         </div>
//       </div>
//       <div className="investor-home">
//         <div className="">
//           <h2 className="">Investors</h2>
//           <blockquote className="px-3" style={{ fontSize: "22px" }}>
//             Students can explore their skills and can gain more knowlede by
//             giving solutions to the problems that are higly complex and huge
//           </blockquote>
//           <p className="px-4" style={{ fontSize: "22px" }}>
//             <strong>Uses for students</strong>
//           </p>
//           <ol style={{ fontSize: "18px" }}>
//             <li>Can interact with professionals</li>
//             <li>Can get internships from top MNCs</li>
//             <li>Can get works experience at high level</li>
//           </ol>
//         </div>
//       </div>
//       <div className="aboutus-home">
//         <div className="">
//           <h2 className="">About Us</h2>
//           <blockquote className="px-3" style={{ fontSize: "22px" }}>
//             Students can explore their skills and can gain more knowlede by
//             giving solutions to the problems that are higly complex and huge
//           </blockquote>
//           <p className="px-4" style={{ fontSize: "22px" }}>
//             <strong>Uses for students</strong>
//           </p>
//           <ol style={{ fontSize: "18px" }}>
//             <li>Can interact with professionals</li>
//             <li>Can get internships from top MNCs</li>
//             <li>Can get works experience at high level</li>
//           </ol>
//         </div>
//       </div>

//       <Footer />
//     </Fragment>
//   );
// }
// export default index;

import React, { Fragment } from "react";
import Navbar1 from "./Navbar1";
import Footer from "./Footer";

function index() {
  return (
    <Fragment>
      <Navbar1 />
      <div className="container-fluid main-bg">
        <h1 className="h1 brand mt-3 ml-3">Akova</h1>
        <p className="quote mt-3 ml-5">
          Innovation distinguishes between a leader and a follower
        </p>
      </div>
      <div className="container-fluid px-5 intro" style={{ marginTop: "3rem" }}>
        <div className="container p-5">
          <h1 style={{ color: "gray" }} className="h1">
            What is Akova??
          </h1>
          <p style={{ fontSize: "26px" }} className="px-3">
            Akova is a portal where the budding enterprenuers, students and
            investors come together to collaborate
          </p>
          <h2 className="text-secondary mt-5">
            Our Mission - Platform for Innovation
          </h2>
          <p style={{ fontSize: "22px" }} className="px-3">
            These days the tech world is growing rapidly.And the technologies
            are growing leaps and bounds.And these days every one has access to
            the technology.From the global cities to the remote villages every
            one has access to internet.Lot of technologies are coming from
            students,small startups and enterprenuers.And many investors and
            companies are ready to invest these technologies.
          </p>
          <p style={{ fontSize: "22px" }} className="px-3">
            Our Platform is a way to connect them effectively and securely. And
            with the use of our platform they can work collaboratively
          </p>

          <h3 className="mt-4">
            Wishing all the Enterprenuers,Students and Investors willing to join
            on our platform a very good luck
          </h3>
        </div>
      </div>
      <div className="student-home">
        <div className="container p-5">
          <h2 className="">Students</h2>
          <blockquote className="px-3" style={{ fontSize: "22px" }}>
            Students can demonstrate their skills by working in collaboration
            with Enterprenuers and Real World Projects. Students can submit
            their ideas and methodologies to the enterprenuers to solve the
            problems that enterprenuers and startups face to solve.Students can
            get collaborate in developing a project by submitting an efficient
            idea to solve the problem.This helps students to build their carrer
            ,find jobs and even to develop industry ready skills.
          </blockquote>
          <p className="px-4 mt-5" style={{ fontSize: "24px" }}>
            <strong>Uses for students</strong>
          </p>
          <ol style={{ fontSize: "20px" }}>
            <li>Can interact with professionals</li>
            <li>Can get internships from top MNCs</li>
            <li>Can get work experience at high level</li>
            <li>
              Can directly contact enterprenuers by submitting ideas to solve
              their problems
            </li>
            <li>
              Can get chances to work in the industry projects at Undergraduate
              level with your skills
            </li>
          </ol>
        </div>
      </div>
      <div className="student-home">
        <div className="container p-5">
          <h2 className="">Entrepreneurs</h2>
          <blockquote className="px-3 ml-4" style={{ fontSize: "22px" }}>
            <h4 className="mt-4">For Investments</h4>
            <p className="px-3">
              Enterprenuers with good innovative ideas can find investments
              directly from this platform with just one click away by submitting
              your project idea and use in the real world scenario.By specifying
              the amount of investment you want with a quotations the investors
              can see your request and they can invest your project by
              contacting you.
            </p>
            <p className="px-3">
              Through this platform Enterprenuers find a way to contact with
              multiple investors at same time.Providing the flexibility to find
              the right investor for the project
            </p>
          </blockquote>
          <blockquote className="px-3 ml-4" style={{ fontSize: "22px" }}>
            <h4 className="mt-3">For Solving Problems in Project</h4>
            <p className="px-3">
              Enterprenuers can solve the bugs and any problems in their
              projects by direcly getting ideas and support from the
              students.The Enterprenuers can post a project's problem statement
              and some information regarding the problem.And once the problem is
              posted he can get reponses from the talended students who are
              ready to get into the industry.So the Enterprenuer can solve the
              problem in the project with less cost
            </p>
            <p className="px-3">
              Through this platform Enterprenuers find a way to collaborate with
              multiple students at the same time. And they can recruit the
              students based on their talents.Enterprenuers can directly contact
              students if they like the methodology of solving a problem
            </p>
          </blockquote>
        </div>
      </div>
      <div className="student-home">
        <div className="container p-5">
          <h2 className="">Investors</h2>
          <blockquote className="px-3 ml-4" style={{ fontSize: "22px" }}>
            <p className="px-3 mt-5">
              There are many investors around the world who are ready to invest
              in the projects with a passion for technology.But investors dont
              find any opportunity to search for the projects that they like to
              invest.Through this platform they can search for the project
              according to their intrest. They can search projects across
              domains and costs.
            </p>
            <p className="px-3">
              If the investor like the project, he can check the quotation and
              the price coded by the Enterprenuer for the investment.If the
              investor is good with every thing ,investor can show intrest to
              invest by just a simple click of button. And then, he/she can
              contact the Enterprenuer for further details and collaboration
            </p>
          </blockquote>
        </div>
      </div>

      <div className="student-home">
        <div className="container p-5">
          <h2 className="">About Us</h2>
          <blockquote className="px-3 ml-4" style={{ fontSize: "22px" }}>
            <p className="px-3 mt-5">
              I am <strong>Sai Abhi Ram Pothini</strong> ,a Computer Science
              student from Keshav Memorial Institute of Technology.
            </p>
            <p className="px-3 mt-3">
              I am a technology enthusiast, I like to explore new technologies
              and I like to work on new technologies and projects. I got an idea
              to make a platform for the people like that is where the starting
              of the mission <strong>Akova</strong>
            </p>
            <h4 className="px3 mt-5">Contact me</h4>
            <div>
              <span className="px-4 mt-4 ml-4">
                <strong>Email</strong>
              </span>
              :
              <span>
                <a
                  href="mailto:saiabhiram314@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  saiabhiram314@gmail.com
                </a>
              </span>
            </div>
            <div className="mt-3">
              <span className="px-4 mt-5 ml-4">
                <strong>X(Twitter)</strong>
              </span>
              :
              <span>
                <span> </span>
                <a
                  href="https://x.com/saiabhirampothini"
                  target="_blank"
                  rel="noreferrer"
                >
                  x.com/saiabhirampothini
                </a>
              </span>
            </div>
            <div className="mt-3">
              <span className="px-4 mt-5 ml-4">
                <strong>LinkedIn</strong>
              </span>
              :
              <span>
                <span> </span>
                <a
                  href="https://linkedin.com/in/saiabhirampothini"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/saiabhirampothini
                </a>
              </span>
            </div>
          </blockquote>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default index;
