import {
  CLEAR_PRODUCTS,
  SEARCH_PRODUCTS,
  SET_LOADING,
  SET_PARAMS
} from '../constants';

const initialState = {
  currentPage: 1,
  loading: false,
  nextPageUrl: '',
  previousPageUrl: '',
  products: [],
  search: '',
  sortField: 'name',
  sortDirection: 'asc',
  totalCount: 0
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case CLEAR_PRODUCTS:
      return {
        ...state,
        currentPage: initialState.currentPage,
        loading: false,
        nextPageUrl: initialState.nextPageUrl,
        previousPageUrl: initialState.previousPageUrl,
        products: initialState.products,
        search: initialState.search,
        sortField: initialState.sortField,
        sortDirection: initialState.sortDirection,
        totalCount: initialState.totalCount
      };
    case SEARCH_PRODUCTS:
      return {
        ...state,
        currentPage: action.currentPage,
        loading: false,
        nextPageUrl: action.nextPageUrl,
        previousPageUrl: action.previousPageUrl,
        products: action.products,
        totalCount: action.totalCount
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case SET_PARAMS:
      return {
        ...state,
        search: action.search,
        sortField: action.sortField,
        sortDirection: action.sortDirection
      };
    default:
      return state;
  }
}
