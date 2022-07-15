import * as actions from "./restaurant.actions";

const initialState = {
  restaurants: [],
};

const restaurantReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.ADD_RESTAURANT: {
      return state.concat({
        ...payload,
        id: new Date(),
      });
    }

    case actions.DELETE_RESTAURANT: {

      const restaurantFilter = state.restaurants.filter((restaurants) => restaurants.id !== payload);

      
      return {  restaurants: [restaurantFilter] }; // Preguntar a Sergio
    }

    case actions.EDIT_RESTAURANT: {
      const restaurants = state.restaurants.map((exp) => {
        if (exp.id !== payload.id) return exp;
        return {
          ...exp,
          ...payload,
        };
      });
      return { ...state, restaurants };
    }

    case actions.CREATE_RESTAURANT: {
      return { ...state, restaurant: [...state.restaurants, payload] };
    }

    case actions.GET_ALL_RESTAURANTS: {
      return { ...state, restaurants: payload };
    }

    default:
      return state;
  }
};

export default restaurantReducer;
