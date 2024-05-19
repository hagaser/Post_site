export const getNumberOfPages = (totalCount, limit) => {
  if (limit == -1) return 1
  return Math.ceil(totalCount / limit);
}