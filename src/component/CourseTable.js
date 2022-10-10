import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import "./courseTable.css";
import { Button } from "@mui/material";
import { green } from "@mui/material/colors";
import Typography from "@mui/material/Typography";

function createData(Course, ScheduleAndTime, Tuition, DeadlineToEnroll) {
  return { Course, ScheduleAndTime, Tuition, DeadlineToEnroll };
}

const rows = [
  createData(
    "Full-Stack",
    "Tues,Thurs 6:30PM - 9:00PM",
    "$5,000",
    "Nov 01, 2022"
  ),
  createData(
    "Full-Stack",
    "Tues,Thurs 6:30PM - 9:00PM",
    "$5,000",
    "Nov 01, 2022"
  ),
  createData(
    "Full-Stack",
    "Tues,Thurs 6:30PM - 9:00PM",
    "$5,000",
    "Nov 01, 2022"
  ),
  createData(
    "Full-Stack",
    "Tues,Thurs 6:30PM - 9:00PM",
    "$5,000",
    "Nov 01, 2022"
  ),
  createData(
    "Full-Stack",
    "Tues,Thurs 6:30PM - 9:00PM",
    "$5,000",
    "Nov 01, 2022"
  ),
];
console.log(rows);
export default function CourseTable() {
  return (
    <div className="course-table-header">
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <h1>See What Cohorts Are Starting Soon</h1>
        <Typography
          sx={{
            width: 450,
            paddingLeft: 2,
            paddingRight: 2,
          }}
        >
          Ready to plan out your Bootcamp experience? Start by viewing the
          upcoming course start dates. You can easily start your application
          once you’ve chosen a cohort.
        </Typography>
      </div>

      <TableContainer
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "none",
        }}
        component={Paper}
      >
        <Table
          sx={{ width: 1000, overflow: "hidden" }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Course</TableCell>
              <TableCell align="right">Schedule and time</TableCell>
              <TableCell align="right">Tuition</TableCell>
              <TableCell align="right">Deadline to Enroll</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                data-aos="fade-up"
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.Course}
                </TableCell>
                <TableCell align="right">{row.ScheduleAndTime}</TableCell>
                <TableCell align="right">{row.Tuition}</TableCell>
                <TableCell align="right">{row.DeadlineToEnroll}</TableCell>
                <TableCell align="right">
                  {" "}
                  <Button color="primary">Apply</Button>{" "}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
