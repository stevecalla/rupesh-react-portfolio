import projects from "../assets/project.json";
import Card from "../components/Cards";

function ProjectGallery() {
  return (
    <>
      <div className="container-fluid content" id="work">
        <h2 className="mb-5 sectionHeading">Project</h2>

        <div className="row valueProp">
          {projects.map((project) => {
            return <Card project={project} />;
          })}
        </div>
      </div>
    </>
  );
}

export default ProjectGallery;
