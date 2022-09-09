var reverseLeftWords = function(s, n) {
    function reverseString(substring_arr, start, end) {
        while (start < end) {
            [substring_arr[start], substring_arr[end]] = [substring_arr[end], substring_arr[start]];
            start++;
            end--;
        }
    }

    let s_arr = s.split("");
    reverseString(s_arr, 0, s_arr.length - 1);
    reverseString(s_arr, 0, s_arr.length - 1 - n);
    reverseString(s_arr, s_arr.length - n, s_arr.length - 1);

    return s_arr.join("");
};

