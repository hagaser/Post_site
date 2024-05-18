import { useMemo } from "react"
import Mybutton from "../components/UI/Mybutton/Mybutton";
import { getDisplayedArray } from "../utils/getDisplayedArray";

export const useSetPages = (pageArray, page, setPage) => {
  const Pages = useMemo( () => {

    const displayedArray = getDisplayedArray(pageArray, page)

    return displayedArray.map(p => {
        if (page != p) {
          return (
            <Mybutton 
              onClick = {() => setPage(p)} 
              key = {p}
            >{p}</Mybutton>
          )
        }
      })
  }, [pageArray, page])
  return Pages
}