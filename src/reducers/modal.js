import { initialState } from ".";
import { SHOW_MODAL, HIDE_MODAL } from "../actions/actionTypes";

export function showModal(state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return true;
    case HIDE_MODAL:
      return false;
    default:
      return state;
  }
}
