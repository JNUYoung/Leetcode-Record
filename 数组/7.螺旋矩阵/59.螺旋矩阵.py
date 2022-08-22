'''
Description: 螺旋矩阵 middle
Author: young
Date: 2022-08-22 14:30:22
LastEditTime: 2022-08-22 15:37:30
FilePath: \young_leetcode\数组\7.螺旋矩阵\59.螺旋矩阵.py
'''

def generateMatrix(n):
    # 生成 n×n 的初始二维数组
    mat = [[0] * n for _ in range(n)]    # 每一行为 [0, 0, 0, ......]，包含n个零，共有n行
    x_index, y_index = 0, 0
    loop = n // 2   # 循环的圈数
    mid = n // 2    # n为奇数时，最中心的单独的一个点
    # n为偶数时，共有n/2圈；n为奇数时，共有n//2圈，mid (n//2, n//2)下标处为最后一个元素
    count = 1

    # 初始时偏移量为1，即每一行或每一列到最后一个元素时开始改变方向
    # 每转完一圈后，上下左右均少了一个元素，因此此时offset要加1
    for offset in range(1, loop + 1):
        # 四个for循环完成一圈
        for i in range(y_index, n - offset):        # [0][0] - [0][n-2]  每一行的第一个元素到倒数第二个元素
            mat[x_index][i] = count
            count += 1
        for i in range(x_index, n - offset):
            mat[i][n - offset] = count
            count += 1
        for i in range(n - offset, y_index, -1):
            mat[n - offset][i] = count
            count += 1
        for i in range(n - offset, x_index, -1):
            mat[i][y_index] = count
            count += 1
        
        # 完成一圈之后，x_index, y_index 需要更新
        x_index += 1
        y_index += 1
    
    if n % 2 != 0:
        mat[mid][mid] = count
    
    return mat

print(generateMatrix(4))

# 每一圈的起始位置，都是上对角线上的元素 例如：[0][0]、[1][1]、[2][2]
# 当n为偶数时，刚好每一圈都是正方形，此时共有n/2圈
# 当n为奇数时，一定会有单独一个元素作为中心点，其下标为[n//2][n//2]
#  

# 1.根据n确定需要循环多少圈？
# 2.确定每一圈循环的起始位置？
# 3.确定每一圈循环内的方向改变的位置？
# 4.保证每一个方向上的行为保持一致，即均保持左闭右开