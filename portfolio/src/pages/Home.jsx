import Header from "../components/Header";
import Contact from "./Contact";
import ProjectGallery from "./ProjectGallery";

function Home() {
  return (
    <div>
      

      <div className="p-5 mb-2 bg-body-tertiary welcomeBackground">
        <div className="container-fluid py-5 jumboCopy">
          <h1 className="display-5 fw-bold">Welcome to My Portfolio!</h1>
          <p className="col-md-12 fs-4">
            Hello! everyone.
            <br />
            Welcome to my page! This page was created using Bootstrap 5. If you
            want to view my work, then please click on the work tab.
            <br />
            Please use the contact tab to get in touch with me if you appreciate
            my work.
            <br />
            Thank you!
          </p>
        </div>
      </div>

      <ProjectGallery />
      <Contact/>
    </div>
  );
}

export default Home;
