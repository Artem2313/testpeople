import { combineReducers } from 'redux';
import { ActionType } from './userActions';

// person reducers

export const personReducer = (state = null, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_PERSON_SUCCESS:
      return payload.person;
    default:
      return state;
  }
};

export const personUuidReducer = (state = null, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_PERSON_UUID:
      return payload.uuid;
    default:
      return state;
  }
};

export const errorPersonReducer = (state = null, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_PERSON_START:
      return null;
    case ActionType.FETCH_PERSON_ERROR:
      return payload.error.message;
    default:
      return state;
  }
};

export const loadingPersonReducer = (state = null, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_PERSON_START:
      return true;
    case ActionType.FETCH_PERSON_ERROR:
    case ActionType.FETCH_PERSON_SUCCESS:
      return false;
    default:
      return state;
  }
};

const userReducer = combineReducers({
  person: personReducer,
  errorPerson: errorPersonReducer,
  lodingPerson: loadingPersonReducer,
  uuidPerson: personUuidReducer,
});

export default userReducer;
