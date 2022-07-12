import axios from "axios";
import { restaurantUrl } from "../../helpers/url.helper";
export const ADD_RESTAURANT = "ADD_RESTAURANT";
export const DELETE_RESTAURANT = "DELETE_RESTAURANT";
export const EDIT_RESTAURANT = "EDIT_RESTAURANT";
export const UPDATE_RESTAURANT = "UPDATE_RESTAURANT";

export const addRestaurant = (data) => async (dispatch) => {
  const res = await axios.post(restaurantUrl, data);
  const restaurant = res.data;
  dispatch({
    type: ADD_RESTAURANT,
    payload: restaurant,
  });
};
