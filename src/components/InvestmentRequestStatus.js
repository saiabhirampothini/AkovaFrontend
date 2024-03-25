import { useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import React, { Fragment, useState } from "react";
import Footer from "./Footer";
import Nav3 from "./Navbar3";
function InvestmentRequestStatus() {
  const navigate = useNavigate();
  const [investments, setInvestments] = useState(null);
  useEffect(() => {
    const fetchInvestments = async () => {
      try {
        const headers = {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        };

        let int = await axios.get(
          "https://akova-backend.vercel.app/api/invest/enterprenuer",
          {
            headers: headers,
          }
        );
        if (int !== null && int.length !== 0) {
          for (let i = 0; i < int.data.length; i++) {
            // console.log(int.data[i]._id);
            let investors = await axios.get(
              `https://akova-backend.vercel.app/api/invest/enterprenuer/investor/${int.data[i]._id}`,
              { headers: headers }
            );
            int.data[i].investors = investors;
          }
        }
        setInvestments(int);
      } catch (err) {
        window.alert(err.response.data.msg);
      }
    };
    fetchInvestments();
  }, []);
  // console.log(investments);
  let info = null;
  if (investments != null) {
    // console.log(ideas);

    const investmentList = investments.data;
    info = investmentList.map((investment) => {
      // console.log(investment);
      const list = investment.investors.data.map((investor) => {
        // console.log(investor.investor.name);
        return (
          <li key={investor._id}>
            <strong>{investor.investor.name}</strong>:
            <strong className="text-primary">{investor.investor.email}</strong>
          </li>
        );
      });
      return (
        <div className="col-sm-4 mt-5" key={investment._id}>
          <div className="idea-tab px-3 py-2">
            <h3 className="text-center mb-3">{investment.title}</h3>
            {investment.accepted === true ? (
              <blockquote className="badge bg-danger text-white">
                Request Stopped
              </blockquote>
            ) : null}
            {investment.accepted === false ? (
              <blockquote className="badge bg-success text-white">
                Request Active
              </blockquote>
            ) : null}
            <p>
              <strong>Quotation</strong>:{investment.quotation}
            </p>
            <p>
              <strong>Coded Investment Amount</strong>:{investment.investment}
            </p>
            <p>
              <strong>Submission Date</strong>:
              {new Date(investment.date).toDateString()}
            </p>
            <p>
              <strong className="text-secondary">List of investors:</strong>
              <ol>{list}</ol>
            </p>

            <div className="d-flex justify-content-center mb-3">
              <Link to={`/enterprenuer-invest-view/${investment._id}`}>
                <button className="btn btn-primary">View Details</button>
              </Link>
            </div>
          </div>
        </div>
      );
    });
  }
  return (
    <div>
      <Fragment>
        <Nav3 />
        <div className="container main-idea">
          <h2>My Requested Investments Status</h2>
          <div className="row">{info}</div>
        </div>
        <Footer />
      </Fragment>
    </div>
  );
}
export default InvestmentRequestStatus;
