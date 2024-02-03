function Cards(props) {
  return (
    // won't effect  css
    <div className="col-4 p-4 ">
      <div className="card">
        <div className="container-fluid d-flex flex-column align-items-center" style={{ objectFit:"cover"}} >
          <h5 className="card-title m-2 ">{props.project.title}</h5>
          <img src={props.project.image} className="card-img-top  " style={{border:"solid 2px", height:"300px", width:"250px"}} alt="..." />
        </div>
        <div className="card-body ">
          <a href={props.project.deployed} className="btn btn-primary container">
            View
          </a>

        </div>
      </div>
    </div>
  );
}

export default Cards;
