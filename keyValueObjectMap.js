const someObject = {};

// Method 1
for (const [key,value] of Object.entries(someObject)) {
  console.log(`${key}: ${value}`);
}

// Method 2
Object.keys(someObject).map((key) => {
  console.log(`${key}: ${someObject[key]}`);
});
