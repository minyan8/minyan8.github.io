import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { mainBody, repos, about, skills, jobs, publication } from "../editable-stuff/config.js";
import { NavLink } from "./home/migration";

const Navigation = React.forwardRef((props, ref) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      ref={ref}
      className={`fixed-top transition-all ${isScrolled ? "glass-panel py-2" : "bg-transparent py-4"}`}
      expand="lg"
      style={{ transition: "all 0.3s ease" }}
    >
      <Container>
        <Navbar.Brand className="navbar-brand" href={process.env.PUBLIC_URL + "/#home"} style={{ fontWeight: 500, fontSize: '1.1rem', letterSpacing: '-0.01em' }}>
          {mainBody.firstName}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler border-0" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {about.show && (
              <NavLink href={process.env.PUBLIC_URL + "/#aboutme"}>About</NavLink>
            )}
            {jobs.show && (
              <NavLink href={process.env.PUBLIC_URL + "/#workexperience"}>Work</NavLink>
            )}
            {publication.show && (
              <NavLink href={process.env.PUBLIC_URL + "/#publication"}>Publication</NavLink>
            )}
            {repos.show && (
              <NavLink href={process.env.PUBLIC_URL + "/#projects"}>Projects</NavLink>
            )}
            {skills.show && (
              <NavLink href={process.env.PUBLIC_URL + "/#skills"}>Skills</NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
});

export default Navigation;
