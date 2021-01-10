# 关键字和保留字

ECMAScript 3 描述了一组具有特定用途的关键字，这些关键字可用于表示控制语句的开始或结束，或者用于执行特定操作等。按照规则，关键字是语言保留的，不能用作标识符。以下是 ECMAScript 3 的全部关键字：

```text
break       delete      function    return      typeof
case        do          if          switch      var
catch       else        in          this        void
continue    false       instanceof  throw       while
debugger    finally     new         true        with
default     for         null        try
```

ECMAScript 3 还将 Java 的所有关键字都作为自己的保留字，保留字也是不能当初标识符。尽管保留字还没有任何特定的用途，但他们有可能在将来被用作关键字：

```text
abstract    double      goto        native      static
boolean     enum        implements  package     super
byte        export      import      private     synchronized
char        extends     int         protected   throws
class       final       interface   public      transient
const       float       long        short       volatile
```

ECMAScript 5 把非严格模式下的保留字缩减为：

```text
class           enum            extends         super
const           export          import
```

ECMAScript 5 在严格模式下的保留字为：

```text
implements      package         public
interface       private         static
let             protected       yield
```

注意，let 和 yield 是 ECMAScript 5 新增的保留字，其他保留字都是 ECMAScript 3 定义的。为了保证兼容性，任何时候都不建议使用 ECMAScript 5 新增的保留字 let 和 yield 。

ECMAScript 还预定义了很多全局变量和函数，也应当避免把它们用作标识符：

```text
arguments           Error           Math            RegExp
Array               eval            NaN             String
Boolean             EvalError       Number          SyntaxError
Date                Function        Object          TypeError
decodeURI           Infinity        parseFloat      undefined
decodeURIComponent  isFinite        parseInt        URIError
encodeURI           isNaN           RangeError
encodeURIComponent  JSON            ReferenceError
```

JavaScript 的具体实现可能定义独有的全局变量和函数，每一种特定的 JavaScript 运行环境都有自己的一个全局属性列表，这一点是需要牢记的。