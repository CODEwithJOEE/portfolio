// src/styles/motionPresets.js

// === Shared modal animation presets ===

// Backdrop / overlay (same as Certificates modal)
export const MODAL_BACKDROP_MOTION = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

// Modal body (same as Certificates modal)
export const MODAL_BODY_MOTION = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.9, opacity: 0 },
};

// Shared transition for modals
export const MODAL_TRANSITION = {
  duration: 0.22,
  ease: "easeOut",
};
