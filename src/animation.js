export const shadowAnimation = {
  hidden: {
    scale: 0,
    opacity: 0,
    transition: { duration: 4, ease: "easeInOut" },
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 4, ease: "easeInOut" },
  },
  exit: {
    scale: 0,
    opacity: 0,
    transition: { duration: 4, ease: "easeInOut" },
  },
};

export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { ease: "easeOut", duration: 0.5 },
  },
};
