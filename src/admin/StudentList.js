import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "last name", width: 13 },
  { field: "email", headerName: "Email", width: 320 },
  { field: "enabled", headerName: "Enabled", width: 100 },
  { field: "role", headerName: "Role", width: 100 },
];

const rows = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    email: "dskjg",
    enabled: "yes",
    role: "admin",
  },
  {
    id: 2,
    lastName: "Snow",
    firstName: "Jon",
    email: "dskjg",
    enabled: "yes",
    role: "admin",
  },
  {
    id: 3,
    lastName: "Snow",
    firstName: "Jon",
    email: "dskjg",
    enabled: "yes",
    role: "admin",
  },
  {
    id: 4,
    lastName: "Snow",
    firstName: "Jon",
    email: "dskjg",
    enabled: "yes",
    role: "admin",
  },
  {
    id: 5,
    lastName: "Snow",
    firstName: "Jon",
    email: "dskjg",
    enabled: "yes",
    role: "admin",
  },
  {
    id: 4,
    lastName: "Snow",
    firstName: "Jon",
    email: "dskjg",
    enabled: "yes",
    role: "admin",
  },
  {
    id: 5,
    lastName: "Snow",
    firstName: "Jon",
    email: "dskjg",
    enabled: "yes",
    role: "admin",
  },
  {
    id: 6,
    lastName: "Snow",
    firstName: "Jon",
    email: "dskjg",
    enabled: "yes",
    role: "admin",
  },
  {
    id: 7,
    lastName: "Snow",
    firstName: "Jon",
    email: "dskjg",
    enabled: "yes",
    role: "admin",
  },
];

export default function StudentList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const result = await axios.get("http://localhost:8080/users");
        if (result?.data?.users) {
          result.data.users.forEach((user, index) => {
            user.id = index + 1;
            user.enabled = user.enabled ? "Yes" : "no";
          });
        }

        setUsers(result.data.users);
        console.log("result.data.users: ", result.data.users);
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, []);

  return (
    <div style={{ height: 700, width: "100%" }}>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
