import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { Typography } from "@mui/material";
import moment from "moment";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@mui/material";

function createData(course, startDate, endDate) {
  return { course, startDate, endDate };
}

export default function GradeHomework() {
  const [batch, setBatch] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    const getBatch = async () => {
      try {
        const result = await axios.get("http://localhost:8080/getbatch");
        console.log("result: ", result);
        setBatch(result.data.batch);
      } catch (e) {}
    };
    getBatch();
  }, []);
  const handleBatch = (id) => {
    navigate("/student", {
      state: {
        batchId: id,
      },
    });
  };

  return (
    <div>
      <TableContainer>
        <Typography sx={{ ml: 25, mt: 10 }} variant="h3">
          select a batch
        </Typography>
        <Table sx={{ maxWidth: 800 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Start Date</TableCell>
              <TableCell align="right">End Date</TableCell>
              <TableCell align="right">Grade this Batch</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {batch.length &&
              batch.map((row) => (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {moment(row.startDate).format("MMM Do YY")}
                  </TableCell>
                  <TableCell align="right">
                    {" "}
                    {moment(row.endDate).format("MMM Do YY")}
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      onClick={() => handleBatch(row._id)}
                      color="primary"
                    >
                      Grade
                    </Button>{" "}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
