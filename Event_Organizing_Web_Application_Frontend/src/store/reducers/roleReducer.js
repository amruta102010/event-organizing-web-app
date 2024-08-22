import { GET_ROLES, UPDATE_ROLE, DELETE_ROLE } from '../actionTypes';

const initialState = {
  roles: [],
};

const roleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROLES:
      return { ...state, roles: action.payload };
    case UPDATE_ROLE:
      return {
        ...state,
        roles: state.roles.map((role) =>
          role.id === action.payload.id ? action.payload : role
        ),
      };
    case DELETE_ROLE:
      return {
        ...state,
        roles: state.roles.filter((role) => role.id !== action.payload),
      };
    default:
      return state;
  }
};

export default roleReducer;
