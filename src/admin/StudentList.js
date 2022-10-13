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
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "last name", width: 130 },
  { field: "email", headerName: "Email", width: 320 },
  { field: "enabled", headerName: "Enabled", width: 100 },
  { field: "role", headerName: "Role", width: 100 },
];

export default function StudentList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const result = await axios.get("http://localhost:8080/users");
        if (result?.data?.users) {
          result.data.users.forEach((user, index) => {
            user.id = index + 1;
            user.enabled = user.enabled ? "Yes" : "no";
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

  const roleList = [
    { value: "admin", label: "admin" },
    { value: "student", label: "Student" },
  ];
  const enableList = [
    { value: false, label: "No" },
    { value: true, label: "Yes" },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    setSelectedStudent("");
  };
  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection={false}
        disableSelectionOnClick={true}
        experimentalFeatures={{ newEditingApi: true }}
        editMode={"row"}
        onCellClick={(props) => {
          setSelectedStudent(props.row);
          console.log(props.row.enabled);
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
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
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
                    value={selectedStudent.enabled === "Yes" ? "Yes" : "No"}
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
                sx={{ mt: 3, mb: 2 }}
                // onClick={handleSubmit}
              >
                submit
              </Button>
            </Box>
          </Box>
        </div>
      )}
    </div>
  );
}
