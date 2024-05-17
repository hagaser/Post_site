export const getNumberOfPages = (totalCount, limit) => {
  return Math.ceil(totalCount / limit) + 1
}