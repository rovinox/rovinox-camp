import { Button } from "@mui/material";
import axios from "axios";
import * as React from "react";
import CourseContent from "./CourseContent";
import CourseListDrawer from "./CourseListDrawer";
import NoCourse from "./NoCourse";
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import useAuth from "../hooks/useAuth";

export default function StudentLanding() {
  const { auth } = useAuth();
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [currentCourse, setCurrentCourse] = React.useState(0);

  React.useEffect(() => {
    if (!auth?.accessToken) {
      navigate("/login");
    }
  }, [auth, navigate]);

  const handleLogout = async () => {
    setAuth({});
    try {
      const res = await axios.get("/logout");
      console.log("res", res);
    } catch (err) {
      console.log(err);
    }
    navigate("/login");
  };
  return (
    <div>
      <Button onClick={handleLogout}>logout</Button>
      <CourseContent day={currentCourse} />
      <CourseListDrawer
        currentCourse={currentCourse}
        setCurrentCourse={setCurrentCourse}
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
      />
    </div>
  );
}
