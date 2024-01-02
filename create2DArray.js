/*
the create2DArray function takes three parameters: rows, cols, and defaultValue. It then creates a 2D array with the specified number of rows and columns, filling it with the specified 
default value. This makes it easy to create a 2D array with different dimensions and default values, simply by calling the function with different arguments 
*/

function create2DArray(rows, cols, defaultValue = 0) {
  return new Array(rows).fill().map(() => new Array(cols).fill(defaultValue));
}

// let matrix = create2DArray(5, 4);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------

/* the createEmpty2DArray function uses Array.from() method to create a 2D array with [rows] rows and [cols] columns, initializing all elements to null  */
function createEmpty2DArray(rows, cols) {
  return Array.from({ length: rows }, () => Array(cols).fill(null));
}

// let arr = createEmpty2DArray(3, 4);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------
/* In this version, fill() is used without any arguments, so it doesn't change the array. Then map() is used to replace each element of the main array (which are currently all undefined) with a new array filled with zeros. */

const rows = 4;
const cols = 5;

const matrix = new Array(rows).fill().map(() => new Array(cols).fill(0));
