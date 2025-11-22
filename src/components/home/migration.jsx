import React from 'react';
import Nav from "react-bootstrap/Nav";

export const Jumbotron = (props) => {
  const bgStyle = props.style ?? { backgroundColor: "#e9ecef" };
  return (
    <div id={props.id} className={`py-3 ${props.className}`} style={bgStyle}>
      <div className="container py-5">
        {props.children}
      </div>
    </div>
  );
}

export const NavLink = (props) => {
  return (
    <Nav.Link
      href={props.href}
      target={props.target}
      rel={props.rel}
      style={{ fontWeight: 400, fontSize: '0.95rem', letterSpacing: '-0.01em', padding: '0.5rem 1rem' }}
    >
      <span className={`nav-item ${props.className}`}>
        {props.children}
      </span>
    </Nav.Link>
  );
}
