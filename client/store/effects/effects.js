import axios from 'axios'

// Actions
import {
  setAllPeople,
  _createPerson,
  _updatePerson,
  _deletePerson
} from '../actions/actions'

// Person Thunk Creators
export const fetchAllPeople = () => {
  return async (dispatch) => {
    try {
      const { data: allPeople } = await axios.get('/api/people');
      dispatch(setAllPeople(allPeople));
    } catch (error) {
      console.error(error)
    }
  }
}

export const createPerson = (person) => {
  return async (dispatch) => {
    try {
      const { data: created } = await axios.post('/api/people', person);
      dispatch(_createPerson(created));
    } catch (error) {
      console.error(error)
    }
  }
}

export const updatePerson = (person) => {
  return async (dispatch) => {
    try {
      const { data: updated } = await axios.put(`/api/people/${person.id}`, person);
      dispatch(_updatePerson(updated))
    } catch (error) {
      console.error(error)
    }
  }
}

export const deletePerson = (personId) => {
  return async (dispatch) => {
    try {
      const { data: removed } = await axios.delete(`/api/people/${personId}`);
      dispatch(_deletePerson(removed))
    } catch (error) {
      console.error(error)
    }
  }
}
