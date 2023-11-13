import { configureStore  } from "@reduxjs/toolkit";

import app from './app';
import modal from "./modal";

const store = configureStore({
    reducer: {
        app,
        modal
    }
})

export default store;