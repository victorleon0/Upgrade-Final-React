import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import ReduxThunk from "redux-thunk";
import experienceReducer from "./experience/experience.reducer";
import restaurantReducer from "./restaurant/restaurant.reducer";
import { authReducer } from "./auth/auth.reducer";

const reducer = combineReducers({
  experience: experienceReducer,
  restaurant: restaurantReducer,
  auth: authReducer,

});

const devTools = window.devToolsExtension ? window.devToolsExtension() : (f) => f;

const enhancer = compose(applyMiddleware(ReduxThunk), devTools);

const store = createStore(reducer, enhancer);

export default store;
