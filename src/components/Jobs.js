import React from "react";
import Job from "./Job";

const Jobs = ({ jobs }) => {
  console.log(jobs);
  return (
    <div className="container  d-flex flex-wrap ">
      {jobs && jobs.map(job => <Job key={job.id} job={job} />)}
    </div>
  );
};

export default Jobs;
