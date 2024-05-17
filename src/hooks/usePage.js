import { useMemo } from "react";

export const usePage = (numberOfPages) => {
  const pageArray = useMemo( () => {
    let pageArr = []
    for (let i = 1; i < numberOfPages; i++) {
      pageArr.push(i)
    }
    return(pageArr)
  }, [numberOfPages])
  return(pageArray)
}