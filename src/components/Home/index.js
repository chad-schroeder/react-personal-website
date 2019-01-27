import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class Home extends PureComponent {
  render() {
    return (
      <section className="Home">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-9 offset-md-2 col-lg-8 offset-lg-2 d-flex flex-column justify-content-center align-items-center">
              <img
                src="images/icons/wave.png"
                className="title-image img-fluid"
                width="100"
                aria-hidden="true"
                alt=""
              />
              <h1>Home</h1>
              <p className="lead mb-4">
                My name is <strong>Chad Schroeder</strong> and I'm a{' '}
                <strong>Senior UI Developer</strong> in San Francisco. Welcome
                to a humble homepage to showcase my coding projects on&nbsp;
                <a href="https://github.com/chad-schroeder?tab=repositories">
                  Github
                </a>
                .
              </p>
              <Link to="/projects" className="h4 m-0 no-link-decoration">
                <img
                  className="mr-2"
                  src="images/icons/assignments.png"
                  width="54"
                  alt="projects icon"
                />
                <span className="text-uppercase link-small font-weight-bold">
                  View&nbsp;projects
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
