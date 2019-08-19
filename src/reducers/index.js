import { combineReducers } from "redux";
import { showModal } from "./modal";

export const initialState = {
  showModal: false
};

const rootReducer = combineReducers({
  showModal
});

export default rootReducer;
