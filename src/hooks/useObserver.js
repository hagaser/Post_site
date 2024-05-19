import { useEffect, useRef } from "react";

export const useObserver = (run, isLoading, ref, canLoad, callback) => {


  const observer = useRef()

  useEffect ( () => {
    if (isLoading) return;
    if (!run) return;
    setTimeout( () =>{
      if (observer.current) observer.current.disconnect();
      let cb = (entries, observer) => {
        if (entries[0].isIntersecting && canLoad) {
          callback()
        }
      }
      observer.current = new IntersectionObserver(cb);
      observer.current.observe(ref.current)
    }, 500)
  }, [isLoading, run])
}