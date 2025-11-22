import React from "react";
import axios from "axios";

const pictureLinkRegex = new RegExp(
  /[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
);

const AboutMe = ({ heading, message, link, imgSize, resume }) => {
  const [profilePicUrl, setProfilePicUrl] = React.useState("");
  const [showPic, setShowPic] = React.useState(Boolean(link));

  React.useEffect(() => {
    const handleRequest = async () => {
      const instaLink = "https://www.instagram.com/";
      const instaQuery = "/?__a=1";
      try {
        const response = await axios.get(instaLink + link + instaQuery);
        setProfilePicUrl(response.data.graphql.user.profile_pic_url_hd);
      } catch (error) {
        setShowPic(false);
        console.error(error.message);
      }
    };

    if (link && !pictureLinkRegex.test(link)) {
      handleRequest();
    } else {
      setProfilePicUrl(link);
    }
  }, [link]);

  return (
    <div id="aboutme" className="py-5 bg-white">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-2 mb-5 mb-lg-0 text-center">
            {showPic && (
              <div className="position-relative d-inline-block">
                <div
                  className="position-absolute top-0 start-0 w-100 h-100 bg-secondary rounded-circle"
                  style={{ transform: "scale(0.95)", zIndex: -1 }}
                ></div>
                <img
                  className="rounded-circle shadow-lg"
                  src={profilePicUrl}
                  alt="profile"
                  style={{
                    width: "min(350px, 85vw)",
                    height: "min(350px, 85vw)",
                    objectFit: "cover",
                  }}
                />
              </div>
            )}
          </div>
          <div className="col-lg-6 order-lg-1 px-4">
            <span className="text-eyebrow">About Me</span>
            <h2 className="display-3 mb-4 fw-bold text-primary" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>{heading}</h2>
            <p
              className="lead mb-5"
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                fontWeight: 400,
                lineHeight: "1.8",
                letterSpacing: "-0.01em",
                color: "#6e6e73",
              }}
            >
              {message}
            </p>
            {resume && (
              <a
                className="btn-apple"
                href={resume}
                target="_blank"
                rel="noreferrer noopener"
                role="button"
                aria-label="Resume/CV"
              >
                View Resume
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
