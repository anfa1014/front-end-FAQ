### 跨域请求

浏览器会使用同源策略来来保护用户的安全，同源是指url中的协议、端口号、以及域名是完全相同的
> * 协议和端口号的问题，前端无法解决
> * 域名仅仅是通过URL首部来识别，不会根据域名对应的IP地址。

常用解决方法：

1. window.postMessage(H5新特性)
2. CORS方案
	* 让需要访问的服务器修改header:Access-Control-Allow-Origin的值为* 
3. 反向代理：例如使用Nginx
4. window.name + iframe 
	* 原理：页面重新加载时window.name的值不会改变
	* 支持非常长的 name 值（2MB）
5. document.domain+iframe 
	* 主域相同，子域不同
6. JSONP
	* 本质是使用get方式下载一个资源文件
	* 在跨域脚本中可以直接回调当前脚本的函数


### Ajax和JSONP的区别
ajax和jsonp的调用方式很像，目的一样，都是请求url，然后把服务器返回的数据进行处理

1. 实质不同
	* ajax的核心是通过xmlHttpRequest获取非本页内容
	* jsonp的核心是动态添加script标签调用服务器提供的js脚本
2. 区别联系
	* 不在于是否跨域
	* ajax通过服务端代理一样跨域
	* jsonp也不并不排斥同域的数据的获取
3. jsonp是一种方式或者说非强制性的协议
4. jonp只支持get请求，ajax支持get和post请求

### 事件冒泡
事件流描述的是从页面中接受事件的顺序：事件捕获-处于目标阶段-事件冒泡

注册方式：

* a.onclick
* < div onclick="">
* a.addEventListener('click',fn,true);

使用stopPropagation阻止冒泡

应用：事件委托
	* 只指定一个事件处理程序，管理某一类型的事件

### call 、apply 、bind区别
1. 都是改变改变某个函数运行时的上下文（context）而存在的，即改变this指向
2. 第一个参数都是this要指向的对象，也就是想指定的上下文
3. bind 是返回对应函数，便于稍后调用；apply 、call 则是立即调用
4. call 是按顺序传递参数，apply是可以传递数组

### arguments
arguments对象是所有（非箭头）函数中都可用的局部变量。你可以使用arguments对象在函数中引用函数的参数。是一个类数组对象，用于个 length 属性和若干索引属性。不具有数组所具有的方法
转换方法：

1. [].slice.call(arg)
2. [].splice.call(arg,0)
3. Array.from(arg)
4. [].concat.apply([],arg）

### typeof
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

### 如何区分{}和[] instanceof?

### new运算符发生了什么？
1. 创建一个全新的对象
2. 这个新对象会被执行[[prototype]]链接
3. 这个对象会被绑定到函数运行时候的this
4. 如果函数没有返回对象，new表达式中的 函数调用会自动返回这个新函数

### 对象赋值
* 深赋值
* 浅赋值
	* var newobj=JSON.parse(JSON.stringfy(obj))
	* var newobj=Object.assign({},obj)

### 检查枚举
obj.propertyIsEnumerable(属性) 
### Object.create()
创建一个对象并把这个对象的[[prototype]]关联到指定的对象

### 原型相关函数
1. Foo.prototype.isPrototypeOf(a)  a的整条[[prototype]]链上是否出现过Foo.prototype08
2. Object.getPrototypeOf(a) 获取a的[[prototype]]

### 判断数据类型
* 数组
	* Object.prototype.toString.call(arr) == "[object Array]"
	* Array.isArray(arr)	 
  