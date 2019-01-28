import React, { PureComponent } from 'react';
import styled from 'styled-components';

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
                <Card className="card">
                  <CardHeader className="card-header">Javascript</CardHeader>
                  <CardBody className="card-body">
                    <CardTitle className="card-title">Memory Monkey</CardTitle>
                    <p className="card-text">
                      Rithm School pre-curriculum assignment to practice DOM
                      manipulation.
                    </p>
                    <CardLink
                      href="https://chad-schroeder.github.io/memory-monkey"
                      className="card-link"
                    >
                      View Project
                    </CardLink>
                    <CardLink
                      href="https://github.com/chad-schroeder/memory-monkey"
                      className="card-link"
                    >
                      Github
                    </CardLink>
                  </CardBody>
                </Card>

                <Card className="card">
                  <CardHeader className="card-header">Javascript</CardHeader>
                  <CardBody className="card-body">
                    <CardTitle className="card-title">Meme Machine</CardTitle>
                    <p className="card-text">
                      Rithm School pre-curriculum assignment to practice DOM
                      manipulation.
                    </p>
                    <CardLink
                      href="https://chad-schroeder.github.io/meme-machine"
                      className="card-link"
                    >
                      View Project
                    </CardLink>
                    <CardLink
                      href="https://github.com/chad-schroeder/meme-machine"
                      className="card-link"
                    >
                      Github
                    </CardLink>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const Card = styled.div`
  margin-bottom: 20px;
  font-size: 1rem;
  text-align: left;
  border: 2px solid black;
  border-radius: 8px;

  ::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 8px;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: black;
    border-radius: 8px;
  }

  @media (min-width: 768px) {
    margin: 12px;
    max-width: 280px;
  }

  @media (min-width: 992px) {
    max-width: 320px;
  }
`;

const CardHeader = styled.div`
  position: relative;
  padding: 0.6rem 1.25rem 0.6rem 2.8rem;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  border-bottom: 2px solid black;

  ::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 1.2rem;
    width: 1rem;
    height: 1rem;
    border: 2px solid black;
    border-radius: 50%;
    transform: translateY(-50%);
  }

  :first-child {
    border-radius: 8px 8px 0 0;
  }
`;

const CardBody = styled.div`
  background-color: white;
  border-radius: 0 0 8px 8px;
`;

const CardTitle = styled.h5`
  font-weight: 700;
`;

const CardLink = styled.a`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  text-transform: uppercase;
  transition: 0.3s;

  + {
    margin-left: 0;
  }

  @media (min-width: 400px) {
    display: inline;

    + {
      margin-left: 1.25rem;
    }
  }
`;

export default Projects;
