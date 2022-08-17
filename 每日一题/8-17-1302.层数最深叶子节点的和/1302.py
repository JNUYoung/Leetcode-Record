'''
Description: 
Author: young
Date: 2022-08-17 14:43:44
LastEditTime: 2022-08-17 14:56:23
FilePath: \young_leetcode\每日一题\8-17-1302.层数最深叶子节点的和\1302.py
'''

'''
给定一颗二叉树的根节点root，返回层数最深的叶子节点的和
'''

from typing import Optional


class TreeNode:
    def __init__(self,val=0,left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def deepestLeaveSum(self,root:Optional[TreeNode]) -> int:
        # 全局变量
        max_depth = -1      # 当前节点的层数
        current_sum = 0     # 当前层数的节点的value和

        def layerSearch(node:Optional[TreeNode],start_depth):
            # 如果当前节点为空节点，直接返回
            if node is None:
                return 
            
            nonlocal max_depth,current_sum
            # 如果当前节点的深度大于最大深度，则更新最大深度，重置current_sum
            if start_depth > max_depth:
                max_depth = start_depth
                current_sum = node.val
            # 如果当前节点深度等于最大深度，则将当前节点的val加入到该深度对应的和中
            elif start_depth == max_depth:
                current_sum += node.val
            
            # 递归遍历左子树和右子树
            layerSearch(node.left,start_depth+1)
            layerSearch(node.right,start_depth+1)

        # 从根节点开始进行层次遍历
        layerSearch(root,0)

        return current_sum

