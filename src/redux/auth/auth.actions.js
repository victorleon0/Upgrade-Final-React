
export const LOGIN_USER = 'LOGIN_USER';



export const loginFormSubmit = (user) => (dispatch) => {
  
  dispatch({ type: LOGIN_USER, payload: user });
  

  
};



