import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { courseList } from "../../component/course";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import HomeworkSubmission from "../../component/HomeworkSubmission";
import GradeHomework from "../GradeHomework";

export default function Day4({ day, batchId }) {
  const selectedDay = courseList.filter((item) => item.day === day);
  const user = JSON.parse(localStorage.getItem("user"));
  const isAdmin = user?.role === "admin";
  return (
    <Container component="main">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {selectedDay.map((course, index) => (
          <Typography key={index} sx={{ mb: 5 }} component="h1" variant="h3">
            {course.title}
          </Typography>
        ))}
        <Typography sx={{ mb: 5 }} component="p">
          Welcome to javascript, where the crying begins.
        </Typography>
        <Typography sx={{ m: 5 }} component="p">
          <a
            href="https://github.com/rovinox/JavaScript-part-1"
            target="_blank"
            rel="noreferrer"
          >
            Here
          </a>{" "}
          is the link to homework{" "}
        </Typography>
        {isAdmin ? (
          <GradeHomework batchId={batchId} selectedDay={selectedDay} />
        ) : (
          <HomeworkSubmission selectedDay={selectedDay} />
        )}
      </Box>
    </Container>
  );
}
