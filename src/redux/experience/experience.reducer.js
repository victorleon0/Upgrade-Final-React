import * as actions from "./experience.actions";

const initialState = {
  experiences: [],
};

const experienceReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.ADD_EXPERIENCE: {
      return state.concat({
        ...payload,
        id: new Date(),
      });
    }

    case actions.DELETE_EXPERIENCE: {
      
      const experiences = state.filter((experiences) => experiences._id !== payload);
      
      
      return { ...state, experiences: [...experiences]};
    }

    case actions.EDIT_EXPERIENCE: {
      const experiences = state.experiences.map((exp) => {
        if (exp.id !== payload.id) return exp;
        return {
          ...exp,
          ...payload,
        };
      });
      return { ...state, experiences };
    }

    case actions.CREATE_EXPERIENCE: {
      return { ...state, experience: [...state.experiences, payload] };
    }

    case actions.GET_ALL_EXPERIENCES: {
      return { ...state, experiences: payload };
    }

    default:
      return state;
  }
};

export default experienceReducer;
