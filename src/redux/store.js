import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import authReducer from './auth/authReducer';
import usersReducer from './users/usersReducer';
import userReducer from './user/userReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  user: userReducer,
  isAuth: authReducer,
});

const middleware = [ReduxThunk];

const enhancer = applyMiddleware(...middleware);

const superenhancer = composeWithDevTools(enhancer);

const store = createStore(rootReducer, superenhancer);

export default store;
