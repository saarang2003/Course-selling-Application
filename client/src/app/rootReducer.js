import { authApi } from "@/feature/api/authApi";
import { combineReducers } from "@reduxjs/toolkit";
import authReducer from '../feature/authSlice';

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  auth: authReducer
});

export default rootReducer;