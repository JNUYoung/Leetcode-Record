function findContentChildren1(g: number[], s: number[]): number {
    let res: number = 0
    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)
    let g_index: number = 0

    for (let i:number = 0; i < s.length; i++) {
        if (s[i] >= g[g_index] && g_index < g.length) {
            res++
            g_index++
        }
    }
    return res
}