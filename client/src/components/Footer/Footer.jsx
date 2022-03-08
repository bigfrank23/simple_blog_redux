import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer-10" style={{ background: "#222" }}>
      <div className="container">
        <div className="row mb-5 pb-3 no-gutters" style={{ background: "#252525" }}>
          <div className="col-md-4 mb-md-0 mb-4 d-flex" style={{ background: "#1e1e1e"}}>
            <div className="con con-1 w-100 py-5">
              <div className="con-info w-100 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <i className="footer_contact fa fa-phone text-white p-3 rounded-circle" aria-hidden="true" />
                </div>
                <div className="text" style={{color: "rgba(255, 255, 255, 0.8)"}}>
                  <span>+2348135488233</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-md-0 mb-4 d-flex" style={{ background: "#1c1c1c"}}>
            <div className="con con-2 w-100 py-5">
              <div className="con-info w-100 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <i className="footer_contact fa fa-envelope text-white p-3 rounded-circle" aria-hidden="true" />
                </div>
                <div className="text">
                  <span>
                    <Link
                      to="/cdn-cgi/l/email-protection"
                      style={{color: "rgba(255, 255, 255, 0.8)", textDecoration: "none"}}
                    >
                      ezeyimf@gmail.com
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-md-0 mb-4 d-flex" style={{ background: "#212529"}}>
            <div className="con con-3 w-100 py-5">
              <div className="con-info w-100 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span><i className="footer_contact fa fa-map-marker p-3 rounded-circle text-white" aria-hidden="true" /></span>
                </div>
                <div className="text" style={{color: "rgba(255, 255, 255, 0.8)"}}>
                  <span>
                    Lagos, Nigeria
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-4 mb-md-0 mb-4 d-flex justify-content-center">
                <ul className="list-unstyled">
                <h2 className="footer-heading text-light" style={{margin: "0 0 30px"}}>About</h2>
                  <li>
                    <Link to="#" className="d-block">
                      My story
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="d-block">
                      Awards
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="d-block">
                      My Team
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="d-block">
                      Career
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 mb-md-0 mb-4 d-flex justify-content-center">
                <ul className="list-unstyled">
                <h2 className="footer-heading text-white" style={{margin: "0 0 30px"}}>Company</h2>
                  <li>
                    <Link to="#" className="d-block">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="d-block">
                      Clients
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="d-block">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="d-block">
                      Press
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 mb-md-0 mb-4 d-flex justify-content-center">
                <ul className="list-unstyled">
                <h2 className="footer-heading text-white" style={{margin: "0 0 30px"}}>Resources</h2>
                  <li>
                    <Link to="#" className="d-block">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="d-block">
                      Newsletter
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="d-block">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-5 mb-md-0 mb-4 d-flex justify-content-center">
            <form action="#" className="subscribe-form">
            <h2 className="footer-heading text-white" style={{margin: "0 0 30px"}}>Subscribe</h2>
              <div className="form-group d-flex">
                <input
                  type="text"
                  className="form-control rounded-left"
                  placeholder="Enter email address"
                />
                <button type="submit" className="btn btn-primary rounded-right">
                  Subscribe
                </button>
              </div>
              <span className="subheading" style={{color: "rgba(255, 255, 255, 0.3)", marginTop: "5px"}}>
                Get digital marketing updates in your mailbox
              </span>
            </form>
          </div>
        </div>
        <div className="row mt-5 pt-4 border-top">
          <div className="col-md-6 col-lg-8 mb-md-0 mb-4">
            <p className="copyright mb-0" style={{color: "rgba(255, 255, 255, 0.3)"}}>
              Copyright &copy; 2022 All
              rights reserved. | This app is made with{" "}
              <i className="fa fa-heart" aria-hidden="true" /> by{" "}
              <Link to="http://frank111.netlify.app" target="_blank">
                Franklin
              </Link>
            </p>
          </div>
          <div className="col-md-6 col-lg-4 text-md-right">
            <ul className="ftco-footer-social p-0 d-flex list-unstyled justify-content-end">
              <li className="ftco-animate">
                <Link
                  to="#"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Twitter"
                >
                  <i className="fa fa-twitter bg-secondary text-white p-3 rounded-circle" aria-hidden="true" />
                </Link>
              </li>
              <li className="ftco-animate">
                <Link
                  to="#"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Facebook"
                >
                  <i className="fa fa-facebook bg-secondary text-white p-3 rounded-circle mx-2" aria-hidden="true" />
                </Link>
              </li>
              <li className="ftco-animate">
                <Link
                  to="#"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Instagram"
                >
                  <i className="fa fa-instagram bg-secondary text-white p-3 rounded-circle" aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer