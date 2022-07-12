import axios from "axios";
import { experienceUrl } from "../../helpers/url.helper";
export const GET_ALL_EXPERIENCES = "GET_ALL_EXPERIENCES";
export const ADD_EXPERIENCE = "ADD_EXPERIENCE";
export const DELETE_EXPERIENCE = "DELETE_EXPERIENCE";
export const EDIT_EXPERIENCE = "EDIT_EXPERIENCE";
export const CREATE_EXPERIENCE = "CREATE_EXPERIENCE";

export const getAllExperiences = () => async dispatch => {
  const res = await axios(experienceUrl);
  dispatch({ type: GET_ALL_EXPERIENCES, payload: res.data });
}

export const addExperience = (data) => async (dispatch) => {
  const res = await axios.post(experienceUrl, data);
  const experience = res.data;
  dispatch({
    type: ADD_EXPERIENCE,
    payload: experience,
  });
};

export const deleteExperience = (experience) => async (dispatch) => {
  const res = await axios.delete(`${experienceUrl}/${experience._id}`, experience);
  dispatch({ 
    type: DELETE_EXPERIENCE, 
    payload: res.data 
  });
  

};


export const editExperience = (experience, cb) => async (dispatch) => {
  const res = await axios.put(`${experienceUrl}/${experience.id}`, experience);

  dispatch({
    type: EDIT_EXPERIENCE,
    payload: res.data,
  });

  setTimeout(() => cb(), 500);
};

export const createExperience = (data) => async (dispatch) => {
  const res = await axios.post(experienceUrl, data);
  
  dispatch({
    type: CREATE_EXPERIENCE,
    payload: res.data,
  });
};
