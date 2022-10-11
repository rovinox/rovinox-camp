import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import axios from "axios";
export default function HomeworkSubmission({ selectedDay }) {
  const [message, setMessage] = useState("");
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
    try {
      const result = await axios.post(
        "http://localhost:8080/submithomework",
        payload
      );
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
      {message}
    </Box>
  );
}
