import {
  SET_ALL_PEOPLE,
  CREATE_PERSON,
  UPDATE_PERSON,
  DELETE_PERSON,
  // ADD_FAVORITE_RESTAURANT,
  // REMOVE_FAVORITE_RESTAURANT
} from '../constants/constants'

export default (state = [], action) => {
  switch (action.type) {
    case SET_ALL_PEOPLE:
      return action.allPeople;
    case CREATE_PERSON:
      return [...state, action.person];
    case UPDATE_PERSON:
      return state.map(person =>
        (person.id === action.person.id ? action.person : person));
    case DELETE_PERSON:
      return state.filter(person => person.id !== action.person.id);
    default:
      return state
  }
}
