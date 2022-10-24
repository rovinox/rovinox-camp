import { Typography } from "@mui/material";
import React from "react";
import Banner from "./Banner";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

export default function AboutUs() {
  return (
    <>
      <Banner
        bannerTitle="Immersive Experiences that Change Lives About the Rovinox Bootcamp
        Experience"
      />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid sx={{ p: 5 }} xs={12} md={4}>
            <Typography sx={{ mt: 5, height: 150 }} variant="h3">
              about Rovinox
            </Typography>
            <Typography variant="p">
              Rovinox is a design, analytics, cybersecurity, and coding bootcamp
              founded in 2013 by professionals who had their lives dramatically
              changed by learning tech skills. The Rovinox brand specializes in
              immersive, in-person, and courses. We’ve grown a lot since our
              first course—taught in a classroom in what used to be an old candy
              factory. Rovinox is now part of Strayer University, with campuses
              across multiple states.
            </Typography>
          </Grid>
          <Grid sx={{ p: 5 }} xs={12} md={4}>
            <Typography sx={{ mt: 5, height: 150 }} variant="h3">
              A Community Is Waiting For You
            </Typography>
            <Typography variant="p">
              Our intense courses in Web Development, iOS Development, Software
              Engineering, Data Analytics, UX Design, Software QA, and more are
              hands-on, project-based, and are designed by educators with
              real-world industry knowledge. We offer challenging, focused
              training designed to equip students with the skills to start their
              journey toward a career in tech.
            </Typography>
          </Grid>
          <Grid sx={{ p: 5 }} xs={12} md={4}>
            <Typography sx={{ mt: 5, height: 150 }} variant="h3">
              We Live In a Digital World
            </Typography>
            <Typography variant="p">
              And that world is in need of developers and designers who know how
              to create the backbone of the global economy. Despite the
              widespread need for coders, they are still a rare breed. The time
              and financial investment of earning a traditional four-year
              computer science degree remains an obstacle. Rovinox’s dev
              bootcamp was founded to fill that gap. Our programs are intense
              commitments designed to offer immersive, hands-on instruction to
              get the next generation of developers up to speed and into the
              workforce. Learning web and iOS development, user experience
              design, or the skills to work in software quality assurance is not
              easy, but, at Rovinox, we believe it is something anyone who is
              willing to work hard can do. “I consider my time at Rovinox to be
              one of my greatest decisions.” Hear From Graduates COMPANY Home
              About Contact Work for Us Catalog & Policies Press STUDENTS
              Approach Login Apply Blog Beginners Guide FAQ Alumni COMMUNITY DM
              Discord Strayer Instruct Events Shop JOIN US
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
