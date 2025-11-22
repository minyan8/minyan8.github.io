import React from "react";
import Container from "react-bootstrap/Container";
import Typist from "react-typist-component";

const MainBody = React.forwardRef(
  ({ gradient, title, message, icons }, ref) => {
    return (
      <div
        id="home"
        className="d-flex flex-column justify-content-center align-items-center min-vh-100 bg-secondary"
        style={{ paddingTop: "60px" }} // Offset for fixed navbar
      >
        <Container className="text-center">
          <h1
            ref={ref}
            className="display-1 mb-4 text-primary"
            style={{ fontWeight: 700, letterSpacing: "-0.03em" }}
          >
            {title}
          </h1>
          <div
            className="lead mb-5 text-secondary"
            style={{ fontSize: "24px", maxWidth: "700px", margin: "0 auto" }}
          >
            <Typist typingDelay={50}>{message}</Typist>
          </div>

          <div className="d-flex justify-content-center gap-3 mb-5">
            <a
              className="btn-apple"
              href="#aboutme"
              role="button"
              aria-label="Learn more about me"
            >
              More about me
            </a>
          </div>

          <div className="p-4">
            {icons.map((icon, index) => (
              <a
                key={`social-icon-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
                aria-label={`My ${icon.image.split("-")[1]}`}
                className="mx-3 text-secondary social-icon"
                style={{ fontSize: "24px", transition: "all 0.3s ease" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.2)";
                  e.currentTarget.style.color = "var(--text-primary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.color = "";
                }}
              >
                <i className={`${icon.iconType || "fab"} ${icon.image}`} />
              </a>
            ))}
          </div>
        </Container>
      </div>
    );
  }
);

export default MainBody;
