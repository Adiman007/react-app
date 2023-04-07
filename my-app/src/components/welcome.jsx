import React from "react";
import "../css/welcome.css"

function Hello() {
  return (
    <div className="welcome-banner">
      <div>
      <h1 className="welcome-banner-title">Welcome to my app</h1>
      
      <p className="welcome-banner-text">
        This is a simple app that uses React and pokeapi.co
      </p>
      <p className="welcome-banner-text">
        Click on the links above to navigate the site
      </p>
      </div>
      <p className="welcome-banner-text">
        You can see my other projects on{" "}
        <a
          href="https://github.com/Adiman007"
          target="_blank"
          rel="noopener noreferrer"
          className="welcome-banner-link"
        >
          GitHub <img src="https://avatars.githubusercontent.com/u/80261099?v=4" alt="GitHub Logo" />
        </a>
      </p>
    </div>
  );
}

export default Hello;