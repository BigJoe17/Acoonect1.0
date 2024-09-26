export const revealLeft = (delay: number) => ({
  hidden: { x: -100, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.75,
      delay: delay,
    },
  },
});

export const revealRight = (delay: number) => ({
  hidden: { x: 100, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.75,
      delay: delay,
    },
  },
});