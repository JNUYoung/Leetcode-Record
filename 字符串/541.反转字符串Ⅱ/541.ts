function reverseStr1(s: string, k: number): string {
    let s_arr: string[] = s.split("");
    let length: number = s_arr.length;

    for (let i = 0; i < length; i += 2*k) {
        let left: number = i;
        let right: number = i + k > length - 1? length - 1 : i + k - 1;
        while (left < right) {
            [s_arr[left], s_arr[right]] = [s_arr[right], s_arr[left]];
            left++;
            right--;
        }
    }

    return s_arr.join("");
};