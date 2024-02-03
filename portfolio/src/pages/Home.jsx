import NavBar from "../components/Header";
import Contact from "./Contact";
import ProjectGallery from "./ProjectGallery";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#938ba1',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };
  return (
    <div>
      <div className="p-5 mb-2 bg-body-tertiary " style={{ height: "80vh" }}>
        <div className="py-5 d-flex flex-column justify-content-center align-items-center">
          <h1 className="display-5 fw-bold">
            Hello, I'm Rupesh Front End Developer
          </h1>
          <p className="col-md-12 fs-4 d-flex justify-content-center">
            This is my home page, please go to Project Gallery to view my
            project.
          </p>
          <Link
            to="https://docs.google.com/document/d/1gVe8UY1XWWmOqvEdME9ggCC9NrPfDeFkD76jnH1t3S0/edit"
            target=""
          >
            <button style={buttonStyle}>Resume</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
