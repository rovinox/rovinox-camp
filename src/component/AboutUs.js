import { Typography } from "@mui/material";
import React from "react";
import Banner from "./Banner";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Header from "../home/Header";

export default function AboutUs() {
  return (
    <>
      <Header />
      <Banner
        page="ABOUT US"
        bannerTitle="Immersive Experiences that Change Lives About the Rovinox Bootcamp
        Experience"
      />
    </>
  );
}
