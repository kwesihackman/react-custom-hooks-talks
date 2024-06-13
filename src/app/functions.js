function getLocalStorage(key, initialValue) {
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  } catch (error) {
    console.error(error);
    return initialValue;
  }
}

function setLocalStorage(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(error);
  }
}

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

async function fetchData(url) {
  let isLoading = false
  try {
    isLoading = true
    console.log("A")
    fetchData()
    console.log("B")
    const response = await fetch(url)
    const data = await response.json();
    isLoading = false
    return { data, error: null, isLoading };
  } catch (error) {
    // console.error(error);
    return { data: null, error };
  }
}

