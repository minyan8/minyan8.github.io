import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  return (
    <footer className="py-5 text-center bg-secondary border-top border-light">
      <Container>
        {props.children}
        <div className="mt-5 text-secondary" style={{ fontSize: "12px" }}>
          <p className="mb-2">
            Designed and developed by{" "}
            <span className="text-primary fw-bold">Yan Min</span>
          </p>
          <p
            className="mb-0"
            style={{
              fontSize: "13px",
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              fontWeight: "700",
              background:
                "linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 50%, #1a1a1a 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              display: "inline-block",
              backgroundSize: "200% auto",
              animation: "gradient-shift 3s ease infinite",
            }}
          >
            growing at every stage
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
