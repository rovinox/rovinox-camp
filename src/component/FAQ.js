import { useState } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import vid3 from "../asset/vid3.mp4";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:last-child()": {
    // color: "red",
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(255, 255, 255, .05)" : "white",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function FAQ() {
  const [expanded, setExpanded] = useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Grid sx={{ mt: 8, p: 5 }} Grid container spacing={2}>
      <Grid sx={{ mt: 4, pr: 2 }} xs={12} md={6}>
        <Typography sx={{ m: 5 }} component="h2" variant="h4">
          Frequently Asked Questions...
        </Typography>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>
              What prerequisites are required for this program?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ m: 1 }}>
              All our programs require students to be 18 years old by the time
              their course begins and have a high school diploma (or its
              equivalent). Most programs also require students to complete a
              skill review.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>
              Do I need any experience with coding, design, IT, or data modeling
              to take the course?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ m: 1 }}>
              There are two ways to answer this question.
            </Typography>
            <Typography sx={{ m: 1 }}>
              First, our programs are designed so that people with basic
              computer literacy should be able to graduate. For instance, you
              don’t need to have been coding since the days of Fortran, but you
              should feel comfortable installing programs and apps on your
              computer without regularly asking someone for help.
            </Typography>
            <Typography sx={{ m: 1 }}>
              Second, all that said, we aren’t sure why anyone would choose to
              study something they have no experience with. A little experience
              with your subject will not only help you complete the course, but
              it will help you feel confident that you’re studying something you
              enjoy.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>
              How much money will I make after graduation?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ m: 1 }}>
              Neither we, nor anyone else in the universe, knows this for sure.
              (If we could predict the future, we’d be too busy getting kicked
              out of casinos.)
            </Typography>
            <Typography sx={{ m: 1 }}>
              We encourage you to look at our published Outcomes Report and
              research salary information from reputable sources online. Just
              keep in mind that salaries vary a lot by circumstance and region—a
              dollar in New York or San Francisco does not have the same buying
              power as a dollar in Salt Lake or Dallas, and a brand new
              professional often won’t make as much as the average professional.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>How are classes delivered?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ m: 1 }}>
              Details will vary by course, but in general we have a mix of
              online and in-person options that blend live lectures, exercises,
              video content, group work, and projects.
            </Typography>
            <Typography sx={{ m: 1 }}>
              In most courses we try to prepare you for real working
              environments by being more hands on in the early weeks of your
              course, while requiring more self-directed study (with lots of
              help and resources available) in the last weeks of your course.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Typography sx={{ m: 2, p: 3 }} component="p">
          Do you have a different question? Well, aren’t you precocious! Feel
          free to <Button color="primary">reach out to us</Button> any time
          about any old thing.
        </Typography>
      </Grid>
      <Grid sx={{ mt: 10 }} xs={12} md={6}>
        <video className="remote-pic" muted loop autoPlay>
          <source src={vid3} type="video/mp4" />
        </video>
      </Grid>
    </Grid>
  );
}
