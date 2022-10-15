import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";

import axios from "axios";
export default function HomeworkSubmission({ selectedDay }) {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));
  const submitHomework = async (event) => {
    const data = new FormData(event.currentTarget);
    event.preventDefault();
    const payload = {
      email: user.email,
      day: selectedDay[0].day,
      link: data.get("githubLink"),
    };
    console.log(payload);
    setLoading(true);
    try {
      const result = await axios.post(
        "http://localhost:8080/submithomework",
        payload
      );
      if (result?.data) {
        setMessage(result.data.message);
        setLoading(false);
        setTimeout(() => {
          setMessage("");
        }, 5000);
      }
      console.log(result);
    } catch (error) {
      console.error(error?.message);
    }
  };
  return (
    <Box
      component="form"
      Validate
      onSubmit={submitHomework}
      sx={{ mt: 3, width: 700 }}
    >
      <TextField required fullWidth label="GitHub Link" name="githubLink" />

      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        submit
      </Button>
      {loading && <LinearProgress color="success" />}
      <Typography>{message}</Typography>
    </Box>
  );
}
