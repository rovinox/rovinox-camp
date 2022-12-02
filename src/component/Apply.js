import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import { useLocation, useNavigate, Link } from "react-router-dom";
import ReactToastify from "../component/ReactToastify.js";
import { toast } from "react-toastify";
import moment from "moment";
import CardContent from "@mui/material/CardContent";
import { Widget, addResponseMessage } from "react-chat-widget";
import Header from "../home/Header";
import Banner from "./Banner.js";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}

      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Apply() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const batchId = state?.id;
  const [selectedBatch, setSelectedBatch] = useState(batchId);
  const [batch, setBatch] = useState([]);
  const getCustomLauncher = (handleToggle) => (
    <Button onClick={handleToggle}>This is my launcher component!</Button>
  );

  useEffect(() => {
    const getBatch = async () => {
      try {
        const result = await axios.get("/getbatch");
        console.log("result: ", result);

        setBatch(result.data.batch);
      } catch (e) {
        console.log(e);
      }
    };
    getBatch();
    console.log("data", batch);
  }, []);
  const batchList =
    batch.length > 0 &&
    batch.map((option) => {
      return {
        value: option._id,
        label: `${moment(option.startDate).format("MMM Do YY")} -
                          ${moment(option.endDate).format("MMM Do YY")}`,
      };
    });
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = {
      email: data.get("email"),
      phoneNumber: data.get("phoneNumber"),
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      password: data.get("password"),
      batchId: selectedBatch,
    };
    console.log(user);
    try {
      const result = await axios.post("/register", user);
      if (result.status === 200) {
        localStorage.setItem("user", JSON.stringify(result.data));
        navigate("/student");
      }
    } catch (err) {
      if (!err?.response) {
        toast.error("No Server Response");
      } else if (err.response?.status === 409) {
        toast.error("This email address already exists");
      } else {
        toast.error(`${err?.message}`);
      }
    }
  };
  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    addResponseMessage("Someone From Rovinox will reach out to you");
  };
  return (
    <>
      <Header />
      <Banner bannerTitle="Here are the steps we follow for admission. We understand you may or may not have prior coding experience" />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{
          marginTop: 8,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item xs={2} sm={4} md={4}>
          <CardContent
            sx={{
              textAlign: "center",
              maxWidth: 400,
            }}
          >
            <Typography variant="h5" component="div">
              BEGIN ONLINE APPLICATION
            </Typography>

            <Typography variant="body2">
              You can easily complete the first section of the online
              application to Rovinox in half an hour or less. This step requires
              some basic information about you as well as your interest in the
              course.
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <CardContent
            sx={{
              textAlign: "center",
              maxWidth: 400,
            }}
          >
            <Typography variant="h5" component="div">
              PHONE CONSULTATION
            </Typography>

            <Typography variant="body2">
              Once you’ve completed the first section of your online
              application, you’ll schedule a short phone consultation with one
              of our friendly admissions counselors. They will make sure you’re
              prepared for the program and answer any of your Rovinox questions.
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <CardContent
            sx={{
              textAlign: "center",
              maxWidth: 400,
            }}
          >
            <Typography variant="h5" component="div">
              SKILL REVIEW
            </Typography>

            <Typography variant="body2">
              The last step in the application process is the skill review. This
              is an exercise designed to help you and Rovinox know whether the
              program you’re applying for is a good fit. We don’t expect you to
              be an expert and it’s okay to take a skill review without prior
              experience.
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "20px",
          height: "100%",
          width: "100%",
        }}
      >
        <h1>Have Questions About Applying?</h1>
        <Typography>
          Our admissions team is made of warm and cuddly non-threatening people
          who would love to hear from you. Right now the odds are very good that
          they are bored doing some mundane part of their job, and they’d rather
          help you with whatever questions you have.
        </Typography>
      </div>
      <Container component="main" maxWidth="xs">
        <ReactToastify />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography>
            Your application is the first step to your new future. You'll need
            about{" "}
            <Typography component="span" variant="h5">
              30 seconds
            </Typography>{" "}
            to complete your portion. Relax,{" "}
            <Typography component="span" variant="h5">
              no payment
            </Typography>{" "}
            or{" "}
            <Typography component="span" variant="h5">
              commitment
            </Typography>{" "}
            will be required during the application process.
          </Typography>
          <Box component="form" Validate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Create a Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="phoneNumber"
                  id="standard-number"
                  label="Phone Number (optional)"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="course"
                  select
                  label="Course"
                  value={selectedBatch}
                >
                  {batchList.length > 0 &&
                    batchList.map((option) => (
                      <MenuItem
                        onClick={() => setSelectedBatch(option.value)}
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </MenuItem>
                    ))}
                </TextField>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              //onClick={navigateToHome}
            >
              submit
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        subtitle="Please Include phone number in the message"
        title="Welcome To Rovinox"
        //launcher={(handleToggle) => getCustomLauncher(handleToggle)}
      />
    </>
  );
}
