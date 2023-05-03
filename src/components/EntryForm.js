import "./EntryForm.css";
import { useState } from "react";

function EntryForm() {
  const [formData, setFormData] = useState({
    Vehicle: "",
    Platenumber: "",
    entry: "",
  });

  const [formError, setformError] = useState({});

  const onChangeHandler = (event) => {
    console.log(event);
    setFormData(() => ({
      ...formData,
      [event.target.name]: event.target.value,
    }));
  };

  const validateForm = () => {
    let err = {};

    if (formData.Vehicle === "") {
      err.Vehicle = "Vehicle is required!";
    }
    if (formData.Platenumber === "") {
      err.Platenumber = "Plate number is required!";
    }
    if (formData.entry === "") {
      err.entry = "Time of entry is required";
    }

    setformError({ ...err });

    return Object.keys(...err).length < 1;
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);
    let isValid = validateForm();

    if (isValid) {
      alert("Submitted");
    } else {
      alert("In valid Form");
    }
    console.log(isValid);
  };
  return (
    <div className="EntryForm">
      <div className="Header">
        <h1>Delivery Entry Form</h1>
      </div>
      <form className="form" onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="Vehicle" className="form-label">
            Types of Vehicle:
          </label>
          <select
            className="form-select"
            name="vehicle"
            onChange={onChangeHandler}
          >
            <option value=""></option>
            <option value="Van">Van</option>
            <option value="truck">Truck</option>
            <option value="Motorcycle">Motorcycle</option>
            <option value="suv">SUV</option>
            <option value="Others">Others</option>
          </select>
          <span className="non-valid">{formError.Vehicle}</span>
        </div>
        <div className="form-group">
          <label htmlFor="Platenumber" className="form-label">
            Plate Number:
          </label>
          <input type="Form-control" name="text" onChange={onChangeHandler} />
          <span className="non-valid">{formError.Platenumber}</span>
        </div>
        <div className="form-group">
          <label htmlFor="entry" className="form-label">
            Time of Entry:
          </label>
          <input type="time" name="text" onChange={onChangeHandler} />
          <span className="non-valid">{formError.entry}</span>
        </div>
        <div className="form-group">
          <button className="btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default EntryForm;
