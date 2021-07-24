import * as api from '../api/index.js';
import {CREATE,UPDATE,DELETE,FETCH_ALL} from "../Constants/ActionTypes.js"

export const getAllUsers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchUsers();
    console.log(data);

    dispatch({ type: FETCH_ALL , payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createUser = (post) => async (dispatch) => {
  try {
    const { data } = await api.createUser(post);
    dispatch({ type: CREATE , payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateUser = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updateUser(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteUser = (id) => async (dispatch) =>{
  try {
    await api.deleteUser(id);

    dispatch({type: DELETE ,payload:id});
  } catch (error) {
    console.log(error);
  }
} 