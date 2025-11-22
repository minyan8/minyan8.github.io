import React from "react";
import Container from "react-bootstrap/Container";

const Skills = React.forwardRef(
  ({ heading, hardSkills, softSkills, languages }, ref) => {
    return (
      <div ref={ref} id="skills" className="py-5 bg-white">
        <Container>
          <div className="text-center mb-5">
            <span className="text-eyebrow">Expertise</span>
            <h2 className="display-3 fw-bold text-primary">{heading}</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row">
                {/* Technical Skills */}
                <div className="col-md-6 mb-5 px-4 px-md-3">
                  <h3 className="h4 fw-bold text-primary mb-4">
                    Technical Skills
                  </h3>
                  <p
                    className="text-secondary"
                    style={{ fontSize: "clamp(15px, 2.5vw, 17px)", lineHeight: "1.8" }}
                  >
                    {hardSkills.map((skill, index) => (
                      <span key={`hard-skill-${index}`}>
                        {skill.name}
                        {index < hardSkills.length - 1 && (
                          <span className="text-secondary opacity-50"> • </span>
                        )}
                      </span>
                    ))}
                  </p>
                </div>

                {/* Soft Skills */}
                <div className="col-md-6 mb-5 px-4 px-md-3">
                  <h3 className="h4 fw-bold text-primary mb-4">Soft Skills</h3>
                  <p
                    className="text-secondary"
                    style={{ fontSize: "clamp(15px, 2.5vw, 17px)", lineHeight: "1.8" }}
                  >
                    {softSkills.map((skill, index) => (
                      <span key={`soft-skill-${index}`}>
                        {skill.name}
                        {index < softSkills.length - 1 && (
                          <span className="text-secondary opacity-50"> • </span>
                        )}
                      </span>
                    ))}
                  </p>
                </div>

                {/* Languages */}
                <div className="col-md-6 mb-5 px-4 px-md-3">
                  <h3 className="h4 fw-bold text-primary mb-4">Languages</h3>
                  <p
                    className="text-secondary"
                    style={{ fontSize: "clamp(15px, 2.5vw, 17px)", lineHeight: "1.8" }}
                  >
                    {languages &&
                      languages.map((skill, index) => (
                        <span key={`language-${index}`}>
                          {skill.name}
                          {index < languages.length - 1 && (
                            <span className="text-secondary opacity-50">
                              {" "}
                              •{" "}
                            </span>
                          )}
                        </span>
                      ))}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
);

export default Skills;
