/**
 * 455.分发饼干
 * 
 * 每个孩子最多只能给一块饼干，对每个孩子i都有一个胃口值g[i]，每块饼干都有一个尺寸s[j]，只有s[j] >= g[i]，这块饼干才能分配给这个小孩
 * 
 * 目标：尽可能满足更多数量的小孩，并输出这个最大的数量
 */

// 为了满足更多的小孩，就尽量要保证不能造成饼干尺寸的浪费
// 大尺寸的饼干既可以满足胃口大的孩子也可以满足胃口小的孩子，那么就应该优先满足胃口大的
// 局部最优：大饼干优先喂给胃口大的，最大的饼干喂给胃口最大的（或者最小的饼干喂给胃口最小的）
// 全局最优：喂饱尽可能多的小孩

//  想清楚局部最优和全局最优，感觉局部最优能推出全局最优并且想不出反例，就可以试一试贪心

const findContentChildren = function(g, s) {
    /**
     * g: 小孩的胃口数组
     * s：饼干的尺寸数组
     */
    const compareFun = (a, b) => b - a;
    g.sort(compareFun);
    s.sort(compareFun);

    let ans = 0;
    let s_index = 0;
    const s_length = s.s_length;
    /**
     * 使用s_index来控制饼干数组的遍历，没有再增加一个循环，而是采用自增的方式
     */

    for (let i = 0; i < g.length; i++) {
        if (s[s_index] >= g[i] && s_index < s_length) {
            ans++;
            s_index++;
        }
    }

    return ans;
}