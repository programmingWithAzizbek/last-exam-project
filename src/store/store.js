import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import authReducer from "./authSlice";
import searchReducer from "./searchSlice";
import likeReducer from "./likeSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
    search: searchReducer,
    likes: likeReducer,
  },
});

export default store;
