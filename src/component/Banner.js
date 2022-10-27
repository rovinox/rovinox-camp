import { Typography } from "@mui/material";
import React from "react";
import "./style/banner.css";
export default function Banner({ bannerTitle }) {
  return (
    <div class="banner">
      <Typography variant="h2">{bannerTitle}</Typography>
    </div>
  );
}
