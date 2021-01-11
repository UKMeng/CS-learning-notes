# Markdown实现下划线

在做日语学习笔记的时候发现了下划线的需要，但实际上Markdown并没有这个语法，但是可以用html的标签来实现

出自：https://www.zhihu.com/question/28375977

## 方案1：一楼说的u标签是不错，是快速添加下划线，但是它有两个缺点：

```html
<u>Underlined Text</u>
```

<u>Underlined Text</u>

1. HTML5 规范建议开发者尽量使用其他元素替代 u 元素。
2. u标签的下划线自定义程度低，只有黑色一种颜色

## 方案2（推荐）：由于方案1的不完美，因此我个人建议那些喜欢高颜值排版的朋友，可以使用html的span标签、设置行内CSS的border-bottom属性 来添加下划线。这种方式自定义程度最高。

```html
<span style="border-bottom:2px dashed yellow;">所添加的需要加下划线的行内文字</span>
```

<span style="border-bottom:2px dashed yellow;">所添加的需要加下划线的行内文字</span>