// definition
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// definition for a node in N tree
function Node(val, children) {
    this.val = val;
    this.children = children;
}

// console.log(null === null);
var levelOrder = function(root) {
    if (!root) return [];
    
    const ans = [];
    const queue = [];
    queue.push(root);

    while (queue.length) {
        const temp_level = [];
        let n = queue.length;
        while (n) {
            const temp_node = queue.shift();
            temp_level.push(temp_node.val);
            if (temp_node.children) {
                for (const child of children) {
                    queue.push(child);
                }
            }
            n--;
        }
        ans.push(temp_level);
    }

    return ans;
}
 