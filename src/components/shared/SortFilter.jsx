import React from "react";
import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";

const SortFilter = ({ onSortChange }) => {
    const handleSortChange = (event) => {
        const [criteria, order] = event.target.value.split(',');
        onSortChange(criteria, order);
    };

    return (
        <div className="searchFilterContainer">
            <FormControl fullWidth>
                <InputLabel>Sort By</InputLabel>
                <Select
                    defaultValue="rating,asc"
                    onChange={handleSortChange}
                >
                    <MenuItem value="rating,asc">Rating - Ascending</MenuItem>
                    <MenuItem value="rating,desc">Rating - Descending</MenuItem>
                    <MenuItem value="fees,asc">Fees - Ascending</MenuItem>
                    <MenuItem value="fees,desc">Fees - Descending</MenuItem>
                    <MenuItem value="review,asc">Review Count - Ascending</MenuItem>
                    <MenuItem value="review,desc">Review Count - Descending</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

export default SortFilter;
