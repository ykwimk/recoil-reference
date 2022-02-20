import { atom, selector } from 'recoil';
import axios from 'axios';

export const getListState = atom<any[]>({
  key: 'getListState',
  default: [],
});

export const getListSelector = selector({
  key: 'getListSelector',
  get: async () => {
    try {
      const { data } = await axios.get('https://api.punkapi.com/v2/beers');
      return data;
    } catch (e) {
      console.error(e);
    }
  },
});
