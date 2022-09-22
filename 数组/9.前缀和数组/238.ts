
let productExceptSelf = function(nums: number[]) {
    const length = nums.length;
    const L = new Array<number>(length);
    const R = new Array<number>(length);
    const res = new Array<number>(length);

    L[0] = 1;
    for (let i = 1; i < length; i++) {
        L[i] = L[i - 1] * nums[i - 1];
    }

    R[length - 1] = 1;
    for (let i = length - 2; i >= 0; i--) {
        R[i] = R[i + 1] * nums[i + 1];
    }

    for (let i = 0; i < length; i++) {
        res[i] = L[i] * R[i];
    }

    return res;
}




export {};