function myAtoi(s: string): number {
  const MAX = 2 ** 31 - 1
  const MIN = -MAX - 1
  const digitMap = new Set(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"])
  const signMap = new Set(["+", "-"])
  let unsigned = true;
  let leading = true;
  let sign = "";
  let parsedStr = "";

  for (const char of s) {
    if (char === " " && leading) {
      continue;
    }

    if (unsigned && signMap.has(char)) {
      unsigned = false
      leading = false;
      sign = char
    }
    else if (digitMap.has(char)) {
      unsigned = false
      leading = false;
      parsedStr += char
    }

    else {
      break;
    }
  }
  if (parsedStr.length === 0) return 0;

  const toInt = Number(`${sign}${parsedStr}`)

  if (toInt > MAX) return MAX
  if (toInt < MIN) return MIN

  return Number(`${sign}${parsedStr}`)
};
