import * as types from "./actionTypes";

const { SHOW_MODAL, HIDE_MODAL } = types;

export function showModal() {
  return {
    type: SHOW_MODAL
  };
}

export function hideModal() {
  return {
    type: HIDE_MODAL
  };
}
