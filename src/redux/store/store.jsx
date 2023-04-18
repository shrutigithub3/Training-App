import { configureStore} from "@reduxjs/toolkit";
import { userSlice } from "../reducer/slice";


export default configureStore({
    reducer:{
        users:userSlice.reducer
    }
})