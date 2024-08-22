import { GET_ROLES, UPDATE_ROLE, DELETE_ROLE } from '../actionTypes';
import { fetchRoles, updateRole as updateRoleService, deleteRole as deleteRoleService } from '../../services/roleService';

export const getRoles = () => async (dispatch) => {
  try {
    const response = await fetchRoles();
    dispatch({ type: GET_ROLES, payload: response });
  } catch (error) {
    console.error(error);
  }
};

export const updateRole = (roleId, roleData) => async (dispatch) => {
  try {
    const response = await updateRoleService(roleId, roleData);
    dispatch({ type: UPDATE_ROLE, payload: response });
  } catch (error) {
    console.error(error);
  }
};

export const deleteRole = (roleId) => async (dispatch) => {
  try {
    await deleteRoleService(roleId);
    dispatch({ type: DELETE_ROLE, payload: roleId });
  } catch (error) {
    console.error(error);
  }
};
