import { useEffect, useState } from "react"

export const useDebounce = (value: string, delay: number) => {
  const [debouncedVal, setDebouncedVal] = useState<string>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedVal(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedVal;
}