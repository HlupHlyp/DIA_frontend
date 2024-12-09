import { combineReducers, configureStore } from "@reduxjs/toolkit"
import dataReducer from "./slices/searchSlice"


const Store = configureStore({
    reducer: combineReducers({
        ourData: dataReducer
    })
})

export default Store 