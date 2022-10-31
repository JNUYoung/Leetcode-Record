const findContentChildren1 = function(g: number[], s: number[]): number {
    g.sort((a, b) => b - a);
    s.sort((a, b) => b - a);

    let ans: number = 0, s_index: number = 0;
    const s_length: number = s.length;

    for (let i = 0; i < g.length; i++) {
        if (s[s_index] >= g[i] && s_index < s_length) {
            s_index++;
            ans++;
        }
    }

    return ans;
}