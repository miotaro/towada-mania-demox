type Props = {
  currentPage: number;
  totalPages: number;
};

export default function Pagination({ currentPage, totalPages }: Props) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="pagination" role="navigation" aria-label="pagination">
      <a
        className="pagination__prev"
        href={`?page=${currentPage - 1}`}
        aria-disabled={currentPage === 1}
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
        className="pagination__next"
        href={`?page=${currentPage + 1}`}
        aria-disabled={currentPage === totalPages}
      />
    </nav>
  );
}
