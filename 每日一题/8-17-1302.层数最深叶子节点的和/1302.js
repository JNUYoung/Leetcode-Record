/*
 * @Description: 
 * @Author: young
 * @Date: 2022-08-17 14:57:10
 * @LastEditTime: 2022-08-17 15:12:03
 * @FilePath: \young_leetcode\每日一题\8-17-1302.层数最深叶子节点的和\1302.js
 */



// class TreeNode {
//     constructor(val,left,right) { 
//         this.val = val;
//         this.left = left;
//         this.right = right;
//     }
// }


function TreeNode(val,left,right) {
    this.val = (val === undefined? 0:val);
    this.left = (left === undefined? null:left);
    this.right = (right === undefined? null:right);
}


// const my_node = new TreeNode(10,left_node,right_node)
// constructor function     new ... 


const deepestLeaveSum = function(root_node) {
    let max_depth = -1, current_sum = 0;

    const layerSearch = function(node,node_depth) {
        if (node == null) return;

        if (node_depth > max_depth) {
            max_depth = node_depth;
            current_sum = node.val;
        } else if (node_depth === max_depth) {
            current_sum += node.val
        }

        layerSearch(node.left,node_depth+1);
        layerSearch(node.right,node_depth+1);
    }

    layerSearch(root_node,0);

    return current_sum;
}

