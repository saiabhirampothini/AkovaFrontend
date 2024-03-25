import React from "react";
import { Link } from "react-router-dom"; // If using React Router

function Error() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Page Not Found</h1>
      <p style={styles.paragraph}>
        Oops! The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link to="/" style={styles.link}>
        Go back to home page
      </Link>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
  },
  heading: {
    fontSize: "48px",
    marginBottom: "20px",
    color: "#333",
  },
  paragraph: {
    fontSize: "18px",
    color: "#666",
    marginBottom: "40px",
  },
  link: {
    fontSize: "16px",
    color: "#007bff",
    textDecoration: "none",
  },
};

export default Error;
