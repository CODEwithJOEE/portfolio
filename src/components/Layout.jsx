import { CARD } from "../styles/uiStyles";
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
        <footer className="mx-auto max-w-6xl px-4 pb-10 text-xs opacity-70 text-slate-600 dark:text-slate-400">
          {footer} © {new Date().getFullYear()} Joe Portfolio. All rights
          reserved.
        </footer>
      )}
    </div>
  );
}

function Card({ children, className = "" }) {
  return (
    <section className={[CARD, "p-5 md:p-8", className].join(" ")}>
      {children}
    </section>
  );
}
