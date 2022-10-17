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
import { RovinoxTitle, CoursePromise,ApplyButton,CoursePacketButton } from "./RovinoxLanding.styled.tsx";
import FAQ from "../component/FAQ";
import Grid from "@mui/material/Grid";
import Header from "./Header";
import Loading from "./Loading";
import { Widget } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import { BsYoutube, BsFacebook, BsTwitter } from 'react-icons/bs';
import { BiSend } from 'react-icons/bi';

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
    <div>
        <Header />
      <div className="video_container">
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
        <div className="land-tech-job-section">
          <h2>Land Your Dream Job In Tech</h2>
          <CoursePacketButton>Get Free Course Packet</CoursePacketButton>
        </div>
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
                e
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
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#000000', padding: '0px'}}>
            <Grid sx={{ mt: 5 }}  Grid container spacing={2}>
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
              <Grid xs={12} md={6} style={{display: "flex",  justifyContent: 'center', flexDirection: 'column'}}>
                <CoursePromise data-aos="slide-left">
                  {" "}
                  <CheckCircleIcon color="primary" /> <p>Live, real-time</p> 
                  instruction
                </CoursePromise>
                <CoursePromise data-aos="slide-right">
                  {" "}
                  <CheckCircleIcon color="primary" /> <p>Great Support from day-one
                  to your first day in tech</p> 
                </CoursePromise>
                <CoursePromise data-aos="slide-left">
                  {" "}
                  <CheckCircleIcon color="primary" /> <p>Learn in-demand job ready
                  skills to be come a SoftWare Developer</p>
                </CoursePromise>
                <CoursePromise data-aos="slide-right">
                  {" "}
                  <CheckCircleIcon color="primary" /> <p>Dive into web development
                  with fun and cool projects</p> 
                </CoursePromise>
                {/* <CoursePromise data-aos="slide-left">
                  {" "}
                  If you’d like to know more—call, email, or chat with us.
                  <br></br>
                </CoursePromise> */}
                {/* <Button data-aos="slide-right" sx={{ ml: 5 }} color="primary">
                  chat with us
                </Button> */}
              </Grid>
            </Grid>
          </div>
        <div id="about">
          <div class="container">
              <div class="course-row">
                  <div class="col-md-4">
                      <img src="http://res.cloudinary.com/dfqddpjfl/image/upload/v1498777628/quality_q31k6u.png" class="aboutImage" />
                      <h2>High Quality Lectures</h2>
                      <p>All lectures have been very well prepared for the best learning experience of future developers.</p>
                  </div>
                  <div class="col-md-4">
                      <img src="http://res.cloudinary.com/dfqddpjfl/image/upload/v1498777629/tools_yorndk.png" class="aboutImage" />
                      <h2>In-demand, Job Ready Skills</h2>
                      <p>Learn all major Web Technologies: HTML5, CSS3, Javascript, Mobile Apps, API's: Google Maps, Facebook and MORE!</p>
                  </div>
                  <div class="col-md-4">
                      <img src="http://res.cloudinary.com/dfqddpjfl/image/upload/v1498777627/help_dfec8u.png" class="aboutImage" />
                      <h2>Get Help Anytime!</h2>
                      <p>Getting Stuck? Ask questions any time directly any time and we are happy to help!</p>
                  </div>
              </div>
          </div>
      </div>
      <div className="courseTableContainer">

      </div>
          <CourseTable />
          <FAQ />{" "}
          <footer class="section__footer">
			<div class="container__footer">
				<div class="row">
				<div class="footer-col">
					<h4>Keep In Toucht</h4>
					<a className="social codepen">
            <div className="iconic">
              <BsYoutube /> 
            </div>
					</a>
					<a class="social instagram">
          <div className="iconic">
              <BsFacebook /> 
            </div>
					</a>
					<a class="social youtube">
          <div className="iconic">
              <BsTwitter /> 
            </div>
					</a>
				</div>
				<div class="footer-col">
					<h4>Company Info</h4>
					<ul>
						<li>
							<a href="#">About Us</a>
						</li>
						<li>
							<a href="#">Privacy Policy</a>
						</li>
						<li>
							<a href="#">Terms of Service</a>
						</li>
					</ul>
				</div>
				<div class="footer-col">
					<h4>Blog Posts</h4>
					<ul>
						<li>
							<a href="#">FAQ</a>
						</li>
						<li>
							<a href="#">Payment options</a>
						</li>
					</ul>
				</div>
				<div class="footer-col">
					<h4>Subscribe</h4>
					<p>Subscribe to our newsletter to stay updated on courses</p>
					<form name="email-form">
						<div class="email__field">
							<input id="email" type="email" name="email" placeholder="E-mail" />
							<button class="form-control submit">
              <BiSend /> 
							</button>
						</div>
					</form>
				</div>
				</div>
			</div>
		</footer>


        </>
      )}
      <Widget subtitle="Please Inlude phone number in the message" title="Welcome To Rovinox" />
    </div>
  );
}
