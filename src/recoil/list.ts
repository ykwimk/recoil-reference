import { getList, GetListParamsType } from './../api/list';
import { selectorFamily } from 'recoil';

export const getListSelector = selectorFamily<any, any>({
  key: 'useListSelector',
  get: (params: GetListParamsType) => async () => {
    try {
      const response = await getList(params);
      return response.data;
    } catch (e) {
      console.error(e);
    }
  },
});
