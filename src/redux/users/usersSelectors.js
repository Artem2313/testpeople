import { createSelector } from 'reselect';

export const getPersons = state => state.users.persons;

export const surnameFilter = state => state.users.surnameFilter;

export const sortBy = state => state.users.sortBy;

export const filteredSurnames = createSelector(
  [getPersons, surnameFilter],
  (persons, filteredSurname) =>
    persons.filter(person =>
      person.name.last.toLowerCase().includes(filteredSurname.toLowerCase()),
    ),
);

export const sortBySelector = createSelector(
  [sortBy, filteredSurnames],
  (sort, filtered) => {
    switch (sort) {
      case 'nameAsc':
        return filtered.slice().sort((a, b) => {
          const nameA = a.name.last.toLowerCase();
          const nameB = b.name.last.toLowerCase();
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        });
      case 'nameDsc':
        return filtered.slice().sort((a, b) => {
          const nameA = a.name.last.toLowerCase();
          const nameB = b.name.last.toLowerCase();
          if (nameA > nameB) return -1;
          if (nameA < nameB) return 1;
          return 0;
        });
      case 'ageAsc':
        return filtered.slice().sort((a, b) => {
          const ageA = a.dob.date;
          const ageB = b.dob.date;
          return new Date(ageB) - new Date(ageA);
        });
      case 'ageDsc':
        return filtered.slice().sort((a, b) => {
          const ageA = a.dob.date;
          const ageB = b.dob.date;
          return new Date(ageA) - new Date(ageB);
        });
      case 'clear':
        return filtered;

      default:
        return filtered;
    }
  },
);
