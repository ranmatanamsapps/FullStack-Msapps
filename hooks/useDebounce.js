import { useEffect, useRef } from "react";
/**
 * @param  {Function} callback
 * @param  {int} delay in ms default is 300ms
 * return debounced function
 */
export const useDebounce = (callback, delay = 300) => {
  const latestCallback = useRef();
  const latestTimeout = useRef();

  useEffect(() => {
    latestCallback.current = callback;
  }, [callback]);

  return () => {
    if (latestTimeout.current) {
      clearTimeout(latestTimeout.current);
    }

    latestTimeout.current = setTimeout(() => {
      latestCallback.current();
    }, delay);
  };
};
