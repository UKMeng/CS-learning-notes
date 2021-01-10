# Python学习笔记01

## 关键字参数

在 Python 中，函数的参数，有两种：

>* 位置参数（Positional Arguments，在官方文档里常被缩写为 arg）
>* 关键字参数（Keyword Arguments，在官方文档里常被缩写为 kwarg）

在函数定义中，带有 = 的，即，已为其设定了默认值的参数，叫做 Keyword Arguments，其它的是 Positional Arguments。

## print(*objects, sep=' ', end='\n', file=sys.stdout, flush=False)

>Print objects to the text stream file, separated by sep and followed by end. sep, end, file and flush, if present, must be given as keyword arguments.
>
>All non-keyword arguments are converted to strings like str() does and written to the stream, separated by sep and followed by end. Both sep and end must be strings; they can also be None, which means to use the default values. If no objects are given, print() will just write end.
>
>The file argument must be an object with a write(string) method; if it is not present or None, sys.stdout will be used. Since printed arguments are converted to text strings, print() cannot be used with binary mode file objects. For these, use file.write(...) instead.
>
>Whether output is buffered is usually determined by file, but if the flush keyword argument is true, the stream is forcibly flushed.
>
>Changed in version 3.3: Added the flush keyword argument.

sep参数，不同对象之间的分隔符，默认是空格

end参数，句子的结尾，默认是\n

file参数，写入的已打开的文本文件（不能用于二进制模式的文件，此时需用file.write()函数），默认是sys.stdout（即屏幕输出）

flush参数，
