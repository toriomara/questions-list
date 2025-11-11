import { useState, useEffect } from "react";

export function useDebounce<T extends string | number | boolean | object>(
  value: T,
  delay = 300
): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}
