import { useState } from "react";

  export const useLocalStorage = (key, newValue) => {
    const [storedValue, setStoredValue] = useState(() => {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : newValue;
    });
    const setValue = value => {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    };
    return [storedValue, setValue];
  };