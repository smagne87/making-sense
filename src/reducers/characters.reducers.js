import {
  GET_CHARACTERS_FAIL,
  GET_CHARACTERS_PENDING,
  GET_CHARACTERS_SUCCESS,
} from '../constants/character.constants';

const initialState = {
  loading: true,
  fail: false,
  errorMsg: '',
  characters: [],
  count: 0,
  currentPage: 1,
};

const characters = (state = initialState, action) => {
  if (!action || !action.type) {
    return state;
  }
  switch (action.type) {
    case GET_CHARACTERS_FAIL:
      return {
        ...state,
        fail: true,
        loading: false,
        errorMsg: action.errorMsg,
        count: 0,
        currentPage: 1,
      };
    case GET_CHARACTERS_PENDING:
      return {
        ...state,
        fail: false,
        loading: true,
      };
    case GET_CHARACTERS_SUCCESS:
      return {
        ...state,
        fail: false,
        loading: false,
        characters: action.data.results,
        count: action.data.count,
        currentPage: action.page,
      };
    default:
      return state;
  }
};

export default characters;
