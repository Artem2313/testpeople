import { combineReducers } from 'redux';
import { ActionType } from './usersActions';

// persons reducers

export const personsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_PERSONS_SUCCESS:
      return payload.persons;
    default:
      return state;
  }
};

export const errorUsersReducer = (state = null, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_PERSONS_START:
      return null;
    case ActionType.FETCH_PERSONS_ERROR:
      return payload.error.message;
    default:
      return state;
  }
};

export const loadingReducer = (state = null, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_PERSONS_START:
      return true;
    case ActionType.FETCH_PERSONS_ERROR:
    case ActionType.FETCH_PERSONS_SUCCESS:
      return false;
    default:
      return state;
  }
};

// sortBy

export const sortByReducer = (state = '', { type, payload }) => {
  switch (type) {
    case ActionType.SORT_BY:
      return payload.sort;
    default:
      return state;
  }
};

// filter

export const surnameFilterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case ActionType.SURNAME_FILTER:
      return payload.filteredSurname;
    default:
      return state;
  }
};

const usersReducer = combineReducers({
  persons: personsReducer,
  sortBy: sortByReducer,
  surnameFilter: surnameFilterReducer,
  errorUsers: errorUsersReducer,
  loadingUsers: loadingReducer,
});

export default usersReducer;
