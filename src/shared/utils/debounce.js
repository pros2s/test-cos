export const debounce = (cb, delay) => {
  let timeout = null;

  return (...args) => {
    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => {
      cb(args);
    }, delay);
  };
};
