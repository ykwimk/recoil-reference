import { atom, selectorFamily } from 'recoil';
import { getList, GetListParamsType } from '../api/list';

export const getListState = atom<any[]>({
  key: 'getListState',
  default: [],
});

export const getListSelector = selectorFamily({
  key: 'getListSelector',
  get: (params) => async () => {
    if (!params) return null;
    try {
      const { data } = await getList(params as GetListParamsType);
      return data;
    } catch (e) {
      console.error(e);
    }
  },
});
