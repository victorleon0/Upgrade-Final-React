import axios from "axios";
import { restaurantUrl } from "../../helpers/url.helper";
export const GET_ALL_RESTAURANTS = "GET_ALL_RESTAURANS";
export const ADD_RESTAURANT = "ADD_RESTAURAN";
export const DELETE_RESTAURANT = "DELETE_RESTAURAN";
export const EDIT_RESTAURANT = "EDIT_RESTAURAN";
export const CREATE_RESTAURANT = "CREATE_RESTAURAN";

export const getAllRestaurans = () => async dispatch => {
  const res = await axios(restaurantUrl);
  dispatch({ type: GET_ALL_RESTAURANTS, payload: res.data });
}

export const addRestauran = (data) => async (dispatch) => {
  const res = await axios.post(restaurantUrl, data);
  const restauran = res.data;
  dispatch({
    type: ADD_RESTAURANT,
    payload: restauran,
  });
};

export const deleteRestauran = (restauran) => async (dispatch) => {
  const res = await axios.delete(`${restaurantUrl}/${restauran._id}`, restauran);
  dispatch({ 
    type: DELETE_RESTAURANT, 
    payload: res.data 
  });
  

};


export const editRestauran = (editRestaurant, id) => async (dispatch) => {
  const res = await axios.put(`${restaurantUrl}/${id}`, editRestaurant);
  dispatch({
    type: EDIT_RESTAURANT,
    payload: {editRestauran, res},
  });

};

export const createRestauran = (data) => async (dispatch) => {
  const res = await axios.post(restaurantUrl, data);
  
  dispatch({
    type: CREATE_RESTAURANT,
    payload: res.data,
  });
};
