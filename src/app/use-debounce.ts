import { useState, useEffect } from "react";

function useDebounce(initialValue, delay) {
  const [debounceValue, setDebounceValue] = useState(initialValue);

  useEffect(() => {
    const delayHandler = setTimeout(() => {
      setDebounceValue(initialValue);
    }, delay);

    return () => clearTimeout(delayHandler);
  });
  return debounceValue;
}

export default useDebounce;
