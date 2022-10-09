import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import drawerReducer from "./drawerSlice";

export const store = configureStore({
  reducer: {
    changeTheme: themeReducer,
    drawer: drawerReducer,
  },
});
