// https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

 function deleteDuplicates(head: ListNode | null): ListNode | null {
    let returnHead = new ListNode
    returnHead.next = head
    if (!head){
        return null
    }

    while(head.next){
            let nextListNode = head.next

        if (head.val === head.next.val){
  
            head.next = nextListNode.next || null
        } else {
            head = nextListNode || null
        }
    } 
    return returnHead.next
};