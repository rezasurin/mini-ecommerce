import { SET_PRODUCTS } from '../types/products'

const initialState = {
  data: [],
  product: []
}

export default function productsReducer(state = initialState, action) {
  const { type, payload} = action
  // console.log(payload)
  switch (type) {
    case SET_PRODUCTS().type :
      return {...state, data: payload}
    default:
      return state
  }
}