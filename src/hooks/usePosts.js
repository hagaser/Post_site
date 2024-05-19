import { useMemo } from "react"

export const useSort = (posts, sort) => {
  const sortedPost = useMemo(() => {

    if (sort) { // if there is something to sort by
      return posts.sort((fe, se) =>
        fe[sort].localeCompare(se[sort]));
    }

    return posts;

  }, [sort, posts]);
  return sortedPost;
}

export const usePosts = (posts, input, sort) => {

  const sortedPost =  useSort(posts, sort);

  const filteredPosts = useMemo(() => {

  if (input && sort) return sortedPost.filter(p => // if there is something to sort by and search bar
    p[sort].toLowerCase().includes(input.toLowerCase()))

  return sortedPost;

  }, [input, sortedPost]);
  return filteredPosts;
}