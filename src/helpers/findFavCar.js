export function findFavCar(obj, targetArray) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const currentArray = obj[key];
      if (arraysAreEqual(currentArray, targetArray)) {
        return key;
      }
    }
  }
  return null;
}

function arraysAreEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
