import { usePost } from "../context/PostContext";
import "./pagination.css";

function Pagination({ currentPage, setCurrentPage }) {
  const { posts } = usePost();
  
  
  const cardsPerPage = 6;
  const calculatedPages = Math.ceil(posts.length / cardsPerPage);
  const totalPages = Math.max(calculatedPages, 3); 

  return (
    <div className="pagination">
      {/* Previous Arrow Button */}
      {currentPage > 1 && (
        <button
          className="nav-arrow"
          onClick={() => setCurrentPage(currentPage - 1)}
          aria-label="Previous page"
        >
          «
        </button>
      )}
      {[...Array(totalPages)].map((_, index) => {
        const pageNumber = index + 1;
        return (
          <button
            key={pageNumber}
            className={`page-number ${currentPage === pageNumber ? "active" : ""}`}
            onClick={() => setCurrentPage(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      })}
      {currentPage < totalPages && (
        <button
          className="nav-arrow"
          onClick={() => setCurrentPage(currentPage + 1)}
          aria-label="Next page"
        >
          »
        </button>
      )}
    </div>
  );
}

export default Pagination;