import characters from '../../reducers/characters.reducers';
import { GET_CHARACTERS_FAIL, GET_CHARACTERS_PENDING, GET_CHARACTERS_SUCCESS } from '../../constants/character.constants';

describe('Reducers Characters', () => {
  it('Should set loading to true', () => {
    const action = { type: GET_CHARACTERS_PENDING };
    const obj = characters(undefined, action);
    expect(obj.loading).toBe(true);
  });
  it('Should set fail to true with error message', () => {
    const errorMsg = 'Error message';
    const action = { type: GET_CHARACTERS_FAIL, errorMsg };
    const obj = characters(undefined, action);
    expect(obj.fail).toBe(true);
    expect(obj.errorMsg).toBe(errorMsg);
  });
  it('Should set dummy characters', () => {
    const action = { type: GET_CHARACTERS_SUCCESS, data: { results: [{ name: 'test' }], count: 10 }, page: 1 };
    const obj = characters(undefined, action);
    expect(obj.fail).toBe(false);
    expect(obj.loading).toBe(false);
    expect(obj.count).toBe(10);
    expect(obj.currentPage).toBe(1);
    expect(obj.characters.length).toBe(1);
  });
});
