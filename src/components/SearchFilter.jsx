import React from "react";
import { TextField } from "@mui/material";

const SearchFilter = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="searchFilterContainer">
      <TextField
        label="Search by College Name"
        variant="outlined"
        value={searchTerm}
        onChange={onSearchChange}
        fullWidth
      />
    </div>
  );
};

export default SearchFilter;
