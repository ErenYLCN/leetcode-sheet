function reverse(x: number): number {
  const MAX = 2 ** 31 - 1
  const pos = Math.abs(x)
  const reverse = x.toString().split("").reverse().join("")
  const res = parseInt(reverse)

  if (res > MAX)
    return 0;

  return res * ((x < 0) ? -1 : 1)
};
