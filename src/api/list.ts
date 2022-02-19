import axios from 'axios';

export const getList = () => {
  return axios.get('https://api.punkapi.com/v2/beers');
};
