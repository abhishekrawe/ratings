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
} from "@mui/material";

const CollegeTable = () => {
    const [data, setData] = useState([]);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    useEffect(() => {
        import("../../public/data").then((module) => {
            setData(module.default || module.data);
        });
    }, []);

    return (
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
                    {data.map((college) => (
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
                                    <p className="collegeCutoff"> {college.collegeDetails.admissionCutoff} </p>
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
                                    {college.courseFees.duration}
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
                                <div className="tableCellContent">{college.rankings.rank}</div>
                                    <div className="publicationContainer">
                                        {college.rankings.publications.map((publication, index) => (
                                            <div key={index} className="publicationItem">
                                                <img
                                                    src={publication.logo}
                                                    alt={publication.name}
                                                    className="publicationLogo"
                                                />
                                            </div>
                                        ))}
                                    </div>

                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CollegeTable;
