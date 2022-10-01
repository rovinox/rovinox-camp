import React, { useState, useEffect, useContext } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

import moment from "moment";
import axios from "axios";

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
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [startDate, setStartDate] = useState(moment(new Date()));
  const [endDate, setEndDate] = useState(moment(new Date()));

  const handleStartDate = (newValue) => {
    setStartDate(newValue);
  };
  const handleEndDate = (newValue) => {
    setEndDate(newValue);
  };

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
    } catch (error) {
      console.error(error?.message);
    }
  };
  const courseList = [
    {
      value: 1,
      label: "Full-Stack ",
    },
  ];
  const cost = [
    {
      value: 2000,
      label: "$2000",
    },
    {
      value: 3000,
      label: "$3000",
    },
    {
      value: 4000,
      label: "$4000",
    },
    {
      value: 5000,
      label: "$5000",
    },
  ];

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Container component="main" maxWidth="md">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box
            component="form"
            Validate
            onSubmit={handleSubmit}
            sx={{ mt: 3, width: "50%" }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <MobileDatePicker
                  label="Start Date"
                  inputFormat="MM/DD/YYYY"
                  value={startDate}
                  onChange={handleStartDate}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <MobileDatePicker
                  label="End Date"
                  inputFormat="MM/DD/YYYY"
                  value={endDate}
                  onChange={handleEndDate}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  sx={{ mt: 3, mb: 3 }}
                  required
                  fullWidth
                  name="course"
                  select
                  label="Course"
                  value={courseList.value}
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
                <TextField
                  required
                  fullWidth
                  name="course"
                  select
                  label="Course"
                  value={cost.value}
                >
                  {cost.map((option) => (
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
    </LocalizationProvider>
  );
}
