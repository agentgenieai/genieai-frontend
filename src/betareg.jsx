import React, { useState, useEffect } from "react";
import gsap from "gsap";

const Wlform = () => {
  const [data, setData] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleForm = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`https://genieai-backend.vercel.app`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.text();
      console.log(result);
      setFormSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (formSubmitted) {
      console.log("Form submitted state is true");
      gsap.to(".form", { opacity: 0, duration: 1, y: -50 });
      gsap.fromTo(
        ".successMessage",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay: 0.5 }
      );
    }
  }, [formSubmitted]);

  return (
    <div className="formContainer">
      <div className="leftForm" id="getWl">
        {formSubmitted ? (
          <div className="successMessage">Your form is submitted</div>
        ) : (
          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="name">Enter your name</label>
            <input required
              placeholder="Your name"
              name="name"
              id="name"
              onChange={handleForm}
            />
            <label htmlFor="tweetlink">Follow our X and enter your tweet link</label>
            <a href="https://x.com/agentgenieai/status/1874827561169211425">   (X link)</a>
            <input required
              placeholder="Tweet link"
              name="tweetlink"
              onChange={handleForm}
            />
            <label htmlFor="evmaddress">Enter your EVM address</label>
            <input required
              placeholder="EVM address"
              name="evmaddress"
              onChange={handleForm}
            />
            <input
              type="submit"
              className="button"
              disabled={isLoading} 
            />
            {isLoading && (
              <div className="loading">
                <div className="spinner"></div>
                <span>Submitting...</span>
              </div>
            )}
          </form>
        )}
      </div>
      <div className="rightForm">
        <div>
          <div>Apply WL for Genesis Collection</div>
          <ol>
            <li>
              <span>NFT Holder</span> will be able to try Beta Version of AI Agent.
            </li>
            <li>
              <span>NFT holder</span> will get airdrop reward from Protocol in future.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Wlform;
