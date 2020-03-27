import {
  GET_CHARACTERS_FAIL,
  GET_CHARACTERS_PENDING,
  GET_CHARACTERS_SUCCESS,
  GET_CHARACTER_FAIL,
  GET_CHARACTER_PENDING,
  GET_CHARACTER_SUCCESS,
} from '../constants/character.constants';
import { characterServices } from '../services';

function getAllCharacters(page) {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_CHARACTERS_PENDING });
      const result = await characterServices.getAllCharacters(page);
      dispatch({ type: GET_CHARACTERS_SUCCESS, data: result, page });
    } catch (e) {
      dispatch({ type: GET_CHARACTERS_FAIL, e, errorMsg: 'Something went wrong!' });
    }
  };
}

function getCharacter(id) {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_CHARACTER_PENDING });
      const result = await characterServices.getCharacter(id);
      dispatch({ type: GET_CHARACTER_SUCCESS, data: result });
    } catch (e) {
      dispatch({ type: GET_CHARACTER_FAIL, e, errorMsg: 'Something went wrong!' });
    }
  };
}

export const characterActions = {
  getAllCharacters,
  getCharacter,
};
