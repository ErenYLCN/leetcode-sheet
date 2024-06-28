function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const m = nums1.length
  const n = nums2.length

  if (!m) {
    return (n % 2) === 1 ? nums2[Math.floor(n / 2)] : (nums2[Math.floor(n / 2) - 1] + nums2[Math.floor(n / 2)]) / 2
  }
  else if (!n) {
    return (m % 2) === 1 ? nums1[Math.floor(m / 2)] : (nums1[Math.floor(m / 2) - 1] + nums1[Math.floor(m / 2)]) / 2
  }
  else if (m === 1 && n === 1) {
    return (nums1[0] + nums2[0]) / 2
  }

  const sum = m + n

  if (sum % 2 === 1) {
    let i = 0;
    let j = 0;
    let count = 0;

    while (true) {
      if (count === Math.floor(sum / 2))
        return Math.min(nums1[i], nums2[j])

      if (nums1[i] < nums2[j]) {
        if (i === m - 1) {
          return nums2[j + Math.floor(sum / 2) - count - 1]
        }
        i++
      }
      else {
        if (j === n - 1) {
          return nums1[i + Math.floor(sum / 2) - count - 1]
        }
        j++
      }

      count++
    }
  }
  else {
    let i = 0;
    let j = 0;
    let prev;
    let count = 0;

    while (true) {
      if (count === Math.floor(sum / 2))
        return (prev + Math.min(nums1[i], nums2[j])) / 2

      if (nums1[i] < nums2[j]) {
        if (i === m - 1) {
          return (nums2[j + Math.floor(sum / 2) - count - 1]
            + ((count === Math.floor(sum / 2) - 1) ? nums1[i] : nums2[j + Math.floor(sum / 2) - count - 2])) / 2
        }
        prev = nums1[i++]
      }
      else if (nums1[i] > nums2[j]) {
        if (j === n - 1) {
          return (nums1[i + Math.floor(sum / 2) - count - 1]
            + ((count === Math.floor(sum / 2) - 1) ? nums2[j] : nums1[i + Math.floor(sum / 2) - count - 2])) / 2
        }
        prev = nums2[j++]
      }
      else {
        if (i !== m - 1) {
          prev = nums1[i++]
        } else {
          prev = nums2[j++]
        }
      }

      count++
    }
  }
};
