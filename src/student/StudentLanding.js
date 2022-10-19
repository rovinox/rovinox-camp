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
  const [isAdmin, setIsAdmin] = useState(false);
  const [activeStudent, setActiveStudent] = useState(false);
  // const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const params = useLocation();
  //console.log("state: ", state);

  const batchId = params?.state?.batchId;
  console.log("user?.batchId;: ", batchId);
  //const batchId = 54165;

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    setActiveStudent(user?.enabled);
    setIsAdmin(user?.enabled);
    const getUser = async () => {
      try {
        const result = await axios.get("http://localhost:8080/usersession", {
          headers: {
            authorization: `Bearer ${user?.accessToken}`,
            "Content-Type": "application/json",
          },
          //withCredentials: true,
        });
        console.log("vv1", result);
        if (!result?.data?.login) {
          navigate("/login");
        }
      } catch (error) {
        console.error(error?.message);
      }
    };
    getUser();
  }, []);

  return (
    <div>
      {activeStudent ? (
        <>
          <Header />
          <CourseContent
            isAdmin={isAdmin}
            batchId={batchId}
            day={currentCourse}
          />
          <CourseListDrawer setCurrentCourse={setCurrentCourse} />
        </>
      ) : (
        <NoCourse />
      )}
    </div>
  );
}
