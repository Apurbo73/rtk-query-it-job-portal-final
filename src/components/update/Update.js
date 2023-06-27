import React from "react";
import UpdateForm from "./UpdateForm";
import { useSeeDetailQuery } from "../../features/apiSlice";
import { useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const { data: singleJob, isLoading, isError, error } = useSeeDetailQuery(id);
  //decide what to render:
  let content = null;
  if (isLoading) {
    content = <div>Loadng...</div>;
  }
  if (!isLoading && isError) {
    content = <div>Something went wrong...</div>;
  }
  if (!isLoading && !isError && singleJob.id) {
    content = (
      <div>
        <UpdateForm singleJob={singleJob} />
      </div>
    );
  }
  return (
    <div className="mt-5  w-50 mx-auto">
      <h4 className="text-center">Update Job Detail</h4>
      {content}
    </div>
  );
};

export default Update;
