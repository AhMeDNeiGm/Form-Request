import React, { useState } from "react";
import Model from "./Model";

import "./FormStyle.css";

const Form = () => {
  const [showModal, setShowModal] = useState(false);
  const [formInputs, setFormInputs] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salaryRange: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowModal(true);
  };

  const handleDivClick = () => {
    showModal ? setShowModal(false) : true;
  };

  const btnDisable =
    formInputs.name == "" ||
    formInputs.age == "" ||
    formInputs.phoneNumber == "" ||
    formInputs.isEmployee == false ||
    formInputs.salaryRange == "";

  return (
    <>
      <div onClick={handleDivClick}>
        <form className="form">
          <h1>Form Requesting</h1>
          <hr className="hrStyle" />
          <label> Name: </label>
          <input
            type="text"
            value={formInputs.name}
            onChange={(e) => {
              setFormInputs({ ...formInputs, name: e.target.value });
            }}
          />
          <label> Phone Number: </label>
          <input
            type="text"
            value={formInputs.phoneNumber}
            onChange={(e) => {
              setFormInputs({ ...formInputs, phoneNumber: e.target.value });
            }}
          />
          <label> Age: </label>
          <input
            type="text"
            value={formInputs.age}
            onChange={(e) => {
              setFormInputs({ ...formInputs, age: e.target.value });
            }}
          />
          <div style={{ marginTop: "10px" }}>
            <label> Are you an Employee ?</label>
            <input
              type="checkbox"
              checked={formInputs.isEmployee}
              onChange={(e) => {
                setFormInputs({ ...formInputs, isEmployee: e.target.checked });
              }}
            />
          </div>
          <div style={{ marginTop: "10px" }}>
            <label> Salary: </label>
            <select
              value={formInputs.salaryRange}
              onChange={(e) => {
                setFormInputs({ ...formInputs, salaryRange: e.target.value });
              }}
            >
              <option>1000$</option>
              <option>1500$</option>
              <option>2000$</option>
            </select>
          </div>

          <button
            className={btnDisable ? "disabled" : "btn"}
            disabled={btnDisable}
            onClick={handleSubmit}
          >
            Submit
          </button>
          <Model isVisible={showModal} />
        </form>
      </div>
    </>
  );
};

export default Form;
