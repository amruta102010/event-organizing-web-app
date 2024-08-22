import api from './index';
import axios from 'axios'; 

export const login = async (email, password) => {
  const response = await api.post('/auth/login', { email, password });
  return response.data;
};

export const registerUser = async (userData) => {
  const response = await api.post('/auth/register', userData);
  return response.data;
};

export const sendPasswordResetEmail = async (email) => {
  try {
    const response = await axios.post('http://localhost:3000/auth/forgot-password', { email });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network Error');
  }
};

export const fetchProtectedData = async () => {
  try {
    const response = await api.get('/protected-endpoint');
    return response.data;
  } catch (error) {
    console.error('Error fetching protected data:', error);
    throw error;
  }
};
