import React from "react";
import { BsYoutube, BsFacebook, BsTwitter } from "react-icons/bs";
import { BiSend } from "react-icons/bi";
import {
  Container,
  Grid,
  Box,
  Button,
  FormControl,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
//import { createStyles, makeStyles } from "@mui/material/styles";

// const useStyles = makeStyles((theme) =>
//   createStyles({
//     "@global": {
//       html: {
//         height: "100vh",
//       },
//       body: {
//         margin: "0",
//         height: "100vh",
//         backgroundColor: theme.palette.background.default,
//       },
//       "#root": {
//         height: "100vh",
//       },
//     },
//     root: {
//       height: "100vh",
//     },
//     background: {
//       minHeight: "100vh",
//       backgroundColor: theme.palette.background.default,
//     },
//     contentBox: {
//       flex: 1,
//     },
//   })
// );

export default function Footer() {
  // const classes = useStyles();
  return (
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
  );
}
