import axios from 'axios';
import {
  fetchPersonsStart,
  fetchPersonsSuccess,
  fetchPersonsError,
} from './usersActions';

export const fetchUsers = () => dispatch => {
  dispatch(fetchPersonsStart());

  axios
    .get('https://randomuser.me/api/?results=50')
    .then(response => dispatch(fetchPersonsSuccess(response.data.results)))
    .catch(error => dispatch(fetchPersonsError(error)));
};

export default fetchUsers;
