import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { skillsGroups } from "../data/skillsData.js";

import {
  SECTION,
  SECTION_TITLE,
  BTN_PILL,
  BTN_PILL_ACTIVE,
  CARD,
} from "../styles/uiStyles";

export default function Skills() {
  const pageSize = 4;
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(skillsGroups.length / pageSize);
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const currentGroups = useMemo(
    () => skillsGroups.slice(start, end),
    [start, end]
  );

  const go = (p) => setPage(Math.min(Math.max(1, p), totalPages));

  return (
    <div className={SECTION}>
      <h2 className={SECTION_TITLE}>Skills</h2>

      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="grid gap-4 grid-cols-1 sm:grid-cols-2"
        >
          {currentGroups.map((group) => (
            <div key={group.title} className={`${CARD} p-4`}>
              <h3 className="text-lg font-semibold text-sky-400 mb-3">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((s) => {
                  const Icon = s.icon;
                  return (
                    <span
                      key={s.name}
                      className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/10 px-3 py-1 text-sm bg-white/50 dark:bg-white/5 transition-all hover:scale-105 hover:shadow-sm"
                    >
                      {Icon && (
                        <span
                          className="text-lg"
                          style={{ color: s.color || "#6B7280" }}
                        >
                          <Icon />
                        </span>
                      )}
                      {s.name}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Pagination */}
      {/* Pagination */}
      <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        {/* text is same */}
        <nav className="inline-flex items-center gap-2">
          <button
            onClick={() => go(page - 1)}
            disabled={page === 1}
            className={BTN_PILL}
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              onClick={() => go(n)}
              className={n === page ? BTN_PILL_ACTIVE : BTN_PILL}
              aria-current={n === page ? "page" : undefined}
            >
              {n}
            </button>
          ))}

          <button
            onClick={() => go(page + 1)}
            disabled={page === totalPages}
            className={BTN_PILL}
          >
            Next
          </button>
        </nav>
      </div>
    </div>
  );
}
