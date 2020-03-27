import {
  GET_CHARACTER_FAIL,
  GET_CHARACTER_PENDING,
  GET_CHARACTER_SUCCESS,
} from '../constants/character.constants';

const initialState = {
  loading: true,
  fail: false,
  errorMsg: '',
  character: {},
};

const character = (state = initialState, action) => {
  if (!action || !action.type) {
    return state;
  }
  switch (action.type) {
    case GET_CHARACTER_FAIL:
      return {
        ...state,
        fail: true,
        loading: false,
        errorMsg: action.errorMsg,
      };
    case GET_CHARACTER_PENDING:
      return {
        ...state,
        fail: false,
        loading: true,
      };
    case GET_CHARACTER_SUCCESS:
      return {
        ...state,
        fail: false,
        loading: false,
        character: action.data,
      };
    default:
      return state;
  }
};

export default character;
