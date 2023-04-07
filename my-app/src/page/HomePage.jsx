import React from "react";
import Hello from "../components/welcome";
import "../css/home.css"
function HomePage() {
    return (
      <div className="hello-container">
        <Hello />
      </div>
    );
  }
export default HomePage;