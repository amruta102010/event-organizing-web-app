// import { GET_USERS,GET_A_USER, UPDATE_USER, DELETE_USER } from '../actionTypes';
// import { getAllUsers, fetchUserById, modifyUser, removeUser} from "../../services/userService";

// export const getUsers = () => async (dispatch) => {
//   try {
//     const response = await getAllUsers;
//     dispatch({ type: GET_USERS, payload: response });
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const getUserById = (userId) => async (dispatch) => {
//   try{
//     const response = await fetchUserById(userId);
//     dispatch({ type:GET_A_USER, payload:response});
//   }
//   catch(error){
//     console.error(error);
//   }
// }

// export const updateUser = (userId, userData) => async (dispatch) => {
//   try {
//     const response = await modifyUser(userId, userData);
//     dispatch({ type: UPDATE_USER, payload: response });
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const deleteUser = (userId) => async (dispatch) => {
//   try {
//     await removeUser(userId);
//     dispatch({ type: DELETE_USER, payload: userId });
//   } catch (error) {
//     console.error(error);
//   }
// };
