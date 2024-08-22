import api from './index';


export const fetchUsers = async () => {
  const response = await api.get('/users');
  return response.data;
};


export const getUserById = async (userId) => {
  const response = await api.get(`/users/${userId}`);
  return response.data;
};


export const updateUser = async (userId, userData) => {
  const response = await api.put(`/users/${userId}`, userData);
  return response.data;
};


export const deleteUser = async (userId) => {
  await api.delete(`/users/${userId}`);
};
