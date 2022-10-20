import * as React from "react";
import Typography from "@mui/material/Typography";
import ProductHeroLayout from "./ProductHeroLayout";
import TrackVisibility from "react-on-screen";
import {
  RovinoxTitle,
  CoursePacketButton,
} from "../home/RovinoxLanding.styled.tsx";

export default function ProductHero({ setLoading }) {
  return (
    <ProductHeroLayout setLoading={setLoading}>
      <TrackVisibility>
        {({ isVisible }) => (
          <div className={isVisible ? "sapple" : ""}>
            <Typography
              sx={{ mt: 10 }}
              color="inherit"
              align="center"
              variant="h2"
              marked="center"
            >
              Land Your Dream Job In Tech
            </Typography>
          </div>
        )}
      </TrackVisibility>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        <div className="heading-client">
          <RovinoxTitle>
            Jumpstart your <br />
            <span style={{ "--i": 1 }} className="orangeText">
              c
            </span>
            <span style={{ "--i": 2 }} className="orangeText">
              a
            </span>
            <span style={{ "--i": 3 }} className="orangeText">
              r
            </span>
            <span style={{ "--i": 4 }} className="orangeText">
              r
            </span>
            <span style={{ "--i": 5 }} className="orangeText">
              e
            </span>
            <span style={{ "--i": 6 }} className="orangeText">
              r
            </span>{" "}
            <br />
            in tech with Rovinox.
            <br />
            It’s Time to Invest In Your <br />
            <span style={{ "--i": 7 }} className="orangeText">
              F
            </span>
            <span style={{ "--i": 8 }} className="orangeText">
              u
            </span>
            <span style={{ "--i": 9 }} className="orangeText">
              t
            </span>
            <span style={{ "--i": 10 }} className="orangeText">
              u
            </span>
            <span style={{ "--i": 11 }} className="orangeText">
              r
            </span>
            <span style={{ "--i": 12 }} className="orangeText">
              e
            </span>
          </RovinoxTitle>
        </div>
      </Typography>
      <CoursePacketButton>Get Free Course Packet</CoursePacketButton>
    </ProductHeroLayout>
  );
}
