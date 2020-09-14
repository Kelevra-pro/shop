// import { SEARCH_PRODUCTS, CLEAR_PRODUCTS, SET_LOADING } from '../../store/actions/types';
//
// const handlers = {
//   [SEARCH_PRODUCTS]: (state, { payload }) => ({
//     ...state,
//     products: payload.products,
//     loading: false
//   }),
//   [SET_LOADING]: state => ({ ...state, loading: true }),
//   [CLEAR_PRODUCTS]: state => ({ ...state, products: [] }),
//   DEFAULT: state => state
// };
//
// export const productsReducer = (state, action) => {
//   const handler = handlers[action.type] || handlers.DEFAULT;
//   return handler(state, action);
// };
