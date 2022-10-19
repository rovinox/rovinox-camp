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
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import ReactToastify from "../component/ReactToastify.js";
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
const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));
export default function GradeHomework({ selectedDay, batchId }) {
  const [homework, setHomeWork] = useState([]);
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const gradeHomeView = useSelector(
    (state) => state.changeGradeHomeView.gradeHomeView
  );

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    console.log("day", selectedDay[0].day);
    try {
      const result = await axios.post("http://localhost:8080/gethomework", {
        day: selectedDay[0].day,
        batchId,
      });

      if (result?.data.homeWork) {
        setHomeWork(result.data.homeWork);
      }

      console.log("result.data", result.data.homeWork);
    } catch (err) {
      console.log(err);
    }
  };

  const handMarkAsGraded = async (homeWorkId, graded) => {
    const cloneHomework = [...homework];
    const newHomework = cloneHomework.map((homework) => {
      if (homeWorkId === homework._id) {
        return { ...homework, loading: true };
      } else {
        return { ...homework, loading: false };
      }
    });
    console.log(newHomework);
    setHomeWork(newHomework);

    setLoading(true);
    try {
      const result = await axios.put("http://localhost:8080/gradehomework", {
        homeWorkId,
        graded: !graded,
      });

      if (result?.data) {
        toast.success(`${result?.data?.message}`);
        setLoading(false);
        getUsers();
      }

      console.log("result.data", result.data);
    } catch (err) {
      console.log(err);
      toast.error(`${err?.message}`);
    }
  };
  return (
    <div>
      <ReactToastify />
      {batchId ? (
        <>
          {homework.length > 0 &&
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
                      <Grid item xs={4}>
                        Name: {item.studentId.firstName}{" "}
                        {item.studentId.lastName}
                      </Grid>
                      <Grid item xs={4}>
                        Graded:{" "}
                        {item.graded ? (
                          <CheckCircleIcon color="primary" />
                        ) : (
                          <CancelIcon sx={{ color: "red" }} />
                        )}
                      </Grid>
                      <Grid item xs={4}>
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
                    <Grid
                      container
                      direction="row"
                      justifyContent="space-evenly"
                      alignItems="center"
                    >
                      <Grid item xs={6}>
                        <Typography>
                          <a href={item.link} target="_blank" rel="noreferrer">
                            Homework Link
                          </a>
                        </Typography>
                      </Grid>
                      <Grid
                        container
                        direction="row"
                        alignItems="center"
                        justifyContent="flex-end"
                        xs={6}
                      >
                        {item.loading ? (
                          <CircularProgress sx={{ mt: 1 }} color="success" />
                        ) : (
                          <>
                            <Typography>No</Typography>

                            <FormControlLabel
                              onClick={() =>
                                handMarkAsGraded(item._id, item.graded)
                              }
                              control={
                                <IOSSwitch
                                  sx={{ ml: 3 }}
                                  defaultChecked={item.graded}
                                />
                              }
                            />
                            <Typography>Yes</Typography>
                          </>
                        )}
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              );
            })}
        </>
      ) : (
        <>
          {gradeHomeView && (
            <Typography variant="h5">
              Please select a batch from admin dashboard
            </Typography>
          )}
        </>
      )}
    </div>
  );
}
