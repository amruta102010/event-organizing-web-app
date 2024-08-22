import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import userReducer from './reducers/userReducer';
import roleReducer from './reducers/roleReducer';
import { authReducer,  registrationReducer, forgotPasswordReducer} from './reducers/authReducer';



const rootReducer = combineReducers({
  auth: authReducer,
  users: userReducer,
  roles: roleReducer,
  registration: registrationReducer,
  forgotPassword: forgotPasswordReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
