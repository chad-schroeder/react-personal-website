import React, { PureComponent } from 'react';

class Contact extends PureComponent {
  render() {
    return (
      <section className="page-contact">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-9 offset-md-2 col-lg-8 offset-lg-2 d-flex flex-column justify-content-center align-items-center">
              <img
                src="images/icons/contact.png"
                className="title-image img-fluid"
                width="128"
                aria-hidden="true"
                alt=""
              />
              <h1>Contact</h1>

              <p className="lead">
                I'm currently enrolled in the November 2018 cohort of{' '}
                <a href="https://www.rithmschool.com/">Rithm School</a> to
                improve my javascript know-how and will be looking for new
                employment opportunities beginning March&nbsp;2019.
              </p>

              <div className="d-flex flex-column flex-md-row">
                <a
                  href="https://www.linkedin.com/in/chad-schroeder/"
                  className="h4 mb-2 mb-md-0 no-link-decoration"
                >
                  <img
                    className="mr-2"
                    src="images/icons/linkedin.png"
                    width="54"
                    alt="linkedin profile icon"
                  />
                  <span className="text-uppercase link-small font-weight-bold">
                    LinkedIn
                  </span>
                </a>
                <a
                  href="https://github.com/chad-schroeder"
                  className="h4 m-0 no-link-decoration"
                >
                  <img
                    className="ml-md-4 mr-2"
                    src="images/icons/github.svg"
                    width="52"
                    alt="linkedin profile icon"
                  />
                  <span className="text-uppercase link-small font-weight-bold">
                    Github
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
