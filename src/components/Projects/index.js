import React, { PureComponent } from 'react';
import './index.css';

class Projects extends PureComponent {
  render() {
    return (
      <section className="page-projects">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-10 offset-lg-1 d-flex flex-column justify-content-center align-items-center">
              <img
                src="images/icons/assignments.png"
                className="title-image img-fluid"
                width="128"
                aria-hidden="true"
                alt=""
              />
              <h1>Projects</h1>

              <div className="d-flex flex-wrap justify-content-center">
                <div className="card">
                  <div className="card-header">Javascript</div>
                  <div className="card-body">
                    <h5 className="card-title">Memory Monkey</h5>
                    <p className="card-text">
                      Rithm School pre-curriculum assignment to practice DOM
                      manipulation.
                    </p>
                    <a
                      href="https://chad-schroeder.github.io/memory-monkey"
                      className="card-link"
                    >
                      View Project
                    </a>
                    <a
                      href="https://github.com/chad-schroeder/memory-monkey"
                      className="card-link"
                    >
                      Github
                    </a>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">Javascript</div>
                  <div className="card-body">
                    <h5 className="card-title">Meme Machine</h5>
                    <p className="card-text">
                      Rithm School pre-curriculum assignment to practice DOM
                      manipulation.
                    </p>
                    <a
                      href="https://chad-schroeder.github.io/meme-machine"
                      className="card-link"
                    >
                      View Project
                    </a>
                    <a
                      href="https://github.com/chad-schroeder/meme-machine"
                      className="card-link"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
