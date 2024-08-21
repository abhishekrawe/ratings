import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  useMediaQuery,
  useTheme,
  Checkbox,
} from "@mui/material";
import {
  ArrowRight,
  ArrowDown2,
  ArrowCircleDown,
  ArrowSwapHorizontal,
} from "iconsax-react";
import SearchFilter from "./shared/SearchFilter";
import SortFilter from "./shared/SortFilter";
import { fetchCollegeData } from "../services/dataService";

const CollegeTable = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortCriteria, setSortCriteria] = useState("rating");
  const [sortOrder, setSortOrder] = useState("asc");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const loadData = async () => {
      const fetchedData = await fetchCollegeData();
      setData(fetchedData);
    };

    loadData();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (criteria, order) => {
    setSortCriteria(criteria);
    setSortOrder(order);
  };

  const sortedData = [...data].sort((a, b) => {
    const getValue = (item) => {
      switch (sortCriteria) {
        case "rating":
          return parseFloat(item.userReviews.rating);
        case "fees":
          return parseInt(item.courseFees.amount.replace(/[^0-9]/g, ""));
        case "review":
          return parseInt(item.userReviews.reviewCount.replace(/[^0-9]/g, ""));
        default:
          return 0;
      }
    };

    const valueA = getValue(a);
    const valueB = getValue(b);

    if (sortOrder === "asc") {
      return valueA - valueB;
    } else {
      return valueB - valueA;
    }
  });

  const filteredData = sortedData.filter((college) =>
    college.collegeDetails.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="searchSortContainer">
        <SearchFilter
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
        />
        <SortFilter onSortChange={handleSortChange} />
      </div>

      <TableContainer component={Paper} className="tableContainer">
        <Table aria-label="college table">
          <TableHead>
            <TableRow>
              <TableCell align="left" className="tableHeaderCell">
                CD Rank
              </TableCell>
              <TableCell align="left" className="tableHeaderCell">
                Colleges
              </TableCell>
              <TableCell align="left" className="tableHeaderCell">
                Course Fees
              </TableCell>
              <TableCell align="left" className="tableHeaderCell">
                Placement
              </TableCell>
              <TableCell align="left" className="tableHeaderCell">
                User Reviews
              </TableCell>
              <TableCell align="left" className="tableHeaderCell">
                Ranking
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((college) => (
              <TableRow key={college.id}>
                <TableCell align="left" className="tableCell">
                  #{college.id}
                </TableCell>
                <TableCell align="left" className="tableCell">
                  <div className={`tableCellContent collegeName`}>
                    {college.collegeDetails.name}
                  </div>
                  <div className="tableCellContent">
                    {college.collegeDetails.location}
                  </div>
                  <div className={`tableCellContent collegeProgram`}>
                    <p> {college.collegeDetails.program} </p>
                    <p className="collegeCutoff">
                      {college.collegeDetails.admissionCutoff}
                    </p>
                  </div>

                  <div className="college-action">
                    <div className="apply-action">
                      <ArrowRight size="24" color="#ff8c00" />
                      <span> Apply Now </span>
                    </div>
                    <div className="download">
                      <ArrowCircleDown size="24" color="#ff8c00" />
                      <span> Download Brochure </span>
                    </div>
                    <div className="add-compare">
                      <Checkbox />
                      Add To Compare
                    </div>
                  </div>
                </TableCell>
                <TableCell align="left" className="tableCell">
                  <div className={`tableCellContent courseFeesAmount`}>
                    {college.courseFees.amount}
                  </div>
                  <div className="tableCellContent">
                    {college.courseFees.programType}
                  </div>
                  <div className="tableCellContent">
                    - {college.courseFees.duration}
                  </div>
                  <div className="tableCompare">
                    <ArrowSwapHorizontal size="24" color="#ff8c00" />
                    <p> Compare Fees </p>
                  </div>
                </TableCell>
                <TableCell align="left" className="tableCell">
                  <div className={`tableCellContent placementPackage`}>
                    {college.placements.averagePackage}
                  </div>
                  <span>Average Package</span>
                  <div className={`tableCellContent placementPackage`}>
                    {college.placements.highestPackage}
                  </div>
                  <span>Highest Package</span>
                  <div className="tableCompare">
                    <ArrowSwapHorizontal size="24" color="#ff8c00" />
                    <p> Compare Placement </p>
                  </div>
                </TableCell>
                <TableCell align="left" className="tableCell">
                  <div className="tableCellContent">
                    <span className="ratingDot"></span>
                    {college.userReviews.rating}
                  </div>
                  <div className="tableCellContent">
                    {college.userReviews.reviewCount}
                  </div>
                  <div>
                    {college.userReviews.highlights.map((highlight, index) => (
                      <div key={index} className="highlightChip">
                        {highlight.category}
                      </div>
                    ))}
                  </div>
                </TableCell>
                <TableCell align="left" className="tableCell">
                  <div className="tableCellContent">
                    <p className="rankingsRank">
                      {college.rankings.rank}{" "}
                      <span className="rankingcontnet"> in India </span>{" "}
                    </p>
                  </div>
                  <div className="postBy">
                    <img src={college.rankings.postedBy} className="postedBy" />
                    <p> 2023 </p>
                  </div>

                  <div className="publicationContainer">
                    {college.rankings.publications.slice(0, 3).map((publication, index) => (
                      <div key={index} className="publicationItem">
                        <img
                          src={publication.logo}
                          alt={publication.name}
                          className="publicationLogo"
                        />
                      </div>
                    ))}
                    {college.rankings.publications.length > 3 && (
                      <div className="morePublications">
                        <p>+{college.rankings.publications.length - 3} More  </p>
                        <ArrowDown2
                          size="20"
                          color="#007bff"
                        />
                      </div>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CollegeTable;
