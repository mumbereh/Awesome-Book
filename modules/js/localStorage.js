const saveToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};


export const getFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return JSON.parse(data);
};

