import React from "react";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
  const { title, type, salary, deadline, id, company } = job;

  return (
    <div className="mx-auto">
      <div
        className="card m-2 shadow-lg p-3 mb-5 bg-body rounded "
        style={{ width: "18rem" }}
      >
        <div className={`card-body ${type} `}>
          <h5 className="card-title">
            {title}
          </h5>
          <p className="card-text mb-2">
            Type: {type}
          </p>
          <p className="card-text mb-2">
            Salary: {salary}
          </p>
          <h6 className="card-text mb-2">
            Company: {company}
          </h6>
          <p className="card-text mb-">
            Deadline: {deadline}
          </p>

          <Link to={`/jobs/detail/${id}`} className="btn btn-outline-dark w-100">
            See more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
