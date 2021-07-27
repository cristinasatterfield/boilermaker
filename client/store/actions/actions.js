// Action Type Constants
import actionTypes from '../constants/constants';

// Person Action Creators
export const setAllPeople = (allPeople) => {
  return {
    type: actionTypes.SET_ALL_PEOPLE,
    allPeople
  }
}

export const _createPerson = (person) => {
  return {
    type: actionTypes.CREATE_PERSON,
    person
  }
}

export const _updatePerson = (person) => {
  return {
    type: actionTypes.UPDATE_PERSON,
    person
  }
}

export const _deletePerson = (person) => {
  return {
    type: actionTypes.DELETE_PERSON,
    person
  }
}
