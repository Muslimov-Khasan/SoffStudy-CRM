import React, { useState } from 'react';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const data = [...Array(50).keys()]; 
  // Logic for displaying current items

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const renderPageNumbers = pageNumbers.map(number => (
    <button
      key={number}
      onClick={() => setCurrentPage(number)}
      className={currentPage === number ? 'active' : ''}
    >
      {number}
    </button>
  ));

  return (
    <div className="wrapper__pagination">
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Prev
        </button>
        {renderPageNumbers}
        <button
          onClick={handleNextPage}
          disabled={currentPage === pageNumbers.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;