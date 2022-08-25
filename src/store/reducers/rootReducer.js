import { combineReducers } from "redux"
import {productReducer} from './productReducer'
import { searchInputReducer } from "./searchInpuReducer"

export const rootReducer = combineReducers({
  products: productReducer,
  searchValue: searchInputReducer
})