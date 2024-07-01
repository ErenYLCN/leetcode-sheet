function isPalindrome(x: number): boolean {
  if (x < 0) return false
  const num = `${x}`;
  const arr = num.split("");
  let left, right;
  for (let i = 0; i < arr.length; i++) {
    if (arr.length === 1) return true
    left = arr[i];
    right = arr.pop();
    if (left !== right) return false
  }
  return true
};
