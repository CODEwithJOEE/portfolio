export default function Layout({ left, right, footer }) {
  return (
    <div>
      <main
        className="
          mx-auto max-w-6xl px-4 py-6
          grid gap-6
          grid-cols-1
          md:grid-cols-[320px_minmax(0,_1fr)]
        "
      >
        {/* Left column */}
        <Card className="p-0">{left}</Card>

        {/* Right column */}
        <Card className="min-h-[380px]">{right}</Card>
      </main>

      {footer && (
        <footer className="mx-auto max-w-6xl px-4 pb-10 opacity-70 text-xs">
          {footer} © {new Date().getFullYear()} Joe Portfolio. All rights
          reserved.
        </footer>
      )}
    </div>
  );
}

export function Card({ children, className = "" }) {
  return (
    <div
      className={[
        "rounded-2xl",
        // visible border in both modes
        "border border-slate-200 dark:border-slate-700",
        // ⬅️ white in light mode, dark panel in dark mode
        "bg-white dark:bg-slate-900",
        // subtle shadow
        "shadow-[0_18px_45px_rgba(15,23,42,0.08)] dark:shadow-[0_18px_45px_rgba(0,0,0,0.75)]",
        "backdrop-blur-sm",
        "p-5 md:p-8",
        "overflow-hidden",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
