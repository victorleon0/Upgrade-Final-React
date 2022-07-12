import { ADD_EXPERIENCE, DELETE_EXPERIENCE, EDIT_EXPERIENCE, UPDATE_EXPERIENCE } from "./experience.actions";

const initialState = [
  {
    _id: "62c7ca13bbb43676ebc64ac7",
    title: "Playa y montaña",
    subtitle: "Los contrarios se atraen",
    price: 250,
    image: "https://www.centrocomercialbulevargetafe.com/wp-content/uploads/2018/03/Playa-o-monta%C3%B1a-1000x480.jpg",
    categoryId: ["62c70e86cb3066342e376f07", "62c70eb3cb3066342e376f0a"],
    idioma: "Castellano",
  },
  {
    _id: "62c7ca29bbb43676ebc64ac9",
    title: "Playa y ciudad",
    subtitle: "La playa en la ciudad",
    price: 300,
    image: "https://construirunmundonuevo.com/wp-content/uploads/2015/08/HNL_01.jpg",
    categoryId: ["62c70e86cb3066342e376f07", "62c70ed8cb3066342e376f0c"],
    idioma: "Castellano",
  },
  {
    _id: "62c7ca29bbb43667ebc64ac9",
    title: "Montaña y ciudad",
    subtitle: "Una ciudad en las montañas",
    price: 400,
    image: "https://viajandoconfran.com/wp-content/uploads/2015/12/basin-1059909_1920.jpg",
    categoryId: ["62c70eb3cb3066342e376f0a", "62c70ed8cb3066342e376f0c"],
    idioma: "Castellano",
  },
];

const experienceReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_EXPERIENCE:
      return state.concat({
        ...payload,
        id: new Date(),
      });

    case DELETE_EXPERIENCE:
      return state.filter((experience) => experience.id !== payload);

    case EDIT_EXPERIENCE:
      return state.map((experience) =>
        experience.id === payload ? { ...experience, editing: !experience.editing } : experience
      );

    case UPDATE_EXPERIENCE:
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