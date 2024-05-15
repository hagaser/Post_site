import { useMemo } from "react"

export const useSort = (posts, sort) => {
  const sortedPost = useMemo(() => {
    if (sort) {
      return posts.sort((fe, se) =>
        fe[sort].localeCompare(se[sort]))
    }
    return posts
  }, [sort, posts])
  return sortedPost
}

export const usePosts = (posts, input, sort) => {

  const sortedPost =  useSort(posts, sort);

  const filteredPosts = useMemo(() => {
  if (input && sort) return sortedPost.filter(p =>
    p[sort].toLowerCase().includes(input.toLowerCase()))
  return sortedPost
  }, [input, sortedPost])

  return filteredPosts
}