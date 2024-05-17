import { useMemo } from "react"
import Mybutton from "../components/UI/Mybutton/Mybutton";

export const useSetPages = (pageArray, page, setPage) => {
  const Pages = useMemo( () => {
    return pageArray.map(p => {
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