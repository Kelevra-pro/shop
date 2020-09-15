import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideAlert } from '../store/actions/alertActions';
import { search } from '../store/actions/productsActions';

export const Pagination = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(s => s.productsReducer.search);
  const sortField = useSelector(s => s.productsReducer.sortField);
  const sortDirection = useSelector(s => s.productsReducer.sortDirection);
  const currentPage = useSelector(s => s.productsReducer.currentPage);
  const nextPageUrl = useSelector(s => s.productsReducer.nextPageUrl);
  const previousPageUrl = useSelector(s => s.productsReducer.previousPageUrl);
  const totalCount = useSelector(s => s.productsReducer.totalCount);
  const pageCount = Math.ceil(totalCount / 10);
  const pages = [];
  const potentialPages = [
    currentPage - 2,
    currentPage - 1,
    currentPage,
    currentPage + 1,
    currentPage + 2
  ];

  potentialPages.forEach(x => {
    if (x > 0 && x <= pageCount) {
      pages.push(x);
    }
  });

  const setSearch = page => {
    dispatch(hideAlert());
    dispatch(search(searchValue, sortField, sortDirection, page));
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className={`page-item ${previousPageUrl ? '' : 'disabled'}`}>
          <button
            className="page-link" aria-label="Previous"
            onClick={() => setSearch(currentPage - 1)}
          >
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>
        {pages.map(page => {
          return (
            <li className={`page-item ${currentPage === page ? 'active' : ''}`}
                key={page}>
              <button className="page-link" onClick={() => setSearch(page)}>
                {page}
              </button>
            </li>
          );
        })}
        <li className={`page-item ${nextPageUrl ? '' : 'disabled'}`}>
          <button className="page-link" aria-label="Next"
                  onClick={() => setSearch(currentPage + 1)}>
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};
