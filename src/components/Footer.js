import { Fragment } from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <Fragment>
      <footer className="text-center text-lg-start bg-dark text-white mb-0">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="me-4 link-secondary mx-1"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="me-4 link-secondary mx-1"
            >
              <i className="bi bi-twitter"></i>
            </a>
            <a
              href="https://google.com"
              target="_blank"
              rel="noreferrer"
              className="me-5 link-secondary mx-1"
            >
              <i className="bi bi-google"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="me-4 link-secondary mx-1"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="me-4 link-secondary mx-1"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="me-4 link-secondary mx-1"
            >
              <i className="bi bi-github"></i>
            </a>
          </div>
        </section>

        <section className="#">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3 text-secondary"></i>AKOVA
                </h6>
                <p>This is where talent meets opportunity</p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a
                    href="https://mongodb.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-reset"
                  >
                    MongoDB
                  </a>
                </p>
                <p>
                  <a
                    href="https://expressjs.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-reset"
                  >
                    ExpressJs
                  </a>
                </p>
                <p>
                  <a
                    href="https://react.dev"
                    target="_blank"
                    rel="noreferrer"
                    className="text-reset"
                  >
                    React
                  </a>
                </p>
                <p>
                  <a
                    href="https://nodejs.org"
                    target="_blank"
                    rel="noreferrer"
                    className="text-reset"
                  >
                    Node
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                    target="_blank"
                    rel="noreferrer"
                    className="text-reset"
                  >
                    HTML
                  </a>
                </p>
                <p>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                    target="_blank"
                    rel="noreferrer"
                    className="text-reset"
                  >
                    CSS
                  </a>
                </p>
                <p>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    target="_blank"
                    rel="noreferrer"
                    className="text-reset"
                  >
                    JavaScript
                  </a>
                </p>
                <p>
                  <a
                    href="https://getbootstrap.com/docs/5.1/getting-started/introduction/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-reset"
                  >
                    Bootstrap
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3 text-secondary"></i>{" "}
                  Hyderabad,TS,India
                </p>
                <p>
                  <i className="fas fa-envelope me-3 text-secondary"></i>
                  saiabhirampothini@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone me-3 text-secondary"></i> +91
                  63xxxxxxx2
                </p>
                <p>
                  <i className="fas fa-print me-3 text-secondary"></i> +91
                  97xxxxxxx8
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}
        >
          © {new Date().getFullYear()} Copyright:
          <Link className="text-reset fw-bold" to="/">
            Akova
          </Link>
        </div>
      </footer>
    </Fragment>
  );
}
export default Footer;
