/**
 * Flattens a nested object, transforming it into a shallow object with
 * concatenated key names. Supports objects and arrays.
 *
 * @param {Object} obj The object to flatten
 * @param {string} [parentKey] The parent key to use for the new keys
 * @param {Object} [result] The object to store the flattened result in
 * @returns {Object} The flattened object
 */
function flattenObject(obj, parentKey = "", result = {}) {
  for (const key in obj) {
    // Ensure the property belongs to the object itself, not its prototype chain
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const newKey = parentKey ? `${parentKey}.${key}` : key;

      if (
        typeof obj[key] === "object" &&
        obj[key] !== null &&
        !Array.isArray(obj[key])
      ) {
        // If it's a nested object, recurse
        flattenObject(obj[key], newKey, result);
      } else if (Array.isArray(obj[key])) {
        // If it's an array, iterate through elements and flatten them
        obj[key].forEach((item, index) => {
          const arrayItemKey = `${newKey}.${index}`;
          if (typeof item === "object" && item !== null) {
            flattenObject(item, arrayItemKey, result);
          } else {
            result[arrayItemKey] = item;
          }
        });
      } else {
        // It's a primitive value, add to the result
        result[newKey] = obj[key];
      }
    }
  }
  return result;
}

// Example Usage:
const nestedJson = {
  name: "John",
  age: 30,
  address: {
    street: "Main St",
    city: "Anytown",
    zip: "12345",
  },
  hobbies: ["reading", "hiking"],
  contact: {
    email: "john@example.com",
    phone: {
      home: "555-1234",
      work: "555-5678",
    },
  },
};

const flattened = flattenObject(nestedJson);
console.log(flattened);
/*
Expected Output:
{
  'name': 'John',
  'age': 30,
  'address.street': 'Main St',
  'address.city': 'Anytown',
  'address.zip': '12345',
  'hobbies.0': 'reading',
  'hobbies.1': 'hiking',
  'contact.email': 'john@example.com',
  'contact.phone.home': '555-1234',
  'contact.phone.work': '555-5678'
}
*/
