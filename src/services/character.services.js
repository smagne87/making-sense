import axios from 'axios';

const url = process.env.REACT_APP_SW_API_URL;

async function getAllCharacters(page) {
  try {
    const config = {
      params: {
        page,
      },
    };
    const result = await axios.get(`${url}people/`, config);
    return result.data;
  } catch (e) {
    throw e;
  }
}

async function getCharacter(id) {
  try {
    const result = await axios.get(`${url}people/${id}/`);
    return result.data;
  } catch (e) {
    throw e;
  }
}

export const characterServices = {
  getAllCharacters,
  getCharacter,
};
