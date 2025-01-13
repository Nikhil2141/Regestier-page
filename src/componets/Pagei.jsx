import { useState } from 'react';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 6;

  const renderPageNumbers = () => {
    const pages = [];
    
    // Always show first page
    pages.push(
      <span
        key={1}
        onClick={() => setCurrentPage(1)}
        className={`px-3 py-1 mx-1 cursor-pointer rounded ${
          currentPage === 1
            ? "bg-[#4B006E1F] text-[#4B006E] font-body font-normal text-sm leading-[19.07px]"
            : "text-[#5D6166] font-body font-normal text-sm leading-[19.07px]"
        }`}
      >
        1
      </span>
    );

    // Show second page if current page is 1 or 2
    if (currentPage <= 2) {
      pages.push(
        <span
          key={2}
          onClick={() => setCurrentPage(2)}
          className={`px-3 py-1 mx-1 cursor-pointer rounded ${
            currentPage === 2
              ? "bg-[#4B006E1F] text-[#4B006E] font-body font-normal text-sm leading-[19.07px]"
              : "text-[#5D6166] font-body font-normal text-sm leading-[19.07px]"
          }`}
        >
          2
        </span>
      );
    }

    // Show ellipsis after page 2 if current page > 2
    if (currentPage > 2) {
      pages.push(
        <span key="ellipsis1" className="px-3 py-1 mx-1 text-[#5D6166] font-body font-normal text-sm leading-[19.07px]">
          ...
        </span>
      );
    }

    // Show current page if it's not 1, 2 or last page
    if (currentPage > 2 && currentPage < totalPages) {
      pages.push(
        <span
          key={currentPage}
          onClick={() => setCurrentPage(currentPage)}
          className="bg-[#4B006E1F] text-[#4B006E] font-body font-normal text-sm leading-[19.07px] px-3 py-1 mx-1 cursor-pointer rounded"
        >
          {currentPage}
        </span>
      );
    }

    // Show ellipsis before last page if current page < totalPages - 1
    if (currentPage < totalPages - 1) {
      pages.push(
        <span key="ellipsis2" className="px-3 py-1 mx-1 text-[#5D6166] font-body font-normal text-sm leading-[19.07px]">
          ...
        </span>
      );
    }

    // Always show last page
    pages.push(
      <span
        key={totalPages}
        onClick={() => setCurrentPage(totalPages)}
        className={`px-3 py-1 mx-1 cursor-pointer rounded ${
          currentPage === totalPages
            ? "bg-[#4B006E1F] text-[#4B006E] font-body font-normal text-sm leading-[19.07px]"
            : "text-[#5D6166] font-body font-normal text-sm leading-[19.07px]"
        }`}
      >
        {totalPages}
      </span>
    );

    return pages;
  };

  return (
    <div className="flex items-center">
      {renderPageNumbers()}
    </div>
  );
};

export default Pagination;