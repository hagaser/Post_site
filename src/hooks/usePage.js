import { useMemo } from "react";

export const usePage = (numberOfPages) => {
  const pageArray = useMemo( () => {

    let pageArr = [];
    for (let i = 0; i < numberOfPages; i++) {
      pageArr.push(i + 1);
    }
    return(pageArr);

  }, [numberOfPages]);
  return(pageArray);
}