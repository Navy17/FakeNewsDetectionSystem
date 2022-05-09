import UserReducer from "./UserReducer";
import AnalyseReducer from "./AnalyseReducer"

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  UserReducer: UserReducer,
  AnalyseReducer: AnalyseReducer,
});

export default rootReducer;
