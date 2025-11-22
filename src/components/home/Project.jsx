import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProjectCard from "./ProjectCard";
import axios from "axios";
import { repos } from "../../editable-stuff/config.js";

const dummyProject = {
  name: null,
  description: null,
  svn_url: null,
  stargazers_count: null,
  languages_url: null,
  pushed_at: null,
};
const API = "https://api.github.com";

const Project = ({ heading, username, length, specfic }) => {
  const allReposAPI = `${API}/users/${username}/repos?sort=updated&direction=desc`;
  const specficReposAPI = `${API}/repos/${username}`;
  const dummyProjectsArr = new Array(length + specfic.length).fill(
    dummyProject
  );

  const [projectsArray, setProjectsArray] = useState([]);

  const fetchRepos = useCallback(async () => {
    let repoList = [];
    try {
      const response = await axios.get(allReposAPI);
      repoList = [...response.data.slice(0, length)];
      try {
        for (let repoName of specfic) {
          const response = await axios.get(`${specficReposAPI}/${repoName}`);
          repoList.push(response.data);
        }
      } catch (error) {
        console.error(error.message);
      }
      setProjectsArray(repoList);
    } catch (error) {
      console.error(error.message);
    }
  }, [allReposAPI, length, specfic, specficReposAPI]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  const getProjectImage = (repoName) => {
    if (!repos.projectImages || !Array.isArray(repos.projectImages)) {
      return null;
    }
    const projectImage = repos.projectImages.find(
      (img) => img.repoName === repoName
    );
    return projectImage ? projectImage.image : null;
  };

  return (
    <div id="projects" className="py-5 bg-secondary">
      <Container className="py-5">
        <div className="text-center mb-5">
          <span className="text-eyebrow">Portfolio</span>
          <h2 className="display-3 fw-bold text-primary">{heading}</h2>
        </div>
        <Row className="g-4 justify-content-center">
          {projectsArray.length
            ? projectsArray.map((project, index) => (
                <Col
                  key={`project-card-${index}`}
                  md={6}
                  lg={6}
                  className="d-flex align-items-stretch"
                >
                  <ProjectCard
                    value={project}
                    imgPath={getProjectImage(project.name)}
                  />
                </Col>
              ))
            : dummyProjectsArr.map((project, index) => (
                <Col
                  key={`dummy-${index}`}
                  md={6}
                  lg={6}
                  className="d-flex align-items-stretch"
                >
                  <ProjectCard value={project} />
                </Col>
              ))}
        </Row>
        <div className="text-center mt-5">
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noreferrer"
            className="btn-apple-outline"
          >
            View All Projects <i className="fas fa-arrow-right ms-2"></i>
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Project;
