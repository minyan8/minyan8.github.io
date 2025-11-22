import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";

const Leadership = ({ heading, message, img, imageSize }) => {
  return (
    <div id="leadership" className="py-5 bg-white">
      <Container className="py-5">
        <h2 className="display-4 pb-5 text-center fw-bold text-primary">{heading}</h2>
        <div className="row align-items-center">
          <div className="col-md-5 mb-4 mb-md-0">
            <p className="lead text-secondary">{message}</p>
          </div>
          <div className="col-md-7">
            <Carousel className="shadow-lg rounded-4 overflow-hidden">
              {img.map((value, index) => {
                return (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={value.img}
                      alt="First slide"
                      width={imageSize.width}
                      height={imageSize.height}
                      style={{ objectFit: 'cover' }}
                    />
                    <Carousel.Caption className="glass-panel rounded-3 mb-4 mx-5 p-3 text-dark">
                      <h3 className="fw-bold">{value.label}</h3>
                      <p className="mb-0">
                        {value.paragraph}
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Leadership;
