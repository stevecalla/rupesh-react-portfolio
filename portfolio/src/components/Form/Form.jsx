import { useState } from "react";
import "./Form.css";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Form successfully submitted, Thank you.`);

    setSubmitted(true);

    setName("");
    setEmail("");
    setMessage("");
  }
  return (
    <form onSubmit={handleSubmit} className="container">
      <div className="mb-3 ">
        <h3 className=" fs-1 font-monospace text-center m-3">Contact Me</h3>
        <label htmlFor="exampleInputEmail1" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputName"
          aria-describedby="nameHelp"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          required="required"
          id="exampleInputEmail"
          placeholder="email@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputMessage" className="form-label">
          Message
        </label>
        <textarea
          type="text"
          className="form-control"
          required="required"
          id="exampleInputMessage"
          placeholder="Enter you message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <button type="submit" className="btn d-grid  col-2 mx-auto m-3 button">
        Submit
      </button>
    </form>
  );
}

export default Form;
