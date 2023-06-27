import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDeleteJobMutation } from "../../features/apiSlice";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
const DetailView = ({ detail }) => {
  const navigate = useNavigate();
  const { title, company, salary, id, deadline, type } = detail;
  const [deleteJob, { isLoading, isError, isSuccess }] = useDeleteJobMutation();
  //handle Delete:
  const handleDelete = e => {
    e.preventDefault();
    deleteJob(id);
  };
  useEffect(
    () => {
      {
        isSuccess && navigate("/");
      }
    },
    [isSuccess]
  );
  return (
    <div className="">
      <nav className="navbar bg-light ">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            IT JOB PORTAL
          </Link>
          <form className="d-flex" role="search">
            <Link to={`/jobs/add`} className="btn btn-success">
              Post Job
            </Link>
            {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
          </form>
        </div>
      </nav>
      <div
        className="card m-2 shadow-lg p-3 mb-5 bg-body rounded mx-auto mt-5"
        style={{ width: "18rem" }}
      >
        <div className={`card-body ${type}`}>
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

          <div className="d-flex mt-5">
            <Link to={`/jobs/update/${id}`} className="btn btn-outline-dark font-2xl  w-100 m-2">
              <AiFillEdit />
            </Link>
            <button className="btn btn-outline-dark w-100 m-2" onClick={handleDelete}>
              <RiDeleteBin5Line />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailView;
