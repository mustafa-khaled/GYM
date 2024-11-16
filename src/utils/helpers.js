export function isOnlySpaces(value) {
  return typeof value === "string" && value.trim().length === 0;
}
