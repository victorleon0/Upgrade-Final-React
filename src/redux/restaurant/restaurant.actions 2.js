import axios from "axios";
import { restaurantUrl } from "../../helpers/url.helper";
export const GET_ALL_RESTAURANTS = "GET_ALL_RESTAURANTS";
export const ADD_RESTAURANT = "ADD_RESTAURANT";
export const DELETE_RESTAURANT = "DELETE_RESTAURANT";
export const EDIT_RESTAURANT = "EDIT_RESTAURANT";
export const CREATE_RESTAURANT = "CREATE_RESTAURANT";

export const getAllRestaurans = () => async dispatch => {
  const res = await axios(restaurantUrl);
  dispatch({ type: GET_ALL_RESTAURANTS, payload: res.data });
}

export const addRestaurant = (data) => async (dispatch) => {
  const res = await axios.post(restaurantUrl, data);
  const restaurant = res.data;
  dispatch({
    type: ADD_RESTAURANT,
    payload: restaurant,
  });
};

export const deleteRestaurant = (restaurant) => async (dispatch) => {
  const res = await axios.delete(`${restaurantUrl}/${restaurant._id}`, restaurant);
  dispatch({ 
    type: DELETE_RESTAURANT, 
    payload: res.data 
  });
  

};


export const editRestaurant = (editRestaurant, id) => async (dispatch) => {
  const res = await axios.put(`${restaurantUrl}/${id}`, editRestaurant);
  dispatch({
    type: EDIT_RESTAURANT,
    payload: {editRestaurant, res},
  });

};

export const createRestaurant = (data) => async (dispatch) => {
  const res = await axios.post(restaurantUrl, data);
  
  dispatch({
    type: CREATE_RESTAURANT,
    payload: res.data,
  });
};
