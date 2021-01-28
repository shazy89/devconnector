import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addExperience } from "../../actions/profile";

const AddExperience = ({ addExperience, history }) => {
  const [formData, setFormData] = useState({
    company: "",
    title: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });
  const [toDateDisabled, togleDisabled] = useState(false);

  const { company, title, location, from, to, current, description } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1 class="large text-primary">Add An Experience</h1>
      <p class="lead">
        <i class="fas fa-code-branch"></i> Add any developer/programming
        positions that you have had in the past
      </p>
      <small>* = required field</small>
      <form
        class="form"
        onSubmit={(e) => {
          e.preventDefault();
          addExperience(formData, history);
        }}
      >
        <div class="form-group">
          <input
            onChange={onChange}
            value={title}
            type="text"
            placeholder="* Job Title"
            name="title"
            required
          />
        </div>
        <div class="form-group">
          <input
            onChange={onChange}
            value={company}
            type="text"
            placeholder="* Company"
            name="company"
            required
          />
        </div>
        <div class="form-group">
          <input
            onChange={onChange}
            value={location}
            type="text"
            placeholder="Location"
            name="location"
          />
        </div>
        <div class="form-group">
          <h4>From Date</h4>
          <input onChange={onChange} value={from} type="date" name="from" />
        </div>
        <div class="form-group">
          <p>
            <input
              type="checkbox"
              name="current"
              onChange={(e) => {
                setFormData({ ...formData, current: !current });
                togleDisabled(!toDateDisabled);
              }}
              value={current}
              checked={current}
            />{" "}
            Current Job
          </p>
        </div>
        <div class="form-group">
          <h4>To Date</h4>
          <input
            onChange={onChange}
            value={to}
            disabled={toDateDisabled ? "disabled" : ""}
            type="date"
            name="to"
          />
        </div>
        <div class="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Job Description"
            onChange={onChange}
            value={description}
          ></textarea>
        </div>
        <input type="submit" class="btn btn-primary my-1" />
        <a class="btn btn-light my-1" href="dashboard.html">
          Go Back
        </a>
      </form>
    </Fragment>
  );
};

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
};

export default connect(null, { addExperience })(AddExperience);
