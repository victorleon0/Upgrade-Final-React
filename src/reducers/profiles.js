import {ADD_PROFILE, DELETE_PROFILE, EDIT_PROFILE, UPDATE_PROFILE} from '../actions/profile.js';

const initialState = [
  {
    id: "Tue May 29 2018 15:11:59 GMT+0200 (CEST)",
    name: "Natali",
    picture: "https://imagizer.imageshack.com/v2/280x200q90/924/XTwvEp.png",
    email: "Natail@natali.com",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "Tue May 29 2018 15:18:57 GMT+0200 (CEST)",
    name: "Max",
    picture: "https://imagizer.imageshack.com/v2/280x200q90/924/XhC2bM.png",
    email: "Max@max.com",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: "Tue May 29 2018 15:19:42 GMT+0200 (CEST)",
    name: "Kevin",
    picture: "https://qph.fs.quoracdn.net/main-qimg-33386168736af8b43ae98797c6ef59bc-c",
    email: "Kevin@kevin.com",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: "Tue May 29 2018 15:20:42 GMT+0200 (CEST)",
    name: "John",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjRe8JymSrle-p-WIiDbWbvy8eNJKjSmQXXYpIpUBJyOMjiCg2CA",
    email: "John@John.com",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: "Tue May 29 2018 15:22:42 GMT+0200 (CEST)",
    name: "Cyndi",
    picture: "https://d.ibtimes.co.uk/en/full/226006/rachel-mcadams.jpg?w=736&e=07ccb6a6fdf775eb0b7b78b88cb96ef6",
    email: "Cyndi@Cyndi.com",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: "Tue May 29 2018 15:24:42 GMT+0200 (CEST)",
    name: "Emma",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQdZQY5IiFGLHQOu7vD0zmp13-9f9iIypfGcfoYZ0tD1v4qlov",
    email: "Emma@Emma.com",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }
]




export default (state=initialState, {type, payload} = {}) => {
  switch (type) {
    case ADD_PROFILE:
     return state.concat({
       ...payload,
       id: new Date()
     })

    case DELETE_PROFILE:
      return state.filter((profile)=> profile.id !== payload)

    case EDIT_PROFILE:
      return state.map((profile)=> profile.id === payload?
              {...profile,
               editing: !profile.editing}: profile )

    case UPDATE_PROFILE:
      return state.map((profile)=> {
        if(profile.id === payload.id) {
          return {
            ...profile,
            ...payload,
            editing: !profile.editing
          }
        } else return profile;
      })
    default:
      return state
  }
}