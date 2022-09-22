
class NumArray:
    def __init__(self, nums: list[int]):
        self.nums = nums
    
    def sumRange(self, left, right):
        return sum(self.nums[left : right + 1])


