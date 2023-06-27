import React, { useEffect, useState } from "react";

const Search = props => {
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    props.onSearch(searchText);
  }, [searchText,props]);
  return (
<div className="mx-auto container w-50">
<div className="mt-4 mb-4   pt-5">
      <input
        className="text-center  rounded"
        type="text"
        placeholder="Search jobs"
        value={searchText}
        onChange={e => {
          setSearchText(e.target.value);
        }}
      />
    </div>
</div>
  );
};

export default Search;
