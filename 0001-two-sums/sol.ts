function twoSum(nums: number[], target: number): number[] {
  const seen = new Map();
  let result;

  nums.some((item, index) => {
    const remainder = target - item
    if (seen.has(remainder)) {
      result = [seen.get(remainder), index];
      return true;
    }
    seen.set(item, index)
  })

  return result;
};
