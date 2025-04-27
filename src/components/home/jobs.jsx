import React from "react";
import { jobs } from "../../editable-stuff/config";
import { Container, Row } from "react-bootstrap";
import { Jumbotron } from "./migration";

const WorkExperience = () => {
  if (!jobs.show) {
    return null; // If jobs.show is false, don't render
  }

  return (
    <section className="section">
      <Container>
        <Jumbotron className="bg-white">
          <h2 className="display-4 mb-5 text-center">
            {jobs.heading}
          </h2>
          <Row className="justify-content-center">
            {jobs.data.map((job, index) => (
              <div key={index} className="mb-5" style={{ maxWidth: "700px", width: "100%" }}>
                <h3 style={{ marginBottom: "5px" }}>
                  {job.title} - {job.company}
                </h3>
                <p style={{ fontStyle: "italic", marginBottom: "10px" }}>
                  <strong>{job.date}</strong> | {job.location}
                </p>
                <ul>
                  {job.description.map((item, idx) => (
                    <li key={idx} style={{ marginBottom: "5px" }}>
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
