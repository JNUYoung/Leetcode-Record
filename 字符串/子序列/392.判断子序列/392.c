
bool isSubsequence(char* s, char* t) {
    int s_length = strlen(s);
    int t_length = strlen(t);
    int i = 0, j = 0;
    while (i < s_length && j < t_length) {
        if (s[i] == t[j]) {
            i++;
        }
        j++;
    }

    return i == s_length;
}