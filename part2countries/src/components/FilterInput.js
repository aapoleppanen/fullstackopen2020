import React from "react";

const FilterInput = ({ handleFilter, filterString }) => {
  return (
    <div>
      Find Countries:{" "}
      <input
        onChange={(event) => handleFilter(event.target.value)}
        value={filterString}
      />
    </div>
  );
};

export default FilterInput;
