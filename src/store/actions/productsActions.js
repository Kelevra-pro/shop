import {
  CLEAR_PRODUCT,
  SEARCH_PRODUCT,
  SET_LOADING,
  // SET_SORT,
  URL
} from '../constants';
import axios from 'axios';

export const search = value => {
  return async dispatch => {
    dispatch(setLoading());

    const response = await axios.get(`${URL}?${value}`);

    console.log(response.data);

    dispatch({
      type: SEARCH_PRODUCT,
      currentPage: response.data.current_page,
      nextPageUrl: response.data.next_page_url,
      previousPageUrl: response.data.previous_page_url,
      products: response.data.products,
      totalCount: response.data.total_count
    });
  };
};

const setLoading = () => {
  return { type: SET_LOADING };
};

export const clearProducts = () => {
  return { type: CLEAR_PRODUCT };
};