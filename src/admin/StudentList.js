import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import LinearProgress from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import moment from "moment";
import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const columns = [
  { field: "batch", headerName: "Batch", width: 250 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "last name", width: 130 },
  { field: "email", headerName: "Email", width: 320 },
  { field: "active", headerName: "Enabled", width: 100 },
  { field: "role", headerName: "Role", width: 100 },
];

export default function StudentList({ batch }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [homeworkCount, setHomeWorkCount] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const result = await axios.get("http://localhost:8080/users");
        if (result?.data?.users) {
          result.data.users.forEach((user, index) => {
            user.id = index + 1;
            user.batch = `${moment(user.batchId.startDate).format(
              "MMM Do YY"
            )} - ${moment(user.batchId.endDate).format("MMM Do YY")}`;
            user.active = user.enabled ? "Yes" : "no";
          });
          setLoading(false);
        }

        setUsers(result.data.users);
        console.log("result.data.users: ", result.data.users);
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, []);
  const COLORS = ["#00C49F", "#FF8042", "#FFBB28", "#FF8042"];
  const data = [
    { name: "Completed", value: homeworkCount },
    { name: "Total Number of Homework", value: 30 },
  ];
  const roleList = [
    { value: "admin", label: "admin" },
    { value: "student", label: "Student" },
  ];
  const enableList = [
    { value: false, label: "No" },
    { value: true, label: "Yes" },
  ];
  const batchList = batch.map((option) => {
    return {
      value: option._id,
      label: `${moment(option.startDate).format("MMM Do YY")} -
                          ${moment(option.endDate).format("MMM Do YY")}`,
    };
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSelectedStudent("");
  };
  const handleProgress = async (studentId) => {
    console.log("studentId", studentId);
    try {
      const result = await axios.post("http://localhost:8080/getprogress", {
        studentId,
      });
      if (result.data?.homeWork?.length > 0) {
        setHomeWorkCount(result.data?.homeWork?.length);
        console.log("setHomeWorkCount ", result.data?.homeWork?.length);
      } else {
        setHomeWorkCount(null);
        console.log("setHomeWorkCount2222222222222 ", homeworkCount);
      }

      console.log("setHomeWorkCount ", result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection={false}
        disableSelectionOnClick={true}
        experimentalFeatures={{ newEditingApi: true }}
        editMode={"row"}
        onCellClick={(props) => {
          setSelectedStudent(props.row);
          handleProgress(props.row._id);
          console.log(props.row._id);
        }}
        components={{
          LoadingOverlay: LinearProgress,
        }}
        loading={loading}
      />
      {selectedStudent && (
        <div>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {homeworkCount && (
              <PieChart width={200} height={200}>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  label
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            )}

            <Box
              component="form"
              Validate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="firstName"
                    fullWidth
                    id="firstName"
                    disabled
                    value={selectedStudent.firstName}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    id="lastName"
                    name="lastName"
                    disabled
                    value={selectedStudent.lastName}
                  />
                </Grid>
                {batchList.length && (
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="batch"
                      select
                      label="Batch"
                      value={selectedStudent.batchId._id}
                    >
                      {batchList.map((option, index) => (
                        <MenuItem
                          // onClick={() => setSelectedBatch(option._id)}
                          key={index}
                          value={option.value}
                        >
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                )}

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="role"
                    select
                    label="Role"
                    value={selectedStudent.role}
                  >
                    {roleList.map((option, index) => (
                      <MenuItem
                        // onClick={() => setSelectedBatch(option._id)}
                        key={index}
                        value={option.value}
                      >
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="enabled"
                    select
                    label="Enabled"
                    value={selectedStudent.enabled}
                  >
                    {enableList.map((option, index) => (
                      <MenuItem
                        // onClick={() => setSelectedBatch(option._id)}
                        key={index}
                        value={option.value}
                      >
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3 }}
                // onClick={handleSubmit}
              >
                submit
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => setSelectedStudent("")}
              >
                cancel
              </Button>
            </Box>
          </Box>
        </div>
      )}
    </div>
  );
}
