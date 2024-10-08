import React, { useEffect, useState, useCallback } from "react";
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
  CircularProgress,
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
  const [displayedData, setDisplayedData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortCriteria, setSortCriteria] = useState("rating");
  const [sortOrder, setSortOrder] = useState("asc");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [allDataLoaded, setAllDataLoaded] = useState(false); // New state

  const rowsPerPage = 10;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const loadData = async () => {
      const fetchedData = await fetchCollegeData();
      setData(fetchedData);
      setDisplayedData(fetchedData.slice(0, rowsPerPage));
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

  const loadMoreData = useCallback(() => {
    if (loading || allDataLoaded) return;

    setLoading(true);

    setTimeout(() => {
      const nextPage = page + 1;
      const nextData = data.slice(0, nextPage * rowsPerPage);

      if (nextData.length === displayedData.length) {
        setAllDataLoaded(true); // Set allDataLoaded if no more data to load
      } else {
        setDisplayedData(nextData);
        setPage(nextPage);
      }

      setLoading(false);
    }, 1000);
  }, [page, data, displayedData, loading, allDataLoaded]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2 &&
        !loading
      ) {
        loadMoreData();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadMoreData, loading]);

  const sortedData = [...displayedData].sort((a, b) => {
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
                  {college.id}
                </TableCell>       
                <TableCell align="left" className="tableCell">
                  <div className={`tableCellContent ${college?.featureTags ? 'featuredCollege' : ''}`}>
                    {college?.featureTags}
                  </div>
                  <div className="imageContainer">
                    <div className="imageContianer-logo">
                      <div className={`tableCellContent collegeName`}>
                        <img src={college.collegeDetails.logo} className="postedBy" />
                      </div>
                    </div>
                      
                    <div className="imageContianer-insturcution">
                      <div className={`tableCellContent collegeName`}>
                        {college.collegeDetails.name}
                      </div>
                      <div className="tableCellContent">
                        {college.collegeDetails.location}
                      </div>
                    </div>
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
                      <input type="checkbox" className="checkbox-compare" />    
                      Add To Compare
                    </div>
                  </div>
                </TableCell>
                <TableCell align="left" className="tableCell">
                  <div className={`tableCellContent courseFeesAmount`}>
                    {college.courseFees.amount}
                  </div>
                  <div className="tableCellContent courseFeesDuration">
                    {college.courseFees.programType}
                  </div>
                  <div className={`tableCellContent courseFeesDuration`}>
                   {college.courseFees.duration}
                  </div>
                  <div className="tableCellContents tableCompare">
                    <ArrowSwapHorizontal size="24" color="#ff8c00" />
                    <b> Compare Fees </b>
                  </div>
                </TableCell>
                <TableCell align="left" className="tableCell">
                  <div className={`tableCellContent placementPackage`}>
                    {college.placements.averagePackage}
                  </div>
                  <p className="avg">Average Package</p>
                  <div className={`tableCellContent placementPackage`}>
                    {college.placements.highestPackage}
                  </div>
                  <p className="avg">Highest Package</p>
                  <div className="tableCompare">
                    <ArrowSwapHorizontal size="24" color="#ff8c00" />
                    <b> Compare Placement </b>
                  </div>
                </TableCell>
                <TableCell align="left" className="tableCell">
                  <div className="tableCellContent courseFeesDuration">
                    <span className="ratingDot"></span>
                    {college.userReviews.rating}
                  </div>
                  <div className="tableCellContent courseFeesDuration">
                    {college.userReviews.reviewCount}
                  </div>
                  <div>
                    {college.userReviews.highlights.map((highlight, index) => (
                      <div key={index} className="highlightChip courseFeesDuration">
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
        {loading && (
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <CircularProgress />
          </div>
        )}
        {!loading && allDataLoaded && filteredData.length === 0 && (
          <div>
            No data to render
          </div>
        )}
      </TableContainer>
    </>
  );
};

export default CollegeTable;
