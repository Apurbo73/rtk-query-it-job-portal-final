import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUpdateJobMutation } from "../../features/apiSlice";
import { ToastContainer, toast } from "react-toastify";

const UpdateForm = ({ singleJob }) => {
  const navigate = useNavigate();
  const {
    id,
    title: initialTitle,
    type: initialType,
    salary: initialSalary,
    company: initialCompany,
    deadline: initialDeadline
  } = singleJob;

  const [title, setTitle] = useState(initialTitle);
  const [type, setType] = useState(initialType);
  const [salary, setSalary] = useState(initialSalary);
  const [company, setCompany] = useState(initialCompany);
  const [deadline, setDeadline] = useState(initialDeadline);

  const [
    updateJob,
    { isLoading, isError, error, isSuccess }
  ] = useUpdateJobMutation();
  //handle Submit:
  const handleSubmit = e => {
    e.preventDefault();
    updateJob({
      id,
      data: {
        title,
        type,
        salary,
        company,
        deadline
      }
    });
    // toast(`New Job ${title} Is Posted`);
    resetForm();
  };

  useEffect(() => {
    {
      isSuccess && navigate("/");
    }
  }, [isSuccess]);
  // reset form :
  const resetForm = () => {
    setTitle("");
    setSalary("");
    setCompany("");
    setType("");
    setDeadline("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ToastContainer />
        <div className="mb-3">
          <input
            type="text"
            value={title}
            required
            onChange={e => {
              setTitle(e.target.value);
            }}
            placeholder="Enter job title"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <input
            placeholder="Enter type"
            required
            value={type}
            onChange={e => {
              setType(e.target.value);
            }}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            required
            value={salary}
            onChange={e => {
              setSalary(e.target.value);
            }}
            placeholder="Enter salary"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            value={company}
            required
            onChange={e => {
              setCompany(e.target.value);
            }}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter company name"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            value={deadline}
            required
            onChange={e => {
              setDeadline(e.target.value);
            }}
            placeholder="Enter deadline"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <button type="submit" className="btn btn-dark mb-2 w-100">
          Submit
        </button>
      </form>
      <Link to="/" type="submit" className="btn btn-warning w-100">
        Back to home
      </Link>
    </div>
  );
};

export default UpdateForm;
