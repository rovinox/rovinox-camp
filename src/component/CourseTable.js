import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./courseTable.css";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import axios from "axios";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { ApplyButton } from "../home/RovinoxLanding.styled.tsx";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#9E3584",
    fontSize: 15,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CourseTable() {
  let navigate = useNavigate();
  const [batch, setBatch] = useState([]);

  useEffect(() => {
    const getBatch = async () => {
      try {
        const result = await axios.get("http://localhost:8080/getbatch");
        console.log("result: ", result);

        setBatch(result.data.batch);
      } catch (e) {
        console.log(e);
      }
    };
    getBatch();
    console.log("data", batch);
  }, []);

  const handleApply = (id) => {
    navigate("/apply", {
      state: {
        id,
      },
    });
  };
  const now = moment();
  return (
    <div className="course-table">
      <Grid sx={{ mt: 9, pr: 5, pl: 5 }} Grid container spacing={2}>
        <Grid sx={{ textAlign: "center" }} xs={12} md={4}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              padding: "20px",
              height: "100%",
              width: "100%",
            }}
          >
            <h1>See What Cohorts Are Starting Soon</h1>
            <Typography>
              Ready to plan out your Bootcamp experience? Start by viewing the
              upcoming course start dates. You can easily start your application
              once you’ve chosen a cohort.
            </Typography>
          </div>
        </Grid>
        <Grid
          xs={12}
          md={8}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <TableContainer
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "none",
            }}
          >
            <Table sx={{ overflow: "hidden" }} aria-label="simple table">
              <TableHead>
                <StyledTableRow>
                  <StyledTableCell>Course</StyledTableCell>
                  <StyledTableCell align="right">
                    Start/End Date
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    Schedule and time
                  </StyledTableCell>
                  <StyledTableCell align="right">Tuition</StyledTableCell>
                  <StyledTableCell align="right">
                    Deadline to Enroll
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    Select a Batch to Apply
                  </StyledTableCell>
                </StyledTableRow>
              </TableHead>
              <TableBody>
                {batch?.length &&
                  batch.map((row, index) => (
                    <StyledTableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <StyledTableCell component="th" scope="row">
                        {row.course}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {moment(row.startDate).format("MMM Do")} -
                        {moment(row.endDate).format("MMM Do")}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        Mon,Thurs,Fri 6PM-9PM{" "}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        ${row.cost}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {moment(row.startDate).format("MMM Do YY")}
                        {/* {now.diff(row.startDate, "days") - 5 > 0 ? (
                          <Typography color="error">Expired</Typography>
                        ) : (
                          `${now.diff(row.startDate, "days") - 5} Days Left`
                        )} */}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {" "}
                        <Button
                          // disabled={
                          //   now.diff(row.startDate, "days") - 5 < 0
                          //     ? true
                          //     : false
                          // }
                          sx={{
                            background:
                              "linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)",
                            color: "white",
                          }}
                          onClick={() => handleApply(row._id)}
                          variant="outlined"
                        >
                          Apply
                        </Button>{" "}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
}
