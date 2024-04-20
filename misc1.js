// formatDate: a function that formats a date object into a more readable string format. It's useful for displaying dates in a user-friendly manner:
function formatDate(date) {
  return new Date(date).toLocaleDateString();
}

// Capitalize First Letter function
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// validateEmail: This function checks if a given string is in a valid email format. It's useful for form validation in web applications
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// validatePassword: This function checks if a given string meets certain password criteria, such as minimum length and containing at least one number and one letter.
function validatePassword(password) {
  const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return re.test(password);
}

// capitalizeEachWord: This function capitalizes the first letter of each word in a string. It's useful for formatting text in a more readable manner.
function capitalizeEachWord(str) {
  return str.replace(/\b\w/g, function(l) { return l.toUpperCase() });
}

/*
  debounce: This function delays the processing of a function until a certain amount of time has passed since the last time it was invoked.
  It's useful for limiting the rate at which a function is executed, such as in search-as-you-type functionality.
*/
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/*
throttle: Similar to debounce, this function limits the execution of a function to a certain rate. It's useful for limiting the frequency of function execution, such as in scroll or resize event handlers
*/

function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}


// Sanitize Input: This function sanitizes user input by encoding special characters, preventing potential security issues like XSS attacks
const sanitize = (input) => {
 const encodedCharacters = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;'
 };

 return input.replace(/[&<>"'/]/g, match => encodedCharacters[match]);
};

// LocalStorage Utilities: These functions simplify interactions with the browser's localStorage, allowing you to easily set, get, remove, and clear data.
function setLocalStorage(key, data) {
 try {
    localStorage.setItem(key, JSON.stringify(data));
    return true;
 } catch (error) {
    console.error(`Error setting data in localStorage for key "${key}":`, error);
    return false;
 }
}

function getLocalStorage(key) {
 try {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : null;
 } catch (error) {
    console.error(`Error retrieving data from localStorage for key "${key}":`, error);
    return null;
 }
}

function removeLocalStorage(key) {
 try {
    localStorage.removeItem(key);
    return true;
 } catch (error) {
    console.error(`Error removing data from localStorage for key "${key}":`, error);
    return false;
 }
}

function clearLocalStorage() {
 try {
    localStorage.clear();
    return true;
 } catch (error) {
    console.error("Error clearing localStorage:", error);
    return false;
 }
}


// Random Number Generator:
function random(...args) {
 const max = Math.max(...args);
 const min = (args.length === 1) ? 0 : Math.min(...args);

 return Math.floor(Math.random() * (max - min + 1)) + min;
}
