import axios from 'axios';
export const ADD_RESTAURANT = 'ADD_RESTAURANT'
export const DELETE_RESTAURANT = 'DELETE_RESTAURANT'
export const EDIT_RESTAURANT = 'EDIT_RESTAURANT'
export const UPDATE_RESTAURANT = 'UPDATE_RESTAURANT'

export const addRestaurant = (data) => async dispatch => {
  const res = await axios.post("http://localhost:6022/restaurants", data)
  const restaurant = res.data;
  dispatch({
    type: ADD_RESTAURANT,
    payload: restaurant
  })
}

