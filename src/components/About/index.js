import React, { PureComponent } from 'react';

class About extends PureComponent {
  render() {
    return (
      <section className="page-about">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-9 offset-md-2 col-lg-8 offset-lg-2 d-flex flex-column justify-content-center align-items-center">
              <img
                src="images/icons/about.png"
                className="title-image img-fluid"
                width="128"
                aria-hidden="true"
                alt=""
              />
              <h1>About</h1>

              <p className="lead">
                I am currently enrolled in{' '}
                <a href="https://www.rithmschool.com/">Rithm School</a> and this
                website is an assignment to build a personal portfolio website.
              </p>

              <a
                href="files/chad-schroeder-resume.pdf"
                className="h4 m-0 no-link-decoration"
              >
                <img
                  className="mr-2"
                  src="images/icons/resume.png"
                  width="54"
                  alt="resume icon"
                />
                <span className="text-uppercase link-small font-weight-bold">
                  Download my&nbsp;resumé
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
