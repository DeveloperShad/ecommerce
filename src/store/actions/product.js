import { CREATE_PRODUCT, DELETE_PRODUCT, GET_INPUT_VALUE, UPDATE_PRODUCT } from "../actionTypes/product"

export const createProduct = (payload)=> {
  return {
    type: CREATE_PRODUCT,
    payload
  }
}

export const updateProduct = (id,payload)=> {
  // alert(id)
  return {
    type: UPDATE_PRODUCT,
    payload,
    id,
  }
}
export const deleteProduct = (id)=> {
  return {
    type: DELETE_PRODUCT,
    payload: id
  }
}

export const getInputValue = (payload)=> {
  return {
    type: GET_INPUT_VALUE,
    payload,
  }
}
