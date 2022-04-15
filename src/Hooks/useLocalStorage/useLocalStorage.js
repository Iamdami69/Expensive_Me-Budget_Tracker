export function useLocalStorage() {
  const setLocalStorage = (itemName, itemToSet) => {
    localStorage.setItem(itemName, JSON.stringify(itemToSet));
  };
  const getLocalStorage = (itemToGet) => {
    return JSON.parse(localStorage.getItem(itemToGet));
  };

  return {
    setLocalStorage,
    getLocalStorage
  };
}
