import "./Cards.css";

function Cards(props) {
  return (
    // won't effect  css
    <div className="col-4 p-4 ">
      <div className="card ">
        <div
          className="container-fluid d-flex flex-column align-items-center "
          style={{ objectFit: "cover", background: "#81b29a" }}
        >
          <h5 className="card-title m-3 ">{props.project.title}</h5>
          <img
            src={props.project.image}
            className="card-img-top  "
            style={{ border: "solid 5px", height: "275px", width: "250px" }}
            alt="..."
          />
        </div>
        <div
          className="container text-center p-2"
          style={{ objectFit: "cover", background: "#81b29a" }}
        >
          <a
            href={props.project.deployed}
            className="btn text-center"
            style={{ backgroundColor: "#3d405b", color: "#f4f1de" }}
          >
            View
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cards;
