import { GET_TECHS, ADD_TECH, DELETE_TECH, SET_LOADING, TECH_ERROR } from './types';

//Get techs from server
export const getTechs = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch('/techs');
    const data = await res.json();

    dispatch({
      type: GET_TECHS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TECH_ERROR,
      payload: error.response.statusText,
    });
  }
};
//set Lodaing to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
