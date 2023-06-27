import React from "react";

import "./App.css";
import { useGetAllJobsQuery } from "./features/apiSlice";
import Home from "./components/Home";

function App() {
  const { data: allJobs, isLoading, isError } = useGetAllJobsQuery();
  //decide what to ender:
  let content = null;
  if (isLoading) {
    content = <div>Loading....</div>;
  }
  if (!isLoading && isError) {
    content = <div>Something went wrong....</div>;
  }
  if (!isLoading && !isError) {
    content = allJobs && <Home allJobs={allJobs} />;
  }
  return (
    <div className="App">
      {content}
    </div>
  );
}

export default App;
