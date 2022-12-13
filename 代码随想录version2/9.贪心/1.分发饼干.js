/**
 * leetcode455.分发饼干
 * 一些饼干s和小孩g，需要满足尽可能多的小孩
 */

const findContentChildren = function(g, s) {
    // 分别将饼干尺寸和胃口值升序排序
    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)

    // 满足的小孩数目
    let res = 0
    // 当前的小孩索引
    let g_index = 0

    for (let i = 0; i < s.length; i++) {
        if (s[i] >= g[g_index] && g_index < g.length) {
            res++
            g_index++
        }
    }

    return res
}

console.log(findContentChildren([1, 2, 3], [1, 1]))
console.log(findContentChildren([1, 2], [1, 2, 3]))