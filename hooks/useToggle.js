import { useCallback, useState } from "react";
/**
 * @param  {boolean} init
 * return toggled function
 */
export const useToggle = (init = false) => {
  const [toggle, setToggle] = useState(init);
  const callback = useCallback((value) => {
    setToggle((prev) => (typeof value === "boolean" ? value : !prev));
  }, []);
  return [toggle, callback];
};
