function recurs(item: number): number {
  // post
  if (item === 1) {
    return item;
  }
  // pre
  console.log(item);
  // recurse
  return recurs(item - 1);
}

console.log(recurs(5));
