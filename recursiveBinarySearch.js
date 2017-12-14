const arr = [4, 6, 5, 1, 8, 11, 15, 84, 157, 7, 32];

const sortedArr = arr.sort((a, b) => a - b); // In JS the default sort is alphanumeric... 
                                            //to use as numeric you need that function
console.log(sortedArr);
console.log(binarySearch(84, sortedArr, 0, arr.length - 1));

function binarySearch(target, arr, min, max) {
  const mid = parseInt((min + max) / 2);

  if(min <= max) {

  if(arr[mid] == target)
    return mid;

  if(arr[mid] < target) 
    return binarySearch(target, arr, mid + 1, max);

  if(arr[mid] > target) 
    return binarySearch(target, arr, min, mid - 1);
  }
  return -1;
}

