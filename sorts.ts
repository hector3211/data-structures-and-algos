// Bubble sort
const list = [8, 3, 2, 1, 4, 9, 6, 5, 7];
function bubble_sort(arr: number[]) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
}
console.log(bubble_sort(list));

// Quick sort
const list_two = [8, 3, 2, 1, 4, 9, 6, 5, 7];
function quick_sort(arr: number[], lo: number, hi: number) {
  if (lo >= hi) {
    return;
  }

  const pivot_idx = partition(arr, lo, hi);
  quick_sort(arr, lo, pivot_idx - 1);
  quick_sort(arr, pivot_idx + 1, hi);
}

function partition(arr: number[], lo: number, hi: number): number {
  const pivot = arr[hi];
  let idx = lo - 1;
  for (let i = lo; i < hi; i++) {
    if (arr[i] <= pivot) {
      idx++;
      const tmp = arr[i];
      arr[i] = arr[idx];
      arr[idx] = tmp;
    }
  }

  idx++;
  arr[hi] = arr[idx];
  arr[idx] = pivot;
  return idx;
}

function just_do_it(list_two: number[]) {
  quick_sort(list_two, 0, list_two.length - 1);
  return list_two;
}

console.log(just_do_it(list_two));
