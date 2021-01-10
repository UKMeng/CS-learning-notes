# JavaScript学习笔记01

完成学习简介、初探、语法三部分

## [简介](https://github.com/stone0090/javascript-lessons/tree/master/1.1-Introduction)

JavaScript 是一门**动态的、弱类型的、面向对象的、解释型的**的编程语言，是面向Web的编程语言。

前端开发工程师必须掌握的三项技能：描述网页内容的HTML、描述网页样式的CSS、以及描述网络行为的JavaScript。

### 文档对象模型（DOM）

文档对象模型（DOM，Document Object Model）是用于 HTML 的应用程序编程接口（API），它把整个页面映射为一个多层节点结构。HTML 页面中的每个组成部分都是某种类型的节点，这些节点又包含着不同类型的数据。看下面这个 HTML 页面：

```html
<html>
    <head>
        <title>Sample Page</title>
    </head>
    <body>
        <p>Hello World!</p>
    </body>
</html>
```

### 浏览器对象模型（BOM）

浏览器对象模型（BOM，Browser Object Model）是用于浏览器的应用程序编程接口（API），它把整个浏览器窗口映射为一个对象。从根本上讲，BOM 只处理浏览器窗口和框架，但人们习惯上也把所有针对浏览器的 JavaScript 扩展算作 BOM 的一部分，例如：

+ 弹出新浏览器窗口的功能。
+ 移动、缩放和关闭浏览器窗口的功能。
+ 提供浏览器详细信息的 navigator 对象。
+ 提供浏览器所加载页面的详细信息的 localtion 对象。
+ 提供用户显示器分辨率详细信息的 screen 对象。
+ 对 cookies 的支持。
+ XMLHttpRequest 和 IE 的 ActiveXObject 这样的自定义对象。

BOM 最让人头疼的是没有相关的规范和标准，每个浏览器都有独有的实现，这个问题在 HTML5 中得到了解决，HTML5 致力于把很多 BOM 功能写入正式规范。

### 小结

JavaScript 是一种专为网页交互而设计的脚本语言，由下列3个不同的部分组成：

+ 核心（ECMAScript），由 ECMA-262 定义，提供核心语言功能。
+ 文档对象模型（DOM），提供访问和操作网页内容的方法和接口。
+ 浏览器对象模型（BOM），提供与浏览器交互的方法和接口。

JavaScript 的这3个组成部分，在当前5个主要浏览器（IE、FireFox、Chrome、Safari 和 Opera）中都得到了不同程度的支持。其中，所有浏览器对 ECMAScript 3 版本的支持大体上都还不错，而对 ECMAScript 5 的支持程度越来越高，但对 DOM 的支持则彼此相差比较多。对于已经正式纳入 HTML5 标准的 BOM 来说，尽管各浏览器都实现了某些众所周知的共同特性，但其他特性还是会因浏览器而异。

## [初探](https://github.com/stone0090/javascript-lessons/tree/master/1.2-FirstExploration)

### \<script\> 元素

使用 \<script\> 元素的方式有两种：

+ 直接在页面中嵌入 JavaScript 代码。
+ 包含外部 JavaScript 文件。

使用 \<script\> 元素嵌入 JavaScript 代码时，只需为 \<script\> 指定 type 属性。然后，像下面这样把 JavaScript 代码直接放在元素内部即可：

```html
<script type="text/javascript">
    function sayHello(){
        console.log("Hello!");
    }
</script>
```

> 现代浏览器可以使用函数 console.log() 来向控制台输出消息，通过这种方式可以非常方便地调试代码。

> 在 HTML5 规范中，\<script\> 的 type 属性默认是 "text/javascript"，所以可以省略；但是在 HTML 4.01 和 XHTML 1.0 规范中，type 属性是必须的。可以参考 Stack Overflow 上的回答：http://stackoverflow.com/questions/4243577/which-is-better-script-type-text-javascript-script-or-script-scr

如果要通过 \<script\> 元素来包含外部 JavaScript 文件，那么 src 属性就是必需的。这个属性的值是一个指向外部 JavaScript 文件的链接，例如：

```html
<script type="text/javascript" src="example.js">
    console.log("Hello!");  //永远不会执行
</script>
```

另外，通过 \<script\> 元素的 src 属性还可以包含来自外部域的 JavaScript 文件。例如：

```html
<script type="text/javascript" src="https://code.jquery.com/jquery-3.0.0.min.js"></script>
```

> 在 HTML 中嵌入 JavaScript 代码虽然没有问题，但一般认为最好的做法还是尽可能使用外部文件来包含 JavaScript 代码。

### 元素的位置
按照惯例，所有的 \<script\> 元素都应该放在页面的 \<head\> 元素中，例如：

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script type="text/javascript" src="example1.js"></script>
    <script type="text/javascript" src="example2.js"></script>
</head>
<body>
    <!-- 这里放内容 -->
</body>
</html>
```

可是这种做法意味着必须等到全部 JavaScript 代码都被下载、解析和执行完成之后，才能开始呈现页面的内容（浏览器在遇到 \<body\> 元素时才开始呈现内容）。对于那些需要加载很多 JavaScript 代码的页面来说，会导致页面出现明显的延迟（浏览器窗口一片空白）。为了避免这个问题，最好的做法是把 \<script\> 元素放到 HTML 文档的最后面，\</body\> 元素之前，例如：

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <!-- 这里放内容 -->
    <script type="text/javascript" src="example1.js"></script>
    <script type="text/javascript" src="example2.js"></script>
</body>
</html>
```

### 关卡

现有一个网页（代码如下），引用了大量的外部 JavaScript 文件，打开该网页会一直显示空白，直至外部 JavaScript 文件全部下载完毕，才能正常显示网页内容「本页面用来测试 \<script\> 加载顺序~」，用户体验不好。请尝试修改页面中 \<script\> 元素的位置，实现以下效果：

+ 挑战一：实现打开页面就能看到网页内容「本页面用来测试 \<script\> 加载顺序~」，不必等外部 JavaScript 文件全部下载完毕才显示。
+ 挑战二：实现在外部 JavaScript 文件下载之前「开启页面加载效果」，外部 JavaScript 文件全部下载完毕之后「关闭页面加载效果」。

## 语法

### 字符集

> 扩展阅读[「Unicode 与 JavaScript 详解」](http://www.ruanyifeng.com/blog/2014/12/unicode.html)

### 大小写

JavaScript 是区分大小写的。

### 注释

JavaScript 使用 C 风格的注释，包括单行注释和块级注释。

```js
// 这里是单行注释

/*
 *  这里是块级注释
 *  也叫多行注释
 */
```

### 字面量

所谓字面量（也可称直接量，Literal values），就是程序中直接使用的数据值。字面量只代表自身，不存储在特定位置。JavaScript 中的字面量有：字符串、数字、布尔值、对象、数组、函数、正则表达式，以及特殊的 null 值。

```js
"hello world"   // 字符串
123             // 数字
1.2             // 小数
true            // 布尔值
false           // 布尔值
/javascript/gi  // 正则表达式
null            // 空
{ name: 'stone', age: 20}       // 对象
[ 1, 2, 3, 4, 5, 6, 7, 8 ]      // 数组
function(){ console.log('good'); }    // 函数
```

> 扩展阅读[「undefined不是字面量」](http://www.cnblogs.com/ziyunfei/archive/2012/11/11/2765096.html)

### 严格模式

在 ECMAScript 5 引入了严格模式（strict mode）的概念。严格模式是为 JavaScript 定义了一种不同的解析与执行模式。在严格模式下，ECMAScript 3 中的一些不确定的行为将得到处理，而且对某些不安全的操作也会抛出错误。要在整个脚本中启用严格模式，可以在顶部添加如下代码：

```js
"use strict";
```

这行代码看起来像是字符串，而且也没有赋值给任何变量，但其实它是一个编译指示（pragma），用于告诉支持的 JavaScript 引擎切换到严格模式。这是为了不破坏 ECMAScript 3 语法而特意选定的语法。

在函数内部的第一行包含这条编译指示，也可以指定函数在严格模式下执行：

```js
function doSomething(){
    "use strict"; 
    // 函数体
}
```

严格模式下，JavaScript 的执行结果会有很大不同。

### 标识符

所谓标识符，就是指变量、函数、属性的名字，或者函数的参数。JavaScript 标识符必须以字母、下划线（_）或美元符号（$）开始，后续的字符可以是字母、数字、下划线或美元符号（数字是不允许作为首字符出现的）。下面是合法的标识符：

```js
my_variable_name, v12345, _dummy, $str888
```

标识符中的字母可以包含扩展的 ASCII 或 Unicode 字母字符（如 π 和 ∑），但不推荐这样做。按照惯例，JavaScript 标识符采用**驼峰大小写**格式，也就是第一个字母小写，剩下的每个有意义的单词的首字母大写，例如：

```js
firstSecond, myCar, doSomethingImportant
```

### 关键字和保留字

具体见[表](JavaScript关键字和保留字.md)

JavaScript 的具体实现可能定义独有的全局变量和函数，每一种特定的 JavaScript 运行环境都有自己的一个全局属性列表，这一点是需要牢记的。

### 可选的分号

虽然语句结尾的分号不是必须的，但请任何时候都不要省略它。

### 关卡

请判断以下代码是否有效？如果有效请给出结果，如果无效请说明原因。

```js
// 挑战一
var class = 'person';
console.log(class);     // 无效，class是关键字
// 挑战二
var Class = 'person';
console.log(class);     // 无效，输出的是class不是Calss，大小写敏感
// 挑战三
var True = false;
console.log(True);      // 有效，输出false
// 挑战四
var true = false;
console.log(True);      // 无效，true是关键字
// 挑战五
var $_$ = 'stone';
console.log($_$);       // 有效，输出stone
// 挑战六
var 00_name = 'stone';
console.log(00_name);   // 无效，数字不能作为标识符开头
// 挑战七
var Array = 'null';
console.log(Array);     // 有效，输出null，但是Array是全局函数，应尽量避免使用
// 挑战八
var undefined = 'null';
console.log(undefined); // undefined，有效，虽然没报错，但是没有赋值成功。
// 挑战九
var result = 1 + 2
+ 3 + 4
console.log(result);    // 有效，输出10
```

