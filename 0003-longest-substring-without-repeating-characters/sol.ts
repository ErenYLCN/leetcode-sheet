function lengthOfLongestSubstring(s: string): number {
  let max = 0;
  const charSet: Set<string> = new Set();
  let left = 0;
  let right = 0;

  while (right < s.length) {
    if (!charSet.has(s[right])) {
      charSet.add(s[right++]);
      max = Math.max(max, charSet.size);
    } else {
      charSet.delete(s[left++]);
    }
  }
  return max;
};
