function About() {
  return (
    <>
      <div className="p-5 mb-2 bg-body-tertiary" style={{height:"80vh"}}>
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold d-flex justify-content-center">Welcome to My Portfolio!</h1>
          <p className="col-md-12 fs-5 p-4" style={{textAlign:"center"}}>
            Hello! everyone.
            <br />
            Welcome to my page! This page was created using React. If you
            want to view my work, then please click on the Project Gallery.
            <br />
            Please use the contact tab to get in touch with me if you appreciate
            my work.
            <br />
            Thank you!
          </p>
        </div>
      </div>
    </>
  );
}
export default About;
