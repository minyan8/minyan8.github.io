import React from "react";

const GetInTouch = ({ heading, message, email }) => {
  return (
    <div className="mb-5">
      <h2 className="display-4 pb-3 text-center fw-bold text-primary">{heading}</h2>
      <p className="lead text-center pb-4 text-secondary mx-auto" style={{ maxWidth: '600px' }}>
        {message}
      </p>
      <div className="text-center">
        <a
          className="btn-apple"
          href={`mailto:${email}`}
          style={{ textDecoration: 'none' }}
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default GetInTouch;
