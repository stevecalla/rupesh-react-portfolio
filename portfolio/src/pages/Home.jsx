import NavBar from "../components/Header";
import Contact from "./Contact";
import ProjectGallery from "./ProjectGallery";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
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
          <button>Resume</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
