


def maximumSwap(num):
    ans = num
    s = list(str(num))

    for i in range(len(s)):
        for j in range(i, len(s)):
            s[i], s[j] = s[j], s[i]
            ans = max(ans, int(''.join(s)))
            s[i], s[j] = s[j], s[i]
    
    return ans

print(maximumSwap(1993))