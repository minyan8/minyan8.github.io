import React, { useState, useEffect, useCallback } from "react";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";
import axios from "axios";

const ProjectCard = ({ value, imgPath }) => {
  const {
    name,
    description,
    svn_url,
    stargazers_count,
    languages_url,
    pushed_at,
  } = value;
  return (
    <Card
      className="card shadow-sm h-100 border-0 rounded-4 overflow-hidden hover-lift"
      style={{ transition: "transform 0.2s" }}
    >
      <Card.Body className="p-4 d-flex flex-column">
        <Card.Title as="h5" className="mb-3" style={{ fontWeight: 600 }}>
          {name || <Skeleton />}
        </Card.Title>
        <Card.Text className="text-secondary mb-4 flex-grow-1">
          {!description ? "" : description || <Skeleton count={3} />}
        </Card.Text>

        <div className="mt-auto">
          {svn_url ? <CardButtons svn_url={svn_url} /> : <Skeleton count={2} />}
          <hr className="my-4 opacity-10" />
          {languages_url ? (
            <Language languages_url={languages_url} repo_url={svn_url} />
          ) : (
            <Skeleton count={3} />
          )}
          {value ? (
            <CardFooter
              star_count={stargazers_count}
              repo_url={svn_url}
              pushed_at={pushed_at}
            />
          ) : (
            <Skeleton />
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

const CardButtons = ({ svn_url }) => {
  return (
    <div className="d-grid gap-2 d-md-block">
      <a
        href={`${svn_url}/archive/master.zip`}
        className="btn btn-apple-outline btn-sm me-2"
        style={{ fontSize: "14px", padding: "8px 16px" }}
      >
        <i className="fab fa-github me-2" /> Clone
      </a>
      <a
        href={svn_url}
        target=" _blank"
        className="btn btn-apple-outline btn-sm"
        style={{ fontSize: "14px", padding: "8px 16px" }}
      >
        <i className="fab fa-github me-2" /> Repo
      </a>
    </div>
  );
};

const Language = ({ languages_url, repo_url }) => {
  const [data, setData] = useState([]);

  const handleRequest = useCallback(async () => {
    try {
      const response = await axios.get(languages_url);
      return setData(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }, [languages_url]);

  useEffect(() => {
    handleRequest();
  }, [handleRequest]);

  const array = [];
  let total_count = 0;
  for (let index in data) {
    array.push(index);
    total_count += data[index];
  }

  return (
    <div className="pb-3">
      <small
        className="text-secondary text-uppercase fw-bold"
        style={{ fontSize: "11px", letterSpacing: "1px" }}
      >
        Languages
      </small>
      <div className="mt-2">
        {array.length
          ? array.map((language) => (
              <a
                key={language}
                className="text-decoration-none me-2 mb-2 d-inline-block"
                href={repo_url + `/search?l=${language}`}
                target=" _blank"
                rel="noopener noreferrer"
              >
                <span className="badge bg-secondary text-dark bg-opacity-10 border border-secondary border-opacity-10 rounded-pill px-3 py-2 fw-normal">
                  {language}:{" "}
                  {Math.trunc((data[language] / total_count) * 1000) / 10} %
                </span>
              </a>
            ))
          : "code yet to be deployed."}
      </div>
    </div>
  );
};

const CardFooter = ({ star_count, repo_url, pushed_at }) => {
  const [updated_at, setUpdated_at] = useState("0 mints");

  const handleUpdatetime = useCallback(() => {
    const date = new Date(pushed_at);
    const nowdate = new Date();
    const diff = nowdate.getTime() - date.getTime();
    const hours = Math.trunc(diff / 1000 / 60 / 60);

    if (hours < 24) {
      if (hours < 1) return setUpdated_at("just now");
      let measurement = hours === 1 ? "hour" : "hours";
      return setUpdated_at(`${hours.toString()} ${measurement} ago`);
    } else {
      const options = { day: "numeric", month: "long", year: "numeric" };
      const time = new Intl.DateTimeFormat("en-US", options).format(date);
      return setUpdated_at(`on ${time}`);
    }
  }, [pushed_at]);

  useEffect(() => {
    handleUpdatetime();
  }, [handleUpdatetime]);

  return (
    <div className="d-flex justify-content-between align-items-center">
      <a
        href={repo_url + "/stargazers"}
        target=" _blank"
        className="text-secondary text-decoration-none"
      >
        <span className="d-flex align-items-center">
          <i className="fab fa-github me-2" />
          <span className="me-1">Stars</span>
          <span className="badge bg-dark text-white rounded-pill">
            {star_count}
          </span>
        </span>
      </a>
      <small className="text-muted">Updated {updated_at}</small>
    </div>
  );
};

export default ProjectCard;
