// Bubble sort
const list = [8, 3, 2, 1, 4, 9, 6, 5, 7];
function bubble_sort(arr: number[]) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[j - 1]) {
        let tmp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = tmp;
      }
    }
  }
  return arr;
}
console.log(bubble_sort(list));
