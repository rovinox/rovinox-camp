import { Typography } from "@mui/material";
import React from "react";
import Banner from "./Banner";
import "./style/careerSupport.css";
import CareerSupportText from "./CareerSupportText";
import Header from "../home/Header";

export default function CareerSupport() {
  return (
    <>
      <Header />
      <Banner bannerTitle=" Beyond the Bootcamp Rovinox Career Support" />
      <CareerSupportText />
    </>
  );
}
