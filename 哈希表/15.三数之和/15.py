
def threeSum(nums):
    nums.sort()
    res = []

    for i in range(len(nums)):
        i_value = nums[i]
        if i_value > 0:
            return res
        if i >= 1 and nums[i] == nums[i - 1]:
            continue

        left = i + 1
        right = len(nums) - 1

        while (left < right):
            left_value = nums[left]
            right_value = nums[right]
            cur_sum = i_value + left_value + right_value

            if cur_sum < 0:
                left += 1
            elif cur_sum > 0:
                right -= 1
            else:
                res.append([i_value, left_value, right_value])
                while (left < right and nums[left] == nums[left + 1]):
                    left += 1
                while (left < right and nums[right] == nums[right - 1]):
                    right -= 1
                
                left += 1
                right -= 1
    
    return res