import axios from 'axios';
import {
  fetchPersonStart,
  fetchPersonSuccess,
  fetchPersonError,
} from './userActions';

export const fetchUser = uuid => dispatch => {
  dispatch(fetchPersonStart());

  axios
    .get(`https://randomuser.me/api/?results=50/${uuid}`)
    .then(response => dispatch(fetchPersonSuccess(response.data.results[0])))
    .catch(error => dispatch(fetchPersonError(error)));
};

export default fetchUser;
