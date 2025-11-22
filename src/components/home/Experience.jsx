import React from "react";
import ExperienceCard from "./ExperienceCard";
import { Container, Row } from "react-bootstrap";

const Experience = ({ experiences }) => {
  return (
    <section className="section py-5 bg-secondary">
      <Container>
        <div className="py-5">
          <div className="text-center mb-5">
            <span className="text-eyebrow">Background</span>
            <h2 className="display-3 mb-4 fw-bold text-primary">
              {experiences.heading}
            </h2>
          </div>
          <Row className="justify-content-center">
            {experiences.data.map((data, index) => {
              return <ExperienceCard key={index} data={data} />;
            })}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Experience;
