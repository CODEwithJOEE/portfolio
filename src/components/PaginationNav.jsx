// src/components/PaginationNav.jsx
export default function PaginationNav({
  page,
  totalPages,
  onPageChange,
  ariaLabel = "Pagination",
  navClass = "inline-flex items-center gap-2",
  prevNextClass = "px-3 py-2 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 disabled:opacity-50",
  pageClass,
  pageActiveClass,
}) {
  // base styles for page buttons (if not provided)
  const basePageClass =
    pageClass ||
    "px-3 py-2 rounded-xl border text-sm bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10";

  const activePageClass =
    pageActiveClass || "bg-sky-600 text-white border-sky-600";

  const go = (p) => {
    const next = Math.min(Math.max(1, p), totalPages);
    if (next !== page) onPageChange(next);
  };

  return (
    <nav className={navClass} aria-label={ariaLabel}>
      <button
        onClick={() => go(page - 1)}
        disabled={page === 1}
        className={prevNextClass}
      >
        Prev
      </button>

      <div className="inline-flex items-center gap-1">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
          <button
            key={n}
            onClick={() => go(n)}
            className={`${basePageClass} ${
              n === page
                ? activePageClass + " !bg-sky-600 !text-white !border-sky-600"
                : ""
            }`}
            aria-current={n === page ? "page" : undefined}
          >
            {n}
          </button>
        ))}
      </div>

      <button
        onClick={() => go(page + 1)}
        disabled={page === totalPages}
        className={prevNextClass}
      >
        Next
      </button>
    </nav>
  );
}
