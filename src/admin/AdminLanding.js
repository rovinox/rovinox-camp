import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import StudentList from "./StudentList";
import AddBatch from "./AddBatch";
import Header from "../component/Header";
import CourseTable from "../component/CourseTable";
import GradeHomework from "./GradeHomework";
import Test from "./Test";
import axios from "axios";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function AdminLanding() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [batch, setBatch] = useState([]);

  useEffect(() => {
    const getBatch = async () => {
      try {
        const result = await axios.get("http://localhost:8080/getbatch");
        console.log("result: ", result);
        setBatch(result.data.batch);
      } catch (e) {}
    };
    getBatch();
  }, []);

  return (
    <>
      <Header />
      <Box component="div" sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Student List" {...a11yProps(0)} />
            <Tab label="Course list" {...a11yProps(1)} />
            <Tab label="Add Batch" {...a11yProps(2)} />
            <Tab label="Grade Homework" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <StudentList batch={batch} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Course list
        </TabPanel>
        <TabPanel value={value} index={2}>
          <AddBatch />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <GradeHomework batch={batch} />
        </TabPanel>
      </Box>
      {/* <Test /> */}
    </>
  );
}
