import {
  CLEAR_PRODUCTS,
  SEARCH_PRODUCTS,
  SET_LOADING,
  SET_PARAMS,
  URL
} from '../constants';
import axios from 'axios';
import { showAlert } from './alertActions';

export const search = (value, sortField, sortDirection, page = 1) => {
  return dispatch => {
    dispatch(setLoading());

    dispatch(setParams(value, sortField, sortDirection));

    const search = value === '' ? '' : `search=${value}&`;
    const url = `${URL}?${search}sort_field=${sortField}&sort_direction=${sortDirection}&page=${page}`;

    axios.get(url).then(response => {
        dispatch({
          type: SEARCH_PRODUCTS,
          currentPage: response.data.current_page,
          nextPageUrl: response.data.next_page_url,
          previousPageUrl: response.data.previous_page_url,
          products: response.data.products,
          totalCount: response.data.total_count
        });
      }
    ).catch((error) => {
      dispatch(showAlert(error.response.data));
      dispatch(clearProducts());
    });
  };
};

const setLoading = () => {
  return { type: SET_LOADING };
};

const setParams = (search, sortField, sortDirection) => {
  return {
    type: SET_PARAMS,
    search,
    sortField,
    sortDirection
  };
};

const clearProducts = () => {
  return {
    type: CLEAR_PRODUCTS
  };
};
