import { useMemo } from "react"
import MyButton from "../components/UI/MyButton/MyButton";
import { getDisplayedArray } from "../utils/getDisplayedArray";

export const useSetPages = (pageArray, page, setPage) => {
  const Pages = useMemo( () => {
    const displayedArray = getDisplayedArray(pageArray, page);

    return displayedArray.map(p => {
        if (page != p) {
          return (
            <MyButton 
              onClick = {() => {setPage(p)}} 
              key = {p}
            >
              {p}
            </MyButton>
          );
        }
      });

  }, [pageArray, page]);
  return Pages;
}