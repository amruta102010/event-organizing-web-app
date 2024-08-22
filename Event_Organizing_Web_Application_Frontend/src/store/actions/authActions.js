import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actionTypes';
import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from '../actionTypes';
import { FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILURE } from '../actionTypes';
import { loginService } from '../../services/authService';
import { registerService } from '../../services/authService';
import { sendPasswordResetEmailService } from '../../services/authService';
import { LOGOUT } from '../actionTypes';

export const login = (email, password) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const data = await loginService(email, password);
    const { token,roleId,userId } = data;
    
    localStorage.setItem('jwtToken', token);
    localStorage.setItem('role', roleId);
    localStorage.setItem('user', userId);

    dispatch({ type: LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error.message });
  }
};
  

export const register = (userData) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  try {
    const user = await registerService(userData);
    dispatch({ type: REGISTER_SUCCESS, payload: user });
  } catch (error) {
    dispatch({ type: REGISTER_FAILURE, error: error.message }); 
  }
};

export const forgotPassword = (email) => async (dispatch) => {
  dispatch({ type: FORGOT_PASSWORD_REQUEST });  
  try {
    await sendPasswordResetEmailService(email);
    dispatch({ type: FORGOT_PASSWORD_SUCCESS });
  } catch (error) {
    dispatch({ type: FORGOT_PASSWORD_FAILURE, error });
  }
};

export const logout = () => (dispatch) => {
  
  localStorage.removeItem('jwtToken');
  
  dispatch({ type: LOGOUT });
};