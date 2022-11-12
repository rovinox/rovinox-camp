import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { courseList } from "../../component/course";
export default function Day1({ day }) {
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
          Moving Data around in react
        </Typography>
        <ul style={{ width: "100%" }}>
          <li>As you've learned, data moves two ways in react...</li>
          <li>It can move into a component via props or it </li>
          <li>Hook: functions that allow you to make changes during specific steps in the lifecycle of a component</li>
        </ul>
        <Typography sx={{ mb: 5 }} component="p">
          React Lifecycle Hooks
        </Typography>
        <ul style={{ width: "100%" }}>
          <li>useState: 
            <ul style={{ width: "100%" }}>
              <li>this hook is used to re-render the component with new information</li>
              <li>This is used only on state, which is the internal data of a component</li>
            </ul>
          </li>
          <li>useEffect: 
            <ul style={{ width: "100%" }}>
              <li>this hook is used when a component first renders, when it is updated via useState, and when it is no longer on screen</li>
              <li>This is hook useful for knowing when state or props change, and reacting to those changes</li>
            </ul>
          </li>
        </ul>
      </Box>
    </Container>
  );
}
