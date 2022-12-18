import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { courseList } from "../../component/course";
import HomeworkList from "../../component/HomeworkList";
export default function Day5({ day, batchId, isAdmin }) {
  const selectedDay = courseList.filter((item) => item.day === day);
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
          <Typography key={index} sx={{ mb: 5 }} component="h1" variant="h5">
            {course.title}
          </Typography>
        ))}
        <Typography sx={{ mb: 5 }} component="p">
          Welcome to javascript, where the crying begins.
        </Typography>
        <ul style={{ width: "100%" }}>
          <li>JavaScript is a programming language, "the language of the web"</li>
          <li>Learning JS will give allow you to be able to learn any other language</li>
          <li>You can create websites and make apps using JS</li>
          <li>Other frameworks and libraries like React and Angular are based on JavaScript</li>
        </ul>
        <HomeworkList
          isAdmin={isAdmin}
          batchId={batchId}
          selectedDay={selectedDay}
        />
      </Box>
    </Container>
  );
}
