import { createSlice } from "@reduxjs/toolkit";

const loadLikesFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("likedImages")) || [];
};

const initialState = {
  likedImages: loadLikesFromLocalStorage(),
};

const likeSlice = createSlice({
  name: "likes",
  initialState,
  reducers: {
    toggleLike: (state, action) => {
      const imageId = action.payload;
      if (state.likedImages.includes(imageId)) {
        state.likedImages = state.likedImages.filter((id) => id !== imageId);
      } else {
        state.likedImages.push(imageId);
      }
      localStorage.setItem("likedImages", JSON.stringify(state.likedImages));
    },
    loadLikes: (state) => {
      state.likedImages = loadLikesFromLocalStorage();
    },
  },
});

export const { toggleLike, loadLikes } = likeSlice.actions;
export default likeSlice.reducer;
