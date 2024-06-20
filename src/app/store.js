import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice"; // Adjust the path as necessary
import movieReducer from "../features/movie/movieSlice"; // Adjust the path as necessary

const store = configureStore({
  reducer: {
    user: userReducer, 
    movie: movieReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
