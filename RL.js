var reverseList = function(head) {
    if (!head || !head.next) 
    {
    return head;
    }
  const prev = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return prev;
    
};