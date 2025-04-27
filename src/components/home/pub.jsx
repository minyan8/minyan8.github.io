import React from 'react';
import { Jumbotron } from './migration';
import {
  Container,
  Row,
  Col,
  Card,
  Button
} from "react-bootstrap";

const Publication = ({ publication }) => {
  return (
    <section className="section">
      <Container>
        <Jumbotron className="bg-white">
          <h2 className="display-4 mb-5 text-center">
            {publication.heading}
          </h2>
          <p className="lead text-center mb-5">
            {publication.message}
          </p>
          <Row>
            {publication.items.map((item, index) => (
              <Col md={6} className="mb-4" key={index}>
                <Card className="h-100 shadow-sm">
                  <Card.Img 
                    variant="top" 
                    src={item.img} 
                    style={{ width: publication.imageSize.width, height: publication.imageSize.height, objectFit: 'cover' }}
                  />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Button 
                      variant="primary" 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      View Paper
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Jumbotron>
      </Container>
    </section>
  );
}

export default Publication;
