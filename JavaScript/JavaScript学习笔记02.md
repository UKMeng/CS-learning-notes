# JavaScript学习笔记02

JavaScript变量和数据类型

## 变量和数据类型

### 变量

JavaScript的变量是松散类型的，即可以保存任何类型的数据

```js
var message; // 声明变量，未经初始化会保存一个特殊的值undefined
var message = "hello"; // 声明变量为一个字符串值
message = 100; // 有效的语句，不好的写法，虽然变量类型可以改变，但最好别这么做

function test(){
    var message = "hello"; // 局部变量
}
test();
console.log(message); // error

function test(){
    message = "hello";  // 没有var时创建全局变量，不好的写法，在严格模式下给未经声明的变量赋值会抛出ReferenceError错误
}
test();
console.log(message); // "hello"
```

### 数据类型

JavaScript有5中简单数据类型：Undefined, Null, Boolean, Number, String。

还有一种复杂数据类型Object， Object本质上是由一组无序的名值对组成的。

同时JavaScript不支持创建自定义类型的机制。

### typeof运算符

```js
var message = "some string";
console.log(typeof message);     // "string"
console.log(typeof(message));    // "string",typeof不是函数，虽然可以用圆括号，但不推荐使用
console.log(typeof 95);          // "number"
```

> 扩展阅读「为什么 JavaScript 里面 typeof null 的值是 "object"？」 
> https://www.zhihu.com/question/21691758

> 扩展阅读「MDN 之 typeof」
> https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof

> 扩展阅读「JavaScript 检测原始值、引用值、属性」
> http://shijiajie.com/2016/06/20/javascript-maintainable-javascript-validate1/

> 扩展阅读「JavaScript 检测之 basevalidate.js」
> http://shijiajie.com/2016/06/25/javascript-maintainable-javascript-basevalidatejs/

### Undefined类型

Undefined 类型只有1个值，即 undefined。使用 var 声明变量但未对其加以初始化时，这个变量的值就是 undefined，直接使用未声明的变量会产生错误。对未声明或已声明但未初始化的变量执行 typeof 运算符会返回 "undefined" 值，例如：

```js
var message;    // 这个变量声明之后默认取得了 undefined 值
// var age      // 这个变量并没有声明

console.log(message);           // "undefined"
console.log(age);               // 产生错误
console.log(typeof message);    // "undefined"
console.log(typeof age);        // "undefined"
```

### Null类型

Null类型也只有一个值，即null，用来表示值的空缺。

可以认为undefined是系统级的、出乎意料的或类似错误的值的空缺，而null是程序级、正常的或在意料之中的值的空缺。

下列场景应该用null：

+ 用来初始化一个变量，这个变量可能赋值为一个对象。
+ 用来和一个已经初始化的变量比较，这个变量可以是也可以不是一个对象。
+ 当函数的参数期望是对象时，作用参数传入。
+ 当函数的返回值期望是对象时，作用返回值传出。

下列场景不应当使用null：

+ 不要使用 null 来检测是否传入了某个参数。
+ 不要使用 null 来检测一个未初始化的变量。

### Boolean类型

只有两个字面值：true 和 false 均为小写

各种数据类型转换为Boolean型的规则：

|<center>数据类型</center>|<center>转换为true值</center>|<center>转换为false的值</center>|
|----|----|----|
|Undefined|-|undefined|
|Null|-|null|
|Boolean|true|false|
|String|任何非空字符串|""（空字符串）|
|Number|任何非零数字值（包括无穷大）|0和NaN|
|Object|任何对象|-|

### Number类型

JavaScript中所有数字均采用IEEE754格式的浮点数值表示

> 扩展阅读「IEEE 754-1985」
> https://en.wikipedia.org/wiki/IEEE_754-1985

#### 整数

在 JavaScript 中进行算术计算时，所有以八进制和十六进制表示的数值最终都将被转换成十进制数值。例如：

```js
var a = 10;         // 十进制
var b = 023;        // 八进制
var c = 0x12ac;     // 十六进制
console.log(b);     // 19
console.log(c);     // 4780
```

#### 浮点数

```js
var a = 1.1;
var b = 0.1;
var c = .1;     // 有效，但不推荐
var a = 5.;      // 解析成整数5
var b = 5.0;     // 解析成整数5
var a = 3.14e7;             // 等于31400000
var b = 3.14E-7;            // 等于0.000000314
console.log(0.0000003);     // 3e-7
console.log(0.1 + 0.2);     // 0.30000000000000004 浮点数值的最高精度为17为小数，永远不要测定某个特定的浮点数值
```

#### 正无穷、负无穷

```js
console.log(Number.MAX_VALUE);       // 最大数 1.7976931348623157e+308
console.log(Number.MIN_VALUE);       // 最小数 5e-324

console.log(Number.POSITIVE_INFINITY);    // 正无穷  Infinity
console.log(Number.NEGATIVE_INFINITY);    // 负无穷 -Infinity

console.log( 1 / 0);     //  Infinity
console.log(-1 / 0);     // -Infinity

console.log(isFinite(100));         // true
console.log(isFinite(Infinity));    // false 
```

#### NaN

NaN（not a number），是一个特殊的数值。之所以称它为「非数值」，是因为它不能参与算数运算，任何涉及 NaN 的操作都返回 NaN。并且 NaN 与任何值都不相等（包括自身）。

```js
console.log(typeof NaN);      // "number"

console.log(0 / 0);                 // NaN
console.log(NaN - NaN);             // NaN
console.log(Infinity - Infinity);   // NaN

var a = NaN;
console.log(a === a);   // false

console.log(isNaN(100));        //  false
console.log(isNaN("100"));      //  false
console.log(isNaN(true));       //  false
console.log(isNaN("sss"));      //  true
console.log(isNaN(NaN));        //  true
```

#### Number()、parseInt()、parseFloat() 转型函数

Number()转换规则如下：

+ undefined 转换为 NaN；
+ null 转换为 0；
+ true 转换为 1、false 转换为 0；
+ number 整数转换为十进制，小数不变；
+ string 如果只包含十进制数和小数，则返回对应的数值，如果只包含八进制数，则忽略前导0返回剩余部分，如果只包含十六进制，则返回十进制数，空字符串转换为0，其它字符串转换为 NaN；
+ 如果 object 具有 valueOf() 方法，且返回一个原始值（5种简单数据类型），则将这个原始值转换为数字，并返回这个数字；否则，如果 object 具有 toString() 方法，且返回一个原始值，则将这个原始值转换为数字，并返回这个数字；否则，抛出一个类型错误异常。

```js
console.log(parseInt(""));          // NaN（Number("")返回 0）
console.log(parseInt("123S"));      // 123
console.log(parseInt("12.4"));      // 12

console.log(parseFloat("098.2"));       // 98.2
console.log(parseFloat("123.23.23"));   // 123.23
```

### String类型

用单引号和双引号都可

```js
var firstName = "Nicholas";
var lastName = 'Zakas';

console.log("\n\\".length);    // 2
console.log("\\hello");        // "\hello"（长度为6）

// toString()
console.log(true.toString());   // "true", undefined和null值没有这个方法

var num = 10;
console.log(num.toString());    // "10"
console.log(num.toString(2));   // "1010"
console.log(num.toString(8));   // "12"
console.log(num.toString(16));  // "a"

// String()
var value;
console.log(String(10));        // "10"
console.log(String(true));      // "true"
console.log(String(null));      // "null"
console.log(String(value));     // "undefined"
```

### Object类型

JavaScript 中所有对象都继承自 Object 类型，每个对象都具有下列基本的属性和方法：

+ constructor：保存着用于创建当前对象的函数（构造函数）。
+ hasOwnProperty()：用于检查给定的属性在当前对象实例中是否存在。
+ propertyIsEnumerable()：用于检查给定的属性是否能够使用for-in语句来枚举。
+ isPrototypeOf()：用于检查对象是否是传入对象的原型。
+ toString() 方法：返回对象的字符串表示。
+ toLocaleString()：返回对象的本地字符串表示。
+ valueOf()：返回对象的字符串、数值或布尔值表示（通常与toString()方法的返回值相同）。

```js
// 创建空对象
var obj = new Object();
var obj = {};   // 好的写法

// 定义一个对象
var obj = {
    name: "Carrot",
    "for": "Max",
    details: {
        color: "orange",
        size: 12
    }
}

// 可以通过链式（chain）表示方法进行访问
obj.details.color;       // orange
obj["details"]["size"];  // 12

// 完成创建后可以通过下面两种方式赋值和访问
obj.name = "Simon"      // 赋值
var name = obj.name;    // 访问

obj["name"] = "Simon";  // 赋值
var name = obj["name"]; // 访问
```

### 关卡

```js
// 挑战一
console.log(typeof "undefined");  // ???
console.log(typeof null);         // ???
// 挑战二
var message = "some string";
console.log(typeof massage);    // ???
message = 10000;
console.log(typeof message);    // ???
// 挑战三
var a;
var b = null;
var c = {};
if(a && b && c){
    console.log("true.");       // ???
}else{
    console.log("false.");      // ???
}
// 挑战四
console.log(typeof (0 / 0));    // ???
console.log(023 + 123);         // ???
// 挑战五
console.log(Number("1234S"));   // ???
console.log(parseInt("1234S")); // ???
// 挑战六
console.log(3.14E-7 === 0.000000314);   // ???
console.log(0.1 + 0.6 === 0.7); // ???
console.log(0.1 + 0.7 === 0.8); // ???
console.log(NaN === NaN);       // ???
// 挑战七
console.log("\right\now");          // ???
console.log("\right\now".length);   // ???
console.log(010.toString(2));       // ???
// 挑战八
// 1、为 person、wife、child 对象新增 weight 属性，数值分别为 62、36、15。
// 2、为 person 对象新增二胎 child2 子对象，name 为 emma，其他属性自行发挥。
var person = {
    name: "stone",
    age: 30,
    wife: {
        name: "sohpie",
        age: 30
    },
    child:{
        name: "tommy",
        age: 3
    }
}
```

> 挑战九，深度阅读下面两篇文章，提出你的疑问。
>
> 「JavaScript 检测原始值、引用值、属性」 http://shijiajie.com/2016/06/20/javascript-maintainable-javascript-validate1/
>
> 「JavaScript 检测之 basevalidate.js」 http://shijiajie.com/2016/06/25/javascript-maintainable-javascript-basevalidatejs/