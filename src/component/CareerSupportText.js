import React from "react";
import Slider from "react-slick";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import "./style/banner.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typography } from "@mui/material";
import { useState } from "react";
const images = ["astronaut", "celebrating", "education", "taken"];
export default function Test() {
  const NextArrow = ({ onClick }) => {
    return (
      <div classNameName="arrow next" onClick={onClick}>
        <ArrowCircleRightIcon />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div classNameName="arrow prev" onClick={onClick}>
        <ArrowCircleLeftIcon />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };
  return (
    <div className="eligibility-and-application-process-container" id="process">
      <div className="eligibility-list-container">
        <ul>
          <li className="li-point">
            <span className="line"></span>
            <span className="number"></span>
            <div className="blob">
              <Typography variant="h4">Student Outcomes</Typography>
              <Typography variant="p">
                Each of our full-time courses pairs technical training with
                career counseling to give you the tools to assist you in your
                goal to become a successful tech professional. The Rovinox
                Career Support team will join you throughout your journey for
                one-on-one training and class sessions designed to teach you the
                best practices for polishing your professional presence.
              </Typography>
            </div>
          </li>
          <li className="li-point">
            <span className="line"></span>
            <span className="number"></span>
            <div className="blob">
              <Typography variant="h4">
                What Career Support Has to Offer
              </Typography>
              <Typography variant="p">
                Rovinox is a design, analytics, cybersecurity, and coding
                bootcamp founded in 2013 by professionals who had their lives
                dramatically changed by learning tech skills. The Rovinox brand
                specializes in immersive, in-person, and courses. We’ve grown a
                lot since our first course—taught in a classroom in what used to
                be an old candy factory. Rovinox is now part of Strayer
                University, with campuses across multiple states.
              </Typography>
            </div>
          </li>
          <li className="li-point">
            <span className="line"></span>
            <span className="number"></span>
            <div className="blob">
              <Typography variant="h4">
                Optimize Your Resume. Build Your Brand
              </Typography>
              <Typography variant="p">
                You’ll build a toolset for the job hunt after Rovinox. Our
                Career Support team works closely with each student to develop a
                job-search plan and to help them craft a standout resume, social
                media brand, and tech-skills portfolio.
              </Typography>
            </div>
          </li>
          <li className="li-point">
            <span className="line"></span>
            <span className="number"></span>
            <div className="blob">
              <Typography variant="h4">
                Career Advice and Interview Prep
              </Typography>

              <Typography variant="p">
                We work hard to help you find opportunities and make sure you
                are prepared to meet them. During your time at Rovinox, you’ll
                practice interviewing and learn important tips and tricks that
                will help you during the real thing.
              </Typography>
            </div>
          </li>
          <li className="li-point">
            <span className="line"></span>
            <span className="number"></span>
            <div className="blob">
              <Typography variant="h4">Employer Networking</Typography>
              <Typography variant="p">
                Our graduates continue their journey with on-going access to
                career fairs, continued job search assistance, and invitations
                to networking events to help get them in front of tech employers
                looking for fresh talent.
              </Typography>
            </div>
          </li>
          <li className="li-point">
            <span className="line"></span>
            <span className="number"></span>
            <div className="blob">
              <Typography variant="h4">Career Support</Typography>
              <Typography variant="p">
                <Typography>
                  One-on-one support, Access to mentors and instructors, Job
                  negotiation training and interview coaching, LinkedIn best
                  practices training, On-going access to hiring events and
                  networking opportunities
                </Typography>
              </Typography>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
