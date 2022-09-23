
def isSubsequence(s, t):
    s_length = len(s)
    t_length = len(t)
    i = j = 0

    while i < s_length and j < t_length:
        if s[i] == s[j]:
            i += 1
        j += 1
    
    return i == s_length