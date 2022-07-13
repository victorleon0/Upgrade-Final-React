import * as actions from './auth.actions';



const initialState = {
  user: null,
  
}

export const authReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch(type) {
    
    case actions.LOGIN_USER: {
      return {...state, user: payload};
    } 
    
    default: {
      return state;
    }
  }
}
