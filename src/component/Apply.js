import React, { useState, useEffect, useContext } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import { useLocation } from "react-router-dom";
import ReactToastify from "../component/ReactToastify.js";
import { toast } from "react-toastify";

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
  console.log("props", state);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = {
      email: data.get("email"),
      phoneNumber: data.get("phoneNumber"),
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      course: selectedCourse,
    };
    console.log(user);
    try {
      const result = await axios.post("http://localhost:8080/email", user);
      console.log(result);
      if (result?.data?.message) {
        toast.success(`${result?.data?.message}`);
      }
    } catch (err) {
      console.error(err?.message);
      toast.error(`${err?.message}`);
    }
  };
  const courseList = [
    {
      value: 1,
      label: "Full-Stack Jul 05, Tues,Thurs 6:30PM - 9:00PM",
    },
    {
      value: 2,
      label: "Full-Stack Oct 22, Tues,Thurs 6:30PM - 9:00PM",
    },
    {
      value: 3,
      label: "Full-Stack Nov 05, Tues,Thurs 6:30PM - 9:00PM",
    },
    {
      value: 4,
      label: "Full-Stack Dec 05, Tues,Thurs 6:30PM - 9:00PM",
    },
  ];

  return (
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
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography sx={{ mb: 5 }} component="h1" variant="h5">
          Apply
        </Typography>
        <Typography component="p">
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
                name="phoneNumber"
                id="standard-number"
                label="Phone Number"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="course"
                select
                label="Course"
                //value={courseList.value}
              >
                {courseList.map((option) => (
                  <MenuItem
                    onClick={() => setSelectedCourse(option.value)}
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
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}
