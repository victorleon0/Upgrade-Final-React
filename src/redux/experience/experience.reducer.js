import * as actions from './experience.actions';

const initialState = {

};

const experienceReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.ADD_EXPERIENCE:
      return state.concat({
        ...payload,
        id: new Date(),
      });

    case actions.DELETE_EXPERIENCE:
      return state.filter((experience) => experience.id !== payload);

    case actions.EDIT_EXPERIENCE:
      return state.map((experience) =>
        experience.id === payload ? { ...experience, editing: !experience.editing } : experience
      );

    case actions.CREATE_EXPERIENCE:
      return state.map((experience) => {
        if (experience.id === payload.id) {
          return {
            ...experience,
            ...payload,
            editing: !experience.editing,
          };
        } else return experience;
      });
    default:
      return state;
  }
};

export default experienceReducer;