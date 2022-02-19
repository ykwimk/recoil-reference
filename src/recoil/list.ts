import { getList } from './../api/list';
import { selector } from 'recoil';

export const getListSelector = selector<any>({
  key: 'useListSelector',
  get: async () => {
    try {
      const response = await getList();
      return response.data;
    } catch (e) {
      console.error(e);
    }
  },
});
