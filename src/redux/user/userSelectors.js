import { createSelector } from 'reselect';

export const getPersons = state => state.users.persons;

export const getUuid = state => state.user.uuidPerson;

// export const getPerson = state => state.user.person;

export const getPerson = createSelector(
  [getPersons, getUuid],
  (persons, uuid) => persons.find(person => person.login.uuid === uuid),
);
