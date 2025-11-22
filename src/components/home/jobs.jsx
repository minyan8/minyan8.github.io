import React from "react";
import { jobs } from "../../editable-stuff/config";
import { Container, Row } from "react-bootstrap";
import { Jumbotron } from "./migration";

const WorkExperience = () => {
  if (!jobs.show) {
    return null; // If jobs.show is false, don't render
  }

  return (
    <section className="section py-5 bg-white">
      <Container className="py-5">
        <Jumbotron className="bg-transparent border-0 shadow-none">
          <div className="text-center mb-5">
            <span className="text-eyebrow">Experience</span>
            <h2 className="display-3 mb-4 fw-bold text-primary">
              {jobs.heading}
            </h2>
          </div>
          <Row className="justify-content-center">
            {jobs.data.map((job, index) => (
              <div
                key={index}
                className="mb-4 p-4 rounded-4 bg-secondary shadow-sm"
                style={{ maxWidth: "700px", width: "100%" }}
              >
                <h3
                  className="h4 fw-bold text-primary"
                  style={{ marginBottom: "8px" }}
                >
                  {job.title}
                </h3>
                <h4
                  className="h5 text-secondary"
                  style={{ marginBottom: "12px" }}
                >
                  {job.company}
                </h4>
                <p
                  className="text-secondary"
                  style={{ fontSize: "15px", marginBottom: "16px" }}
                >
                  <strong>{job.date}</strong> • {job.location}
                </p>
                <ul
                  className="text-secondary"
                  style={{ fontSize: "15px", lineHeight: "1.8" }}
                >
                  {job.description.map((item, idx) => (
                    <li key={idx} style={{ marginBottom: "8px" }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Row>
        </Jumbotron>
      </Container>
    </section>
  );
};

export default WorkExperience;
