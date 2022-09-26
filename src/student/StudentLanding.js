import { Button } from "@mui/material";
import axios from "axios";
import * as React from "react";
import CourseContent from "./CourseContent";
import CourseListDrawer from "./CourseListDrawer";
import NoCourse from "./NoCourse";
import { useNavigate } from "react-router-dom";

export default function StudentLanding() {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [currentCourse, setCurrentCourse] = React.useState(0);
  const [activeStudent, setActiveStudent] = React.useState(false);
  const navigate = useNavigate();
  console.log(currentCourse);

  React.useEffect(() => {
    const getUser = async () => {
      try {
        const result = await axios.get("http://localhost:8080/user");
        console.log("vv1", result);
        if (result?.data) {
          setActiveStudent(true);
        } else {
          setActiveStudent(false);
          navigate("/login");
        }
      } catch (error) {
        console.error(error?.message);
      }
    };
    getUser();
  }, []);

  const handleLogout = async () => {
    try {
      const result = await axios.get("http://localhost:8080/logout");
      console.log("vv2", result);
      setActiveStudent(false);
      navigate("/login");
    } catch (error) {
      console.error(error?.message);
    }
  };
  return (
    <div>
      {activeStudent ? (
        <>
          <Button onClick={handleLogout}>logout</Button>
          <CourseContent day={currentCourse} />
          <CourseListDrawer
            currentCourse={currentCourse}
            setCurrentCourse={setCurrentCourse}
            openDrawer={openDrawer}
            setOpenDrawer={setOpenDrawer}
          />
        </>
      ) : (
        <NoCourse />
      )}
    </div>
  );
}
