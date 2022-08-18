# What I don't know about Python



1.python的解释器根据赋值或运算自动推断变量的类型；

2.python的两种防御性编程风格：

* EAFP（Easier to Ask for Forgiveness than Permission）：直译过来就是说：获得原谅要比请求许可更容易；强调先入为主，逢山开路、遇水架桥；直接使用try，捕获到异常时再进行相应处理；
* LBYL（Look Before You Leap）：强调三思而后行；

例如如下的除法的例子：

使用EAFP风格进行编程：

```python
try:
	print(a / b)

except ZeroDivisionError:print('Error')
```

而使用LBYL风格的代码如下：

```python
if b != 0:
	print(a / b)

else:
	print('error')
```

常用的场景：检查文件是否存在？检查字典是否存在某个key？

效率上来说，try except需要执行保留现场、堆栈解退等操作，理论上来说效率是要更低的。但是，LBYL每次都需要做成本检查，因此，如果理论上来说发生异常的情况非常少的时候，EAFP的效率反而会比LBYL的效率更高；

**python鼓励使用EAFP风格的代码编写风格，python的异常处理机制较为完善，包含了各种常见的错误。**


3.python中的zip方法

4.python的装饰器
