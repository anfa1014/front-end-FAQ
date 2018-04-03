

## 事件冒泡
事件流描述的是从页面中接受事件的顺序：事件捕获-处于目标阶段-事件冒泡

注册方式：

* a.onclick
* < div onclick="">
* a.addEventListener('click',fn,true);

使用stopPropagation阻止冒泡

应用：事件委托
	* 只指定一个事件处理程序，管理某一类型的事件

## call 、apply 、bind区别
1. 都是改变改变某个函数运行时的上下文（context）而存在的，即改变this指向
2. 第一个参数都是this要指向的对象，也就是想指定的上下文
3. bind 是返回对应函数，便于稍后调用；apply 、call 则是立即调用
4. call 是按顺序传递参数，apply是可以传递数组

## arguments
arguments对象是所有（非箭头）函数中都可用的局部变量。你可以使用arguments对象在函数中引用函数的参数。是一个类数组对象，用于个 length 属性和若干索引属性。不具有数组所具有的方法
转换方法：

1. [].slice.call(arg)
2. [].splice.call(arg,0)
3. Array.from(arg)
4. [].concat.apply([],arg）

## typeof
1. undefined
2. object
3. boolean
4. number
5. string
6. symbol
7. function
	* typeof function(){} === 'function';
	* typeof class C{} === 'function'
	* typeof Math.sin === 'function'
	* typeof new Function() === 'function'

## 如何区分{}和[] instanceof?

## new运算符发生了什么？
1. 创建一个全新的对象
2. 这个新对象会被执行[[prototype]]链接
3. 这个对象会被绑定到函数运行时候的this
4. 如果函数没有返回对象，new表达式中的 函数调用会自动返回这个新函数

## 对象赋值
* 深赋值
* 浅赋值
	* var newobj=JSON.parse(JSON.stringfy(obj))
	* var newobj=Object.assign({},obj)

## 检查枚举
obj.propertyIsEnumerable(属性) 


## Object.create()
创建一个对象并把这个对象的[[prototype]]关联到指定的对象

## 原型相关函数
1. Foo.prototype.isPrototypeOf(a)  a的整条[[prototype]]链上是否出现过Foo.prototype08
2. Object.getPrototypeOf(a) 获取a的[[prototype]]

## 判断数据类型
* 数组
	* Object.prototype.toString.call(arr) == "[object Array]"
	* Array.isArray(arr)	 

## var let const
* let 和const不存变量声明的提升
* let 和const 不能重复声明
* const也属于块级作用域
使用defineProperty 模拟const

```
Object.defineProperty(obj,"xxx",{
	value:42,
	writable:false,
	configuralbe:false
})
```

## 点击事件触发事件顺序
mousedown -> focus  -> mouseup -> click -> keydown 

## 数组方法
* splice 通过删除现有元素和/或添加新元素来更改一个数组的内容。
	* array.splice(`start`, `deleteCount`, `item1`, `item2`, `...`)
	* 

## CMD 和 AMD
* AMD推崇依赖前置，在定义模块的时候就要声明其依赖的模块  requireJS
* CMD推崇就近依赖，只有在用到某个模块的时候再去require  SeaJS

> AMD和CMD最大的区别是对依赖模块的执行时机处理不同，注意不是加载的时机或者方式不同
  