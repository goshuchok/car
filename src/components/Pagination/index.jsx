import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Pagination.module.scss';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={styles.pagination_nav}>
      <ul className={styles.pagination_ul}>
        {pageNumbers.map((number) => (
          <li key={number}>
            <Link
              to={number}
              className={`${styles.pagination_list} ${
                currentPage === number ? `${styles.active}` : ''
              }`}
              onClick={() => paginate(number)}
            >
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
