import { useState } from "react";
import "./RovinoxLanding.css";
import vid1 from "../asset/vid1.mp4";
import pic1 from "../asset/pic1.jpg";
import IntroVideo from "./IntroVideo";
import CourseTable from "../component/CourseTable";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CoursePromise } from "./RovinoxLanding.styled.tsx";
import FAQ from "../component/FAQ";
import Grid from "@mui/material/Grid";
import Header from "./Header";
import Loading from "./Loading";
import { purple, teal, green } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Widget } from "react-chat-widget";
import CssBaseline from "@mui/material/CssBaseline";
import "react-chat-widget/lib/styles.css";
import { BsYoutube, BsFacebook, BsTwitter } from "react-icons/bs";
import { BiSend } from "react-icons/bi";
import TrackVisibility from "react-on-screen";
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: teal[500],
    },
    secondary: {
      main: purple[500],
    },
  },
});
export default function RovinoxLanding() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <IntroVideo setLoading={setLoading} />
      {loading ? (
        <Loading />
      ) : (
        <div className="main-landing">
          <div className="simple-linear"></div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "0px",
            }}
          >
            <Grid Grid container spacing={2}>
              <Grid xs={12} md={6}>
                <img className="remote-pic" src={pic1} alt="pic" />
              </Grid>
              <Grid
                xs={12}
                md={6}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <CoursePromise>
                  {" "}
                  <CheckCircleIcon color="primary" />
                  Live, real-time instruction
                </CoursePromise>
                <CoursePromise>
                  {" "}
                  <CheckCircleIcon color="primary" /> Great Support from day-one
                  to your first day in tech
                </CoursePromise>
                <CoursePromise>
                  {" "}
                  <CheckCircleIcon color="primary" /> Learn in-demand job ready
                  skills to be come a SoftWare Developer
                </CoursePromise>
                <CoursePromise>
                  {" "}
                  <CheckCircleIcon color="primary" /> Dive into web development
                  with fun and cool projects
                </CoursePromise>
              </Grid>
            </Grid>
          </div>
          <div id="about">
            <div className="container">
              <div className="course-row">
                <div className="col-md-4">
                  <img
                    src="http://res.cloudinary.com/dfqddpjfl/image/upload/v1498777628/quality_q31k6u.png"
                    className="aboutImage"
                    alt=" pic"
                  />
                  <h2>High Quality Lectures</h2>
                  <p>
                    All lectures have been very well prepared for the best
                    learning experience of future developers.
                  </p>
                </div>
                <div className="col-md-4">
                  <img
                    src="http://res.cloudinary.com/dfqddpjfl/image/upload/v1498777629/tools_yorndk.png"
                    className="aboutImage"
                    alt=" pic"
                  />
                  <h2>In-demand, Job Ready Skills</h2>
                  <p>
                    Learn all major Web Technologies: HTML5, CSS3, Javascript,
                    Mobile Apps, API's: Google Maps, Facebook and MORE!
                  </p>
                </div>
                <div className="col-md-4">
                  <img
                    src="http://res.cloudinary.com/dfqddpjfl/image/upload/v1498777627/help_dfec8u.png"
                    className="aboutImage"
                    alt="pic"
                  />
                  <h2>Get Help Anytime!</h2>
                  <p>
                    Getting Stuck? Ask questions any time directly any time and
                    we are happy to help!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <CourseTable />
          <FAQ />
          <footer className="section__footer">
            <div className="container__footer">
              <div className="row">
                <div className="footer-col">
                  <h4>Keep In Toucht</h4>
                  <a className="social codepen">
                    <div className="iconic">
                      <BsYoutube />
                    </div>
                  </a>
                  <a className="social instagram">
                    <div className="iconic">
                      <BsFacebook />
                    </div>
                  </a>
                  <a className="social youtube">
                    <div className="iconic">
                      <BsTwitter />
                    </div>
                  </a>
                </div>
                <div className="footer-col">
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
                <div className="footer-col">
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
                <div className="footer-col">
                  <h4>Subscribe</h4>
                  <p>Subscribe to our newsletter to stay updated on courses</p>
                  <form name="email-form">
                    <div className="email__field">
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="E-mail"
                      />
                      <button className="form-control submit">
                        <BiSend />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </footer>
        </div>
      )}
      <Widget
        subtitle="Please Include phone number in the message"
        title="Welcome To Rovinox"
      />
    </ThemeProvider>
  );
}
