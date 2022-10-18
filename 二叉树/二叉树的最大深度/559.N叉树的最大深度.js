
var maxDepth = function(root) {
    if (!root) return 0;
    let depth = 0;
    for (let i = 0; i < root.children.length; i++) {
        depth = Math.max(depth, maxDepth(root.children[i]));
    }
    return depth + 1;
}