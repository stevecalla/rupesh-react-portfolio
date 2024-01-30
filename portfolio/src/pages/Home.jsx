
import NavBar from "../components/NavBar";
import Contact from "./Contact";
import ProjectGallery from "./ProjectGallery";

function Home() {
  return (
    <div>
      <div className="p-5 mb-2 bg-body-tertiary welcomeBackground">
        <div className="container-fluid py-5 jumboCopy">
          <h1 className="display-5 fw-bold">Hello, I'm Rupesh Front End Developer</h1>
          <p className="col-md-12 fs-4">
            This is my home page, please go to Project Gallery to view my project.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
