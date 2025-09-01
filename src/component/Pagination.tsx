'use client'
type Props = {
  currentPage: number;
  totalPages: number;
};

export default function Pagination({ currentPage, totalPages }: Props) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="pagination" role="navigation" aria-label="pagination">
      <a
        className={`pagination__prev ${currentPage === 1 ? "is-disabled" : ""}`}
        href={currentPage === 1 ? undefined : `?page=${currentPage - 1}`}
        aria-disabled={currentPage === 1}
        onClick={(e) => {
          if (currentPage === 1) e.preventDefault(); // クリック無効化
        }}
      />

      <ul className="pagination__list">
        {pages.map((page) => (
          <li key={page}>
            <a
              className={`pagination__link ${page === currentPage ? "is-current" : ""}`}
              href={`?page=${page}`}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>

      <a
        className={`pagination__next ${currentPage === totalPages ? "is-disabled" : ""}`}
        href={currentPage === totalPages ? undefined : `?page=${currentPage + 1}`}
        aria-disabled={currentPage === totalPages}
        onClick={(e) => {
          if (currentPage === totalPages) e.preventDefault();
        }}
      />
    </nav>
  );
}
