import React from "react";
import DetailView from "./DetailView";
import { useSeeDetailQuery } from "../../features/apiSlice";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const { data: detail, isLoading, isError } = useSeeDetailQuery(id);
  // decide what to render:
  let content = null;

  if (isLoading) {
    content = <div>Loading....</div>;
  }
  if (!isLoading && !isError) {
    content = <div>Error....</div>;
  }
  if (!isLoading && !isError && detail.id) {
    content = (
      <div>
        <DetailView detail={detail} />
      </div>
    );
  }
  return (
    <div className="text-center ">
      {content}
    </div>
  );
};

export default Detail;
