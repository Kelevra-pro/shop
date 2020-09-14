import {
  CLEAR_PRODUCT,
  SEARCH_PRODUCT,
  SET_LOADING,
  SET_SORT
} from '../constants';

const initialState = {
  currentPage: '',
  loading: false,
  nextPageUrl: '',
  previousPageUrl: '',
  products: [],
  sort: '',
  totalCount: 0
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case CLEAR_PRODUCT:
      return {
        ...state,
        currentPage: initialState.currentPage,
        nextPageUrl: initialState.nextPageUrl,
        previousPageUrl: initialState.previousPageUrl,
        products: initialState.products,
        totalCount: initialState.totalCount
      };
    case SEARCH_PRODUCT:
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
    case SET_SORT:
      return {
        ...state,
        sort: action.sort
      };
    default:
      return state;
  }
}
