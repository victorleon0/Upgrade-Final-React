import axios from "axios";
export const ADD_EXPERIENCE = "ADD_EXPERIENCE";
export const DELETE_EXPERIENCE = "DELETE_EXPERIENCE";
export const EDIT_EXPERIENCE = "EDIT_EXPERIENCE";
export const UPDATE_EXPERIENCE = "UPDATE_EXPERIENCE";

export const addExperience = (data) => async (dispatch) => {
  const res = await axios.post("http://localhost:6022/experiences", data);
  const experience = res.data;
  dispatch({
    type: ADD_EXPERIENCE,
    payload: experience,
  });
};

export const deleteExperience = (id) => async (dispatch) => {
  const res = await axios.delete("http://localhost:6022/experiences/");
  const id = res.data;
  dispatch({
    type: DELETE_EXPERIENCE,
    payload: id,
  });
};

export const editExperience = (id) => async (dispatch) => {
  const res = await axios.put("http://localhost:6022/experiences/id");
  const id = res.data;
  dispatch({
    type: EDIT_EXPERIENCE,
    payload: id,
  });
};

export const updateExperience = (data) => async (dispatch) => {
  const res = await axios.post("http://localhost:6022/experiences");
  const id = res.data;
  dispatch({
    type: UPDATE_EXPERIENCE,
    payload: id,
  });
};
