import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "./articleSlice";

export default configureStore({
    reducer: rootReducer,
});