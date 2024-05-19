import { useEffect, useRef } from "react";

export const useObserver = (run, isLoading, ref, canLoad, callback) => {


  const observer = useRef();

  useEffect ( () => {

    if (isLoading) return;
    if (!run) return; // if displayMethod == "by buttons"


    if (observer.current) observer.current.disconnect();

    let cb = (entries, observer) => {
      if (entries[0].isIntersecting && canLoad) callback(); // if reaches the bottom of the page and there are more posts
    }

    observer.current = new IntersectionObserver(cb);
    observer.current.observe(ref.current);

  }, [isLoading, run]);
  return (observer.current);

}