import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Publication = ({ publication }) => {
  return (
    <div id="publication" className="py-5 bg-white">
      <Container className="py-5">
        <div className="text-center mb-5">
          <span className="text-eyebrow">Research</span>
          <h2 className="display-3 fw-bold text-primary">
            {publication.heading}
          </h2>
          <p
            className="lead text-secondary mx-auto mt-3"
            style={{ maxWidth: "700px" }}
          >
            {publication.message}
          </p>
        </div>
        <Row className="g-4 justify-content-center">
          {publication.items.map((item, index) => (
            <Col
              md={6}
              lg={6}
              className="d-flex align-items-stretch"
              key={index}
            >
              <Card
                className="h-100 border-0 shadow-sm rounded-4 overflow-hidden hover-lift"
                style={{ transition: "transform 0.2s" }}
              >
                <div
                  className="overflow-hidden bg-secondary"
                  style={{
                    minHeight: "240px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={item.img}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "contain",
                      transition: "transform 0.3s",
                    }}
                    className="hover-zoom"
                  />
                </div>
                <Card.Body className="p-4 d-flex flex-column">
                  <Card.Title className="h5 fw-bold mb-3">
                    {item.title}
                  </Card.Title>
                  <Card.Text
                    className="text-secondary mb-4 flex-grow-1"
                    style={{ fontSize: "15px" }}
                  >
                    {item.description}
                  </Card.Text>
                  <div className="mt-auto">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-apple-outline btn-sm"
                    >
                      Read Paper
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Publication;
