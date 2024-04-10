import {configureStore} from "@reduxjs/toolkit";
import {counterSlice} from "./reducers";

export default configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
})