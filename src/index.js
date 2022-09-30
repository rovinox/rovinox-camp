import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import RovinoxLanding from "./home/RovinoxLanding.js";
import StudentLanding from "./student/StudentLanding.js";
import Login from "./student/Login";
import SignUp from "./student/Signup";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { purple, teal, green } from "@mui/material/colors";
import { AuthProvider } from "./context/AuthProvider";
import CssBaseline from "@mui/material/CssBaseline";
import Apply from "./component/Apply";
import AdminLanding from "./admin/AdminLanding";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RovinoxLanding />,
  },
  {
    path: "/student",
    element: <StudentLanding />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/apply",
    element: <Apply />,
  },
  {
    path: "/admin",
    element: <AdminLanding />,
  },
]);
const theme = createTheme({
  palette: {
    primary: {
      main: teal[500],
    },
    background: {
      default: green["A100"],
    },
    secondary: {
      main: purple[500],
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
