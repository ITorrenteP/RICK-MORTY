import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actionTypes";
import axios from "axios";

const URL = "http://localhost:3001/rickandmorty";

export function addFav(character) {
  return async function (dispatch) {
    try {
      const { data } = await axios.post(`${URL}/fav`, character);
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function removeFav(id) {
  return async (dispatch) => {
    const { data } = await axios.delete(`${URL}/fav${id}`);
    return dispatch({
      type: REMOVE_FAV,
      payload: data,
    });
  };
}

export function filterCards(gender) {
  return {
    type: FILTER,
    payload: gender,
  };
}

export function orderCards(payload) {
  return {
    type: ORDER,
    payload,
  };
}
