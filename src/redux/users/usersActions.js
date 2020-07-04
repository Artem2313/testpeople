export const ActionType = {
  FETCH_PERSONS_START: 'FETCH_PERSONS_START',
  FETCH_PERSONS_SUCCESS: 'FETCH_PERSONS_SUCCESS',
  FETCH_PERSONS_ERROR: 'FETCH_PERSONS_ERROR',
  SURNAME_FILTER: 'SURNAME_FILTER',
  SORT_BY: 'SORT_BY',
};

// persons actions

export const fetchPersonsStart = () => ({
  type: ActionType.FETCH_PERSONS_START,
});

export const fetchPersonsSuccess = persons => ({
  type: ActionType.FETCH_PERSONS_SUCCESS,
  payload: { persons },
});

export const fetchPersonsError = error => ({
  type: ActionType.FETCH_PERSONS_ERROR,
  payload: { error },
});

// surnameFilter

export const surnameFilter = filteredSurname => ({
  type: ActionType.SURNAME_FILTER,
  payload: { filteredSurname },
});

// sort by

export const sortBy = sort => ({
  type: ActionType.SORT_BY,
  payload: { sort },
});
