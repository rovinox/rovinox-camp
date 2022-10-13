import { Button } from "@mui/material";
import axios from "../api/axios";
import { useEffect, useState } from "react";
import CourseContent from "./CourseContent";
import CourseListDrawer from "./CourseListDrawer";
import NoCourse from "./NoCourse";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import Header from "../component/Header";

export default function StudentLanding(...prop) {
  const [currentCourse, setCurrentCourse] = useState(0);
  const [activeStudent, setActiveStudent] = useState(true);
  const user = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();
  const params = useLocation();
  //console.log("state: ", state);

  const batchId = params?.state?.batchId;
  console.log("user?.batchId;: ", batchId);
  //const batchId = 54165;

  useEffect(() => {
    const getUser = async () => {
      try {
        const result = await axios.get(
          "/usersession",
          {
            email: "a@aa.com",
          },
          {
            headers: {
              authorization: `Bearer ${"bdxfgdfg"}`,
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        console.log("vv1", result);
        // if (result?.data) {
        //   setActiveStudent(true);
        // } else {
        //   setActiveStudent(false);
        //   navigate("/login");
        // }
      } catch (error) {
        console.error(error?.message);
      }
    };
    //getUser();
  }, []);
  useEffect(() => {
    const controller = new AbortController();

    const getUser = async () => {
      try {
        const response = await axios.post(
          "/usersession",
          { email: user.email },
          {
            headers: {
              authorization: `Bearer ${user.accessToken}`,
            },
            // });
            // const response = await axios.post("/valid", {
            //   headers: {
            //     authorization: `Bearer ${auth.accessToken}`,
            //     "Content-Type": "application/json",
            //   },
            //   withCredentials: true,
          }
        );
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    console.log("user", user);
    console.log("vv1", `Bearer ${user.accessToken}`);
    console.log("vv2", `Bearer ${user.email}`);
    getUser();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      {activeStudent ? (
        <>
          <Header />
          <CourseContent batchId={batchId} day={currentCourse} />
          <CourseListDrawer setCurrentCourse={setCurrentCourse} />
        </>
      ) : (
        <NoCourse />
      )}
    </div>
  );
}
