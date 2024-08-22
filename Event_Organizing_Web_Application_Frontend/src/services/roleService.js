import api from '../api/index';

export const fetchRoles = async () => {
  try {
    const response = await api.get('/roles');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateRole = async (roleId, roleData) => {
  try {
    const response = await api.put(`/roles/${roleId}`, roleData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteRole = async (roleId) => {
  try {
    await api.delete(`/roles/${roleId}`);
  } catch (error) {
    throw error;
  }
};
