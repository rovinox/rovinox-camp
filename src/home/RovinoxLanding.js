import React, { useEffect, useState } from "react";
import "./RovinoxLanding.css";
import vid1 from "../asset/vid1.mp4";
import vid2 from "../asset/vid2.mp4";
import vid3 from "../asset/vid3.mp4";
import pic1 from "../asset/pic1.jpg";
import { TypeAnimation } from "react-type-animation";
import CourseTable from "../component/CourseTable";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { RovinoxTitle,CoursePromise } from "./RovinoxLanding.styled.tsx";
export default function RovinoxLanding() {
  const navigate = useNavigate();
  const [currentVideo, setCurrentVideo] = useState(vid1);
  const [courseMouse, setCourseMouse] = useState(false);
  const [courseDropdown, setCourseDropdown] = useState(false);

  const turnOnCourse = () => {
    setCourseMouse(true);
  };
  return (
    <div>
      <div className="vid-container">
        <header className="header-client">
          <h2 className="logo">Rovinox</h2>
          <div className="links-client">
            <div onMouseEnter={turnOnCourse}>Course</div>
            <div>Tuition & Finance</div>
            <div>About US</div>
            <Button
              onClick={() => {
                navigate("/apply");
              }}
            >
              <div>Apply</div>
            </Button>
          </div>
        </header>
        <div className="heading-client">
          {/* <TypeAnimation
            sequence={["Jumpstart your career in tech with Rovinox", 1000]}
            wrapper="div"
            cursor={false}
            repeat={Infinity}
            style={{ fontSize: "2em" }}
          /> */}
          <RovinoxTitle>Jumpstart your <span>career</span> in tech with Rovinox</RovinoxTitle>
          <TypeAnimation
            sequence={["It’s Time to Invest In  Your Future", 1000]}
            wrapper="div"
            cursor={false}
            repeat={Infinity}
            style={{ fontSize: "2em" }}
          />
        </div>
        <div id='video_container'>
          <video muted loop autoPlay style={{backgroundColor: 'rgba(0,0,0,0.7)'}}>
            <source src={currentVideo} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="remote-client">
        <img className="remote-pic" src={pic1} alt="pic" />
        <div>
          <CoursePromise>
            {" "}
            <CheckCircleIcon color="primary" /> Live, real-time instruction
          </CoursePromise>
          <CoursePromise>
            {" "}
            <CheckCircleIcon color="primary" /> Great Support from day-one to your first day in tech
          </CoursePromise>
          <CoursePromise>
            {" "}
            <CheckCircleIcon color="primary" /> Learn in-demand job ready skills to be come a SoftWare Developer
          </CoursePromise>
          <CoursePromise>
            {" "}
            <CheckCircleIcon color="primary" /> Dive into web development with fun and cool projects
          </CoursePromise>
          If you’d like to know more—call, email, or chat with us.
          <br></br>
          <Button color="primary">chat with us</Button>
        </div>
      </div>
      <CourseTable />
    </div>
  );
}
