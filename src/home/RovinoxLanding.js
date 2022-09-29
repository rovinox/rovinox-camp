import React, { useEffect, useState } from "react";
import "./RovinoxLanding.css";
import vid1 from "../asset/vid1.mp4";
import vid2 from "../asset/vid2.mp4";
import vid3 from "../asset/vid3.mp4";
import pic1 from "../asset/pic1.jpg";
import { TypeAnimation } from "react-type-animation";
import CourseTable from "../component/CourseTable";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Button } from "@mui/material";
export default function RovinoxLanding() {
  const [currentVideo, setCurrentVideo] = useState(vid1);

  return (
    <div>
      <div className="vid-container">
        <header className="header-client">
          <h2 className="logo">Rovinox</h2>
          <div className="links-client">
            <span>Course</span>
            <span>Tuition & Finance</span>
            <span>About US</span>
            <span>Apply</span>
          </div>
        </header>
        <div className="heading-client">
          <TypeAnimation
            sequence={["Jumpstart your career in tech with Rovinox", 1000]}
            wrapper="div"
            cursor={false}
            repeat={Infinity}
            style={{ fontSize: "2em" }}
          />
          <TypeAnimation
            sequence={["It’s Time to Invest In  Your Future", 1000]}
            wrapper="div"
            cursor={false}
            repeat={Infinity}
            style={{ fontSize: "2em" }}
          />
        </div>
        <video muted loop autoPlay>
          <source src={currentVideo} type="video/mp4" />
        </video>
      </div>
      <div className="remote-client">
        <img className="remote-pic" src={pic1} alt="pic" />
        <div>
          <p>
            {" "}
            <CheckCircleIcon color="primary" /> Live, real-time instruction
          </p>
          <p>
            {" "}
            <CheckCircleIcon color="primary" /> Live, real-time instruction
          </p>
          <p>
            {" "}
            <CheckCircleIcon color="primary" /> Live, real-time instruction
          </p>
          <p>
            {" "}
            <CheckCircleIcon color="primary" /> Live, real-time instruction
          </p>
          If you’d like to know more—call, email, or chat with us.
          <br></br>
          <Button color="primary">chat with us</Button>
        </div>
      </div>
      <CourseTable />
    </div>
  );
}
