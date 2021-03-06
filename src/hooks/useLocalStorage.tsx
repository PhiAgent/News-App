const { useState } = require("react");

export const useLocalStorage = <Type,>(key: string, firstValue: Type): [Type, any] => {

  const [storeVal, setStoredVal] = useState(
    () => {
      // Get the stored value of given key
      try {
        const val = window.localStorage.getItem(key);
        // If key has been stored before return storedValue
        return val ? JSON.parse(val) : firstValue;
      } catch (error) {//if error encountered, return initial value
        return firstValue;
      }
    }
  );

  const setLocalStorageValue = (val: any) => {
    // If you're changing the stored value
    // in local storage, you pass in a function, else you pass in the new value you want to store
    try {
      const newValue = val instanceof Function ? val(storeVal) : val;

      // Update the value in your application
      setStoredVal(newValue);
      // Update Local Storage
      window.localStorage.setItem(key, JSON.stringify(newValue));
      // NB: localStorage always stores keys and values in string format
    } catch (error) {
      // TODO: Handle Error gracefully
      // If there's an error, then it means
      // the localStorage is most likely out
      // of sync with the state of your app
    }
  };

  window.localStorage.setItem(key, JSON.stringify(storeVal));
  return [storeVal, setLocalStorageValue];
}

