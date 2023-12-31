// A function to deep clone an object/array

const deepClone = (obj) => {

  if (typeof obj !== "object" || obj === null) return obj;

  // Create an array or object to hold the values
  const newObject = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    const value = obj[key];

    //recursive call for nested objects & arrays
    newObject[key] = deepClone(value);
  }

  return newObject;
}
