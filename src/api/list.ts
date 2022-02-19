import axios from 'axios';

export interface GetListParamsType {
  perPage?: string;
  page?: string;
}

export const getList = ({ perPage, page }: GetListParamsType) => {
  return axios.get('https://api.punkapi.com/v2/beers', {
    params: { per_page: perPage, page },
  });
};
