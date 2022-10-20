import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
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

  return (
    <div className="course-table">
      <Grid sx={{ mt: 9, pr: 5, pl: 5 }} Grid container spacing={2}>
        <Grid sx={{ textAlign: "center" }} xs={12} md={6}>
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
          md={6}
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
                <TableRow>
                  <TableCell>Course</TableCell>
                  <TableCell align="right">Schedule and time</TableCell>
                  <TableCell align="right">Tuition</TableCell>
                  <TableCell align="right">Deadline to Enroll</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {batch?.length &&
                  batch.map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.course}
                      </TableCell>
                      <TableCell align="right">
                        Tues,Thurs 6:30PM - 9:00PM{" "}
                      </TableCell>
                      <TableCell align="right">{row.cost}</TableCell>
                      <TableCell align="right">
                        {moment(row.startDate).format("MMM Do YY")}
                      </TableCell>
                      <TableCell align="right">
                        {" "}
                        <Button
                          onClick={() => handleApply(row._id)}
                          variant="outlined"
                        >
                          Apply
                        </Button>{" "}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
}
