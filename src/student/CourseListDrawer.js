import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { courseList } from "../component/course";

export default function CourseListDrawer({
  setCurrentCourse,
  openDrawer,
  setOpenDrawer,
}) {
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpenDrawer(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {courseList.map((course, index) => (
          <ListItem
            onClick={() => setCurrentCourse(course.day)}
            button
            key={index}
          >
            <Typography>Day {course.day}&nbsp;</Typography>
            <ListItemText primary={course.title} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>course</Button>
      <Drawer anchor={"left"} open={openDrawer} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
}
