import React from 'react';
import { Col, Card } from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="6" className="mb-4">
      <Card className="h-100 shadow-sm border-0 rounded-4 overflow-hidden hover-lift" style={{ transition: 'transform 0.2s' }}>
        <Card.Body className="p-5 text-center d-flex flex-column align-items-center justify-content-center">
          <div className="mb-4 p-3 rounded-3 bg-white shadow-sm" style={{ width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              className="img-fluid"
              src={data.companylogo}
              alt={data.role}
              style={{ maxHeight: '80px', maxWidth: '80px' }}
            />
          </div>
          <h3 className="h4 fw-bold mb-2">{data.role}</h3>
          <p className="lead text-secondary mb-0">
            {data.date}
          </p>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ExperienceCard;