import axios from '../../axios/axios'
import { SET_PRODUCTS } from '../types'

export default function fetchProducts() {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/products')
      // console.log(data)
      await dispatch(SET_PRODUCTS(data))
      
    } catch (error) {
      console.log(error)
    }
  }
}