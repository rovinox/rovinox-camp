import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { courseList } from "../component/course";
import { green } from "@mui/material/colors";
import Divider from "@mui/material/Divider";

export default function CourseListDrawer({
  setCurrentCourse,
  openDrawer,
  toggleDrawer,
}) {
  const list = () => (
    <Box
      sx={{ width: 300 }}
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
            sx={{
              height: 35,
            }}
          >
            <Typography>Day {course.day}&nbsp;-&nbsp; </Typography>
            <ListItemText primary={course.title} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer anchor={"left"} open={openDrawer} onClose={toggleDrawer(false)}>
      {list()}
    </Drawer>
  );
}
