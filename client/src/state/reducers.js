import { combineReducers } from "redux";
import BagReducer from "./bag/bag.reducer";

const appReducer = combineReducers({
  BagReducer,
});

export default appReducer;
