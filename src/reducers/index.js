import { combineReducers } from "redux";
import url from "./urlReducer";

const shortenApp = combineReducers({
  url
});

export default shortenApp;
