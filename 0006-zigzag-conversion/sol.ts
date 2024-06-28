function convert(s: string, numRows: number): string {
  const mult = (numRows - 2) * 2 + 2

  const map = new Map()

  for (let i = 0; i < s.length; i++) {
    const remainder = i % mult
    const floor = (remainder) <= mult / 2 ? remainder : mult - remainder
    if (map.has(floor))
      map.set(floor, map.get(floor) + s[i])
    else {
      map.set(floor, s[i])
    }
  }

  return Array.from(map.values()).join("")
};
