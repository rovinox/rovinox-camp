import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import drawerReducer from "./drawerSlice";
import changeGradeHomeView from "./GradeHomeViewSlice";

export const store = configureStore({
  reducer: {
    changeTheme: themeReducer,
    drawer: drawerReducer,
    changeGradeHomeView,
  },
});
