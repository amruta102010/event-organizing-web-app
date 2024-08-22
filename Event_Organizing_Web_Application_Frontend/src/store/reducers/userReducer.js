import { GET_USERS, GET_A_USER, UPDATE_USER, DELETE_USER } from '../actionTypes';

const initialState = {
  users: [],
  selectedUser: null, 
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload };
    case GET_A_USER:
      return { ...state, selectedUser: action.payload };
    case UPDATE_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};

export default userReducer;
