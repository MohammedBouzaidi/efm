import { configureStore } from "@reduxjs/toolkit";
import StagiaireReducer from "./StagiaireSlice";

export const store = configureStore({
    reducer:{
        stagiaire:StagiaireReducer,
    }
})