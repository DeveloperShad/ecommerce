import { GET_INPUT_VALUE } from "../actionTypes/product";

export const searchInputReducer = (state='', action) =>{
  switch (action.type) {
    case GET_INPUT_VALUE:
      return action.payload
    default:
      return state
  }
}