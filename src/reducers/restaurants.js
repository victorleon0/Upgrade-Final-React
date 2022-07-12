import {ADD_RESTAURANT, DELETE_RESTAURANT, EDIT_RESTAURANT, UPDATE_RESTAURANT} from '../actions/restaurant';

const initialState = [
  {
    "_id": "62c7ca13bbb43611ebc64ac7",
    "title": "Casa Mario",
    "subtitle": "El rey de las croquetas",
    "price": 25,
    "image": "https://media-cdn.tripadvisor.com/media/photo-s/18/56/5a/17/fachada-de-casa-mario.jpg",
},
{
    "_id": "62c7ca29bbb43610ebc64ac9",
    "title": "Eden Restaurant",
    "subtitle": "El Eden es el terreno de juegos del chef Herman y el sumiller Robin. Su trocito de paraíso tiene un agradable toque vintage y respira calidez",
    "price": 55,
    "image": "https://media-cdn.tripadvisor.com/media/photo-s/0e/4d/31/83/notre-restaurant.jpg",
},
{
    "_id": "62c7ca29bbb43612ebc64ac9",
    "title": "London Stock Restaurant",
    "subtitle": "London Stock brings a relaxed, fine-dining concept to South London with a seasonal 8-course tasting menu. ",
    "price": 40,
    "image": "https://media-cdn.tripadvisor.com/media/photo-s/1a/b8/46/6d/london-stock.jpg",
}
]




export default (state=initialState, {type, payload} = {}) => {
  switch (type) {
    case ADD_RESTAURANT:
     return state.concat({
       ...payload,
       id: new Date()
     })

    case DELETE_RESTAURANT:
      return state.filter((restaurant)=> restaurant.id !== payload)

    case EDIT_RESTAURANT:
      return state.map((restaurant)=> restaurant.id === payload?
              {...restaurant,
               editing: !restaurant.editing}: restaurant )

    case UPDATE_RESTAURANT:
      return state.map((restaurant)=> {
        if(restaurant.id === payload.id) {
          return {
            ...restaurant,
            ...payload,
            editing: !restaurant.editing
          }
        } else return restaurant;
      })
    default:
      return state
  }
}