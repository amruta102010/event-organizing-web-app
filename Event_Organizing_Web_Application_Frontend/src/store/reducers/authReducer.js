import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actionTypes';
import { FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILURE } from '../actionTypes';
import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from '../actionTypes';

const initialState = {
  user: null,
  isAuthenticated: false,  
  loading: false,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {  
    case LOGIN_REQUEST:
      return { ...state, loading: true };
      
    case LOGIN_SUCCESS:
      return { 
        ...state, 
        loading: false, 
        user: action.payload, 
        isAuthenticated: true,  
        error: null  
      };
      
    case LOGIN_FAILURE:
      return { 
        ...state, 
        loading: false, 
        error: action.payload, 
        isAuthenticated: false  
      };
      
    case LOGOUT:
      return { 
        ...state, 
        user: null, 
        isAuthenticated: false,  
        error: null 
      };

    default:
      return state;
  }
};



export const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { ...state, loading: true };
    case REGISTER_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case REGISTER_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};


export const forgotPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_REQUEST:
      return { ...state, loading: true };
    case FORGOT_PASSWORD_SUCCESS:
      return { ...state, loading: false, success: true };
    case FORGOT_PASSWORD_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};
