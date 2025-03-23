import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import authReducer from "./authSlice";
import searchReducer from "./searchSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
    search: searchReducer,
  },
});

export default store;
