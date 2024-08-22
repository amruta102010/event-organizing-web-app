
import { login, registerUser as registerApiUser, sendPasswordResetEmail as apiSendPasswordResetEmail } from '../api/auth';

export const loginService = async (email, password) => {
  try {
    const data = await login(email, password);
    return data;
  } catch (error) {
    throw error;
  }
};

export const registerService = async (userData) => {
  try {
    const data = await registerApiUser(userData);
    return data;
  } catch (error) {
    throw error;
  }
};

export const sendPasswordResetEmailService = async (email) => {
  try {
    const data = await apiSendPasswordResetEmail(email);
    return data;
  } catch (error) {
    throw error;
  }
};