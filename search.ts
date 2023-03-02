const list = [0, 1, 2, 3, 4, 5, 6, 7];
const target = 6;
// Binary Search
function binary_search(ar: number[], value: number): number {
  let low = 0;
  let hi = ar.length;
  for (let i = low; i < hi; i++) {
    const mid = Math.floor(low + (hi - low) / 2);
    const current = ar[mid];
    if (current === value) {
      return current;
    } else if (current > value) {
      hi = mid;
    } else {
      low = mid + 1;
    }
  }
  return 0;
}
console.log(binary_search(list, target));
// Linear Search
function linear_search(ar: number[], value: number): number {
  for (let i = 0; i < ar.length; i++) {
    const current = ar[i];
    if (current === value) {
      return current;
    }
  }

  return 0;
}
console.log(linear_search(list, target));
// crystal balls
const break_list = new Array<boolean>(100);
function tw_crystal_balls(breaks: boolean[]) {
  const jumpAmount = Math.floor(Math.sqrt(breaks.length));
  console.log(jumpAmount);
  let i = jumpAmount;
  for (; i < breaks.length; i += jumpAmount) {
    if (breaks[i]) {
      break;
    }
  }

  i -= jumpAmount;

  for (let j = 0; j < jumpAmount && i < breaks.length; j++, i++) {
    if (breaks[i]) {
      return i;
    }
  }
  return -1;
}
console.log(`two crystal balls: ${tw_crystal_balls(break_list)}`);
