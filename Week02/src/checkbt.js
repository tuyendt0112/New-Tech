const idToFind = 123; // The ID you want to search for

// Array of objects
const arrayOfObjects = [
  { id: 456, name: 'John' },
  { id: 123, name: 'Jane' },
  { id: 789, name: 'Alex' }
];

const foundObject = arrayOfObjects.find(obj => obj.id === idToFind);

if (foundObject) {
  console.log(foundObject);
} else {
  console.log('Object not found');
}