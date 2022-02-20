import axios from 'axios';

export interface GetListParamsType {
  perPage?: number;
  page?: number;
}

export const getList = ({ perPage, page }: GetListParamsType) => {
  return axios.get('https://api.punkapi.com/v2/beers', {
    params: { per_page: perPage, page },
  });
};
