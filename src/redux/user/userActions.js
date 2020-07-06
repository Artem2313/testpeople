export const ActionType = {
  FETCH_PERSON_START: 'FETCH_PERSON_START',
  FETCH_PERSON_SUCCESS: 'FETCH_PERSON_SUCCESS',
  FETCH_PERSON_ERROR: 'FETCH_PERSON_ERROR',
  FETCH_PERSON_UUID: 'FETCH_PERSON_UUID',
};

// persons actions

export const fetchPersonStart = () => ({
  type: ActionType.FETCH_PERSON_START,
});

export const fetchPersonSuccess = person => ({
  type: ActionType.FETCH_PERSON_SUCCESS,
  payload: { person },
});

export const fetchPersonError = error => ({
  type: ActionType.FETCH_PERSON_ERROR,
  payload: { error },
});

export const personUuid = uuid => ({
  type: ActionType.FETCH_PERSON_UUID,
  payload: { uuid },
});
