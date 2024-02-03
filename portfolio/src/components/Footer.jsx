// REACT FONTAWESOME IMPORTS
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/rrana5106"
    },
    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/rupesh-rana-magar-022a0a262/"
    }
  ]
  return (
    <>
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ height: "15vh" }}
      >
        {icons.map(icon => (
          <a href={icon.link} key={icon.name} target= "_blank" rel= "noopener noreferer"><i className={icon.name}></i></a>
        ))}
        <p>&copy; Your Website 2023. Coded by yours truyl!</p>
        
      </div>
    </>
  );
}

export default Footer;
