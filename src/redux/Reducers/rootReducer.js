import { combineReducers } from "redux";
import postsReducer from "./Posts";

const rootReducer = combineReducers({
  postsState: postsReducer
});

export default rootReducer;
