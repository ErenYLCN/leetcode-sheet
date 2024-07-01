function maxArea(height: number[]): number {
  let max = 0;
  let left = 0;
  let right = height.length - 1

  while (left < right) {
    const sm = Math.min(height[left], height[right])
    const water = sm * (right - left)

    if (water > max) max = water

    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }

  return max
};
