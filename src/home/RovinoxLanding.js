import { useState } from "react";
import "./RovinoxLanding.css";
import vid1 from "../asset/vid1.mp4";
import pic1 from "../asset/bro.svg";
import pic2 from "../asset/Group2.svg";
import pic3 from "../asset/Group3.svg";
import pic4 from "../asset/Group4.svg";
import checkMark from "../asset/checkMark.svg";
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
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function RovinoxLanding() {
  const navigate = useNavigate();
  const points = [
    "Live, real-time instruction",
    "Great Support from day-one to your first day in tech",
    "Learn in-demand job ready skills to be come a SoftWare Developer",
    "Dive into web development with fun and cool projects",
  ];
  const section3rd = [
    {
      title: "High Quality Lectures",
      description:
        "All lectures have been very well prepared for the best learning experience of future developers.",
      image: pic2,
    },
    {
      title: "In-demand, Job Ready Skills",
      description:
        "Learn all major Web Technologies: HTML5, CSS3, Javascript, Mobile Apps, API's: Google Maps, Facebook and MORE!",
      image: pic3,
    },
    {
      title: "Get Help Anytime!",
      description:
        "Getting Stuck? Ask questions any time directly any time and we are happy to help!",
      image: pic4,
    },
  ];
  return (
    // <ThemeProvider theme={theme}>
    //   <CssBaseline />
    <>
      <Header />
      <IntroVideo />
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0px",
        }}
      > */}
      <Grid Grid container spacing={2}>
        <Grid xs={12} md={6}>
          <img src={pic1} alt="pic" />
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
          {points.map((point) => (
            <CoursePromise>
              {" "}
              <img style={{ marginRight: 5 }} src={checkMark} alt="pic" />
              {point}
            </CoursePromise>
          ))}
        </Grid>
      </Grid>
      {/* </div> */}

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          "& > :not(style)": {
            m: 1,
            width: "30%",
            height: 300,
          },
        }}
      >
        {section3rd.map((item) => (
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              // p: 10,
            }}
            key={item.title}
          >
            <img src={item.image} alt=" pic" />
            <Typography variant="h4">{item.title}</Typography>
            <Typography sx={{ p: 2 }} variant="p">
              {item.description}
            </Typography>
          </Paper>
        ))}
      </Box>
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
      {/* <Widget
        subtitle="Please Include phone number in the message"
        title="Welcome To Rovinox"
      /> */}
    </>
    // </ThemeProvider>
  );
}
