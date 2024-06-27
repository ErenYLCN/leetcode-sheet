class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const result = new ListNode()
  handleSum(l1, l2, result, 0)
  return result
};

function handleSum(
  l1: ListNode | null,
  l2: ListNode | null,
  res: ListNode,
  excess: number
) {
  const sum = Math.floor((l1?.val || 0) + (l2?.val || 0) + excess)
  const ex = Math.floor(sum / 10)
  res.val = Math.floor(sum % 10)

  if (!l1?.next && !l2?.next) {
    if (ex === 0) return;
    else {
      res.next = new ListNode(ex)
      return;
    }
  }

  res.next = new ListNode()

  handleSum(l1?.next || null, l2?.next || null, res.next, ex)
}
