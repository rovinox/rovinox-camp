import { Routes, Route, Redirect, BrowserRouter } from "react-router-dom";
import RovinoxLanding from "./home/RovinoxLanding.js";
import StudentLanding from "./student/StudentLanding.js";
import Login from "./student/Login";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple, teal, green } from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline";
import Apply from "./component/Apply";
import AdminLanding from "./admin/AdminLanding";
import { useSelector } from "react-redux";
import "./index.css";
import AboutUs from "./component/AboutUs.js";
import CareerSupport from "./component/CareerSupport.js";
import Pricing from "./component/Pricing.js";
import OneAndOne from "./component/OneAndOne.js";

export default function Router() {
  const selectedTheme = useSelector((state) => state.changeTheme.theme);
  const theme = createTheme({
    palette: {
      mode: selectedTheme,
      primary: {
        main: teal[500],
      },
      secondary: {
        main: purple[500],
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RovinoxLanding />} />
          <Route path="/student" element={<StudentLanding />} />
          <Route path="/login" element={<Login />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/admin" element={<AdminLanding />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/support" element={<CareerSupport />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/meeting" element={<OneAndOne />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
