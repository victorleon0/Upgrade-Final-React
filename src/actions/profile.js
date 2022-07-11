export const ADD_PROFILE = 'ADD_PROFILE'
export const DELETE_PROFILE = 'DELETE_PROFILE'
export const EDIT_PROFILE = 'EDIT_PROFILE'
export const UPDATE_PROFILE = 'UPDATE_PROFILE'

export const addProfile = (data) => ({
  type: ADD_PROFILE,
  payload: data
})

export const deleteProfile = (id) => ({
  type: DELETE_PROFILE,
  payload: id
})

export const editProfile = (id) => ({
  type: EDIT_PROFILE,
  payload: id
})

export const updateProfile = (data) => ({
  type: UPDATE_PROFILE,
  payload: data
})
