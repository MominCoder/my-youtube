import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchReducer from "./searchSlice";
import libraryReducer from "./librarySlice";
import commentReducer from "./commentSlice";
import themeSlice from "./themeSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchReducer,
    commentsList: commentReducer,
    library: libraryReducer,
    theme: themeSlice,
  },
});

export default store;
