import React from "react";

const GetInTouch = ({ heading, message, email }) => {
  return (
    <div className="mb-5">
      <div className="text-center mb-5">
        <span className="text-eyebrow">Contact</span>
        <h2 className="display-3 mb-4 fw-bold text-primary">{heading}</h2>
      </div>
      <p
        className="lead text-center pb-4 text-secondary mx-auto"
        style={{ maxWidth: "600px", fontSize: "19px" }}
      >
        {message}
      </p>
      <div className="text-center">
        <a
          className="btn-apple"
          href={`mailto:${email}`}
          style={{ textDecoration: "none" }}
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default GetInTouch;
