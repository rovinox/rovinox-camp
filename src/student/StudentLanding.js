import { Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import CourseContent from "./CourseContent";
import CourseListDrawer from "./CourseListDrawer";
import NoCourse from "./NoCourse";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import Header from "../component/Header";

export default function StudentLanding() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [currentCourse, setCurrentCourse] = useState(0);
  const [activeStudent, setActiveStudent] = useState(true);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpenDrawer(open);
  };
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();
  console.log("vv5", auth.accessToken);

  console.log(currentCourse);

  // React.useEffect(() => {
  //   const getUser = async () => {
  //     try {
  //       const result = await axios.get("http://localhost:8080/valid");
  //       console.log("vv1", result);
  //       // if (result?.data) {
  //       //   setActiveStudent(true);
  //       // } else {
  //       //   setActiveStudent(false);
  //       //   navigate("/login");
  //       // }
  //     } catch (error) {
  //       console.error(error?.message);
  //     }
  //   };
  //   getUser();
  // }, []);
  useEffect(() => {
    const controller = new AbortController();
    const getUser = async () => {
      try {
        //const response = await axiosPrivate.get("/valid");
        const response = await axios.post("http://localhost:8080/valid", {
          email: auth.email,
          headers: {
            authorization: `Bearer ${auth?.accessToken}`,
          },
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getUser();
    return () => {
      controller.abort();
    };
  }, [axiosPrivate]);

  return (
    <div>
      {activeStudent ? (
        <>
          <Header toggleDrawer={toggleDrawer} />
          <CourseContent day={currentCourse} />
          <CourseListDrawer
            currentCourse={currentCourse}
            setCurrentCourse={setCurrentCourse}
            openDrawer={openDrawer}
            setOpenDrawer={setOpenDrawer}
            toggleDrawer={toggleDrawer}
          />
        </>
      ) : (
        <NoCourse />
      )}
    </div>
  );
}
