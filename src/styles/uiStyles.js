// src/styles/uiStyles.js

// Base “card” style used across the app
export const CARD = [
  "rounded-2xl",
  "border border-slate-200 dark:border-white/10",
  "bg-white/95 dark:bg-slate-900/70",
  "shadow-sm dark:shadow-none",
  "backdrop-blur-sm",
].join(" ");
// Section container (title + content)
export const SECTION = "space-y-6";

// Section titles and subtitles
export const SECTION_TITLE = "text-2xl md:text-3xl font-bold";
export const SECTION_SUBTITLE =
  "mt-2 text-slate-600 dark:text-slate-300/90 text-base";
// Generic button base (for all clickable buttons/links)
export const BTN_BASE = [
  "inline-flex items-center justify-center",
  "rounded-xl px-4 py-2 text-sm font-medium",
  "transition",
  "focus-visible:outline-none",
  "focus-visible:ring-2 focus-visible:ring-sky-500",
  "focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900",
  "disabled:opacity-50 disabled:cursor-not-allowed",
].join(" ");
// Primary CTA (blue)
export const BTN_PRIMARY =
  BTN_BASE + " bg-sky-600 text-white hover:bg-sky-500 shadow-sm";
// Secondary / outline button
export const BTN_SECONDARY =
  BTN_BASE +
  " border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/60 hover:bg-slate-50 dark:hover:bg-slate-800";
// Pagination pill buttons
export const BTN_PILL =
  BTN_BASE +
  " px-3 py-2 border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/60 hover:bg-slate-50 dark:hover:bg-slate-800";
// Active page pill
export const BTN_PILL_ACTIVE =
  BTN_BASE + " px-3 py-2 bg-sky-600 text-white border border-sky-600";
// Small chip (for tech/status tags)
export const CHIP =
  "inline-flex items-center rounded-full px-2.5 py-1 text-xs border border-slate-200 dark:border-white/10 bg-slate-50/80 dark:bg-slate-900/70";
// (keep your existing CARD, SECTION, BUTTON, CHIP etc. as-is)

// 🔹 App-level background (previous dark-mode branch from App.jsx)
export const APP_SHELL =
  "min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100";

// 🔹 Header shell (previous header class from Header.jsx)
export const HEADER_BAR =
  "sticky top-0 z-40 backdrop-blur " +
  "supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-slate-900/60 " +
  "bg-white/90 dark:bg-slate-900/60 " +
  "text-slate-900 dark:text-slate-100 " +
  "border-b border-slate-200 dark:border-white/10";
