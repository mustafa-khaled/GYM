export function isOnlySpaces(value) {
  return typeof value === "string" && value.trim().length === 0;
}

export function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}
