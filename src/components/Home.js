import React, { useState } from "react";
import Search from "./Search";
import Jobs from "./Jobs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
const Home = ({ allJobs }) => {
  const [allJobsData, setAllJobs] = useState(allJobs);
  const [filterJobs, setFilterJobs] = useState(allJobs);
  //   console.log(filterJobs);
  //handle search:
  const handleSearch = value => {
    // toast(value);
    let text = value.toLowerCase();
    const SearchedJobs = allJobsData.filter(data => {
      // searching by name:
      const newData = data.title.toLowerCase();
      return newData.startsWith(text);
    });
    setFilterJobs(SearchedJobs);
  };
  // toast("Same category jobs are in same color");
  // control filter menu item show:
  const [show, setShow] = useState(false);
  // handle Menu Show:
  // const handleMenuShow = () => {
  //   setShow(!show);
  // };
  return (
    <div>
      <nav className="navbar bg-light fixed-top">
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

      <div>
        <div />

        <Search onSearch={handleSearch} />
        {/* <div onClick={handleMenuShow}>
          <button>Select category</button>
          {show &&
            <div>
              {show &&
                <div>
                  <p>okay</p>
                  <p>okay</p>
                  <p>okay</p>
                </div>}
            </div>}
        </div> */}
      </div>
      {allJobsData && <Jobs jobs={filterJobs} />}
    </div>
  );
};

export default Home;
