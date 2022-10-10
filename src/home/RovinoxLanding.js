import React, { useEffect, useState, Link } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import "./RovinoxLanding.css";
import vid1 from "../asset/vid1.mp4";
import vid2 from "../asset/vid2.mp4";
import vid3 from "../asset/vid3.mp4";
import pic1 from "../asset/pic1.jpg";
import CourseTable from "../component/CourseTable";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { RovinoxTitle, CoursePromise } from "./RovinoxLanding.styled.tsx";
import FAQ from "../component/FAQ";
import Grid from "@mui/material/Grid";
import Header from "./Header";
import Loading from "./Loading";

export default function RovinoxLanding() {
  const navigate = useNavigate();
  const [currentVideo, setCurrentVideo] = useState(vid1);
  const [courseMouse, setCourseMouse] = useState(false);
  const [courseDropdown, setCourseDropdown] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800, // values from 0 to 3000, with step 50ms
    });
    // if (pic1) {
    //   setLoading(false);
    // }
  });

  const turnOnCourse = () => {
    setCourseMouse(true);
  };
  return (
    <div className="rovinoxLanding">
      {" "}
      <Header />
      <div id="video_container">
        <video
          muted
          loop
          autoPlay
          style={{
            backgroundColor: "rgba(0,0,0,0.7)",
          }}
          onLoadedData={() => {
            setLoading(false);
            console.log("I don't get called???");
          }}
        >
          <source src={currentVideo} type="video/mp4" />
        </video>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000"
            className="heading-client"
          >
            <RovinoxTitle>
              Jumpstart your{" "}
              <span style={{ "--i": 1 }} className="orangeText">
                c
              </span>
              <span style={{ "--i": 2 }} className="orangeText">
                a
              </span>
              <span style={{ "--i": 3 }} className="orangeText">
                r
              </span>
              <span style={{ "--i": 4 }} className="orangeText">
                r
              </span>
              <span style={{ "--i": 5 }} className="orangeText">
                e
              </span>
              <span style={{ "--i": 6 }} className="orangeText">
                r
              </span>{" "}
              in tech with Rovinox.
              <br />
              It’s Time to Invest In Your{" "}
              <span style={{ "--i": 7 }} className="orangeText">
                F
              </span>
              <span style={{ "--i": 8 }} className="orangeText">
                u
              </span>
              <span style={{ "--i": 9 }} className="orangeText">
                t
              </span>
              <span style={{ "--i": 10 }} className="orangeText">
                u
              </span>
              <span style={{ "--i": 11 }} className="orangeText">
                r
              </span>
              <span style={{ "--i": 12 }} className="orangeText">
                e
              </span>
            </RovinoxTitle>
          </div>
          <div className="remote-client">
            <Grid sx={{ mt: 5 }} Grid container spacing={2}>
              <Grid xs={12} md={6}>
                <img
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="500"
                  className="remote-pic"
                  src={pic1}
                  alt="pic"
                />
              </Grid>
              <Grid xs={12} md={6}>
                <CoursePromise data-aos="slide-left">
                  {" "}
                  <CheckCircleIcon color="primary" /> Live, real-time
                  instruction
                </CoursePromise>
                <CoursePromise data-aos="slide-right">
                  {" "}
                  <CheckCircleIcon color="primary" /> Great Support from day-one
                  to your first day in tech
                </CoursePromise>
                <CoursePromise data-aos="slide-left">
                  {" "}
                  <CheckCircleIcon color="primary" /> Learn in-demand job ready
                  skills to be come a SoftWare Developer
                </CoursePromise>
                <CoursePromise data-aos="slide-right">
                  {" "}
                  <CheckCircleIcon color="primary" /> Dive into web development
                  with fun and cool projects
                </CoursePromise>
                <CoursePromise data-aos="slide-left">
                  {" "}
                  If you’d like to know more—call, email, or chat with us.
                  <br></br>
                </CoursePromise>
                <Button data-aos="slide-right" sx={{ ml: 5 }} color="primary">
                  chat with us
                </Button>
              </Grid>
            </Grid>
          </div>
          <CourseTable />
          <FAQ />{" "}
        </>
      )}
    </div>
  );
}
