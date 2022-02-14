export const shadowAnimation = {
  hidden: {
    opacity: 0,
    transition: { duration: 4, ease: "easeInOut" },
  },
  show: {
    opacity: 1,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

export const fade = {
  hidden: { opacity: 0, transition: { ease: "easeOut", duration: 0.3 } },
  show: {
    opacity: 1,
    transition: { ease: "easeOut", duration: 0.3 },
  },
};
export const quickFade = {
  hidden: { opacity: 0, transition: { ease: "easeOut", duration: 0.1 } },
  show: {
    opacity: 1,
    transition: { ease: "easeOut", duration: 0.1 },
  },
};

export const dropDown = {
  hidden: { opacity: 0, y: -300 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeInOut" } },
  exit: {
    opacity: 0,
    y: -300,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

export const homeAnimation = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      type: "spring",
      stiffness: 50,
    },
  },
  exit: {
    opacity: 0,
    x: 100,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

export const pageAnimation = {
  hidden: { opacity: 0, y: -50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      staggerChildren: 0.15,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

export const filterAnimation = {
  hidden: { y: -5000 },
  show: {
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    y: -50,
    transition: { duration: 0.3 },
  },
};
export const openFilterAnimation = {
  hidden: { y: -500 },
  show: {
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    y: -500,
    transition: { duration: 0.3 },
  },
};

export const cardsStaggerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0,
      staggerChildren: 0.09,
    },
  },
};

export const cardAnimation = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    y: -100,
  },
};
export const trAnimation = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    x: -50,
  },
};

export const detailsAnimation = {
  hidden: { opacity: 0, y: -50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};
