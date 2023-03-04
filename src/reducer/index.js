import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./newsSliсe";


export const store = configureStore({
    reducer: {
        news:newsReducer
    },

})