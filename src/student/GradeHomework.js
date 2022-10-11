import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import axios from "axios";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import Grid from "@mui/material/Grid";
import { DeveloperBoardOffSharp } from "@mui/icons-material";
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
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
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
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
export default function GradeHomework({ selectedDay }) {
  const [homework, setHomeWork] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(0);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  useEffect(() => {
    const getUsers = async () => {
      console.log("day", selectedDay[0].day);
      try {
        const result = await axios.post("http://localhost:8080/gethomework", {
          day: selectedDay[0].day,
        });

        if (result?.data.homeWork) {
          setLoading(false);
          setHomeWork(result.data.homeWork);
        }

        console.log("result.data", result.data.homeWork);
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, []);
  return (
    <div>
      {homework.length &&
        homework.map((item, index) => {
          return (
            <Accordion
              sx={{ width: 800 }}
              key={index}
              expanded={expanded === index}
              onChange={handleChange(index)}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Grid
                  container
                  direction="row"
                  justifyContent="space-evenly"
                  alignItems="center"
                >
                  <Grid xs={4}>
                    {item.studentId.firstName} {item.studentId.lastName}
                  </Grid>
                  <Grid xs={4}>
                    Graded:{" "}
                    {item.graded ? (
                      <CheckCircleIcon color="primary" />
                    ) : (
                      <CancelIcon sx={{ color: "red" }} />
                    )}
                  </Grid>
                  <Grid xs={4}>
                    Submitted:{" "}
                    {item.link ? (
                      <CheckCircleIcon sx={{ mt: 1 }} color="primary" />
                    ) : (
                      <CancelIcon sx={{ color: "red" }} />
                    )}
                  </Grid>
                </Grid>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <a href={item.link} target="_blank" rel="noreferrer">
                    Homework Link
                  </a>
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
    </div>
  );
}
