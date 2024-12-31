import React from "react";

const FollowUs = () => {

  const handleDiscord=()=>{
    alert("Our Towns is not live yet,it will come soon.")
  }
  return (
    <footer className="footer">
      <p className="footer-text">Follow us on</p>
      <div className="social-links">
        <a
          href="https://x.com/agentgenieai"
          className="social-link"
        >
          <img
            src="xLogo.png"
            className="social-icon"
          />
        </a>
        <a
          onClick={handleDiscord}
          className="social-link"
        >
          <img
            src="townsLogo.png"
            className="social-icon"
          />
        </a>
      </div>
      <div>© 2024 - GENIE AI | All RIGHTS RESERVED |</div>
    </footer>
  );
};

export default FollowUs;
