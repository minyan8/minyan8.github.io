import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  return (
    <footer className="mt-auto py-5 text-center bg-secondary border-top border-light">
      <Container>
        {props.children}
        <div className="mt-5 text-secondary" style={{ fontSize: '12px' }}>
          <p className="mb-2">
            Designed and developed by <span className="text-primary fw-bold">Yan Min</span>
          </p>
          <p className="mb-0 opacity-75">
            Built with React & Bootstrap. Precision. Passion. Progress.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
