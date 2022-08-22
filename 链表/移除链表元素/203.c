/*
 * @Description: 
 * @Author: young
 * @Date: 2022-08-22 20:18:29
 * @LastEditTime: 2022-08-22 20:25:39
 * @FilePath: \young_leetcode\链表\移除链表元素\203.c
 */

struct ListNode {
    int val;
    struct ListNode *next;
};


struct ListNode *removeElements(struct ListNode* head, int val) {
    struct ListNode *temp;

    while (head && head->val == val) {
        temp = head;
        head = head->next;
        free(temp);
    }

    struct ListNode *pointer = head;

    while (pointer && (temp = pointer->next)) {
        if (temp->val == val) {
            pointer -> next = temp -> next;
            free(temp);
        }
        else {
            pointer = pointer -> next;
        }
    }

    return head;
}

