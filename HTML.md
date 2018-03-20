### 移动端浏览器，视口不能放大，且视口要求和屏幕一样大
< meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" >
### < meta >
用于描述关于网页的元数据，不会呈现在网页中，但是可以被机器识别。meta常用于定义页面的说明，关键字，最后修改日期，和其它的元数据。这些元数据将服务于浏览器（如何布局或重载页面），搜索引擎和其它网络服务。

两个值：

* name属性描述网页，比如网页的关键词，叙述等 
	* < meta name="参数" content="具体的描述">。
	* keywords(关键字)
	* description(网站内容的描述)
	* viewport(移动端的窗口)
	* robots(定义搜索引擎爬虫的索引方式)
* http-equiv属性相当于HTTP的作用，比如说定义些HTTP参数啥的。 
	*  < meta http-equiv="参数" content="具体的描述">
	*  content-Type(设定网页字符集)(推荐使用HTML5的方式 charset)
	*  X-UA-Compatible(浏览器采取何种版本渲染当前页面)
	*  refresh(自动刷新并指向某页面)
* charset 

### HTML5自定义属性
使用data-前缀设置我们需要的自定义属性 < div data-name="abc">

* 获取属性方式
	* dom.dataset.name
	* dom.getAttribute('data-name')
* 使用dataset操作data 要比使用getAttribute稍微慢些的，但是处理少量的data数据差不多

### cookies sessionStorage和localStorage
* 数据的生命期
	* cookie 一般由服务器生成，可设置失效时间。如果在浏览器端生成Cookie，默认是关闭浏览器后失效
	* localStorage 除非被清除，否则永久保存
	* sessionStorage 仅在当前会话下有效，关闭页面或浏览器后被清除,刷新不被清除
* 存放数据大小
	* cookie 4KB
	* storage约为5MB
* 与服务器端通信
	* cookies 每次都会携带在HTTP头中，如果使用cookie保存过多数据会带来性能问题
	* storage 仅在客户端（即浏览器）中保存，不参与和服务器的通信
* 易用性
	* cookies不友好
	* storage友好，可以二次封装

### 浏览器的标准模式和怪异模式
现代的浏览器一般都有两种渲染模式：标准模式和怪异模式。在标准模式下，浏览器按照HTML与CSS标准对文档进行解析和渲染；而在怪异模式下，浏览器则按照旧有的非标准的实现方式对文档进行解析和渲染。这样的话，对于旧有的网页，浏览器启动怪异模式，就能够使得旧网页正常显示；对于新的网页，则可以启动标准模式，使得新网页能够使用HTML与CSS的标准特性。
对于没有文档类型声明或者文档类型声明不正确的文档，浏览器就会认为它是一个旧的HTML文档，就会使用怪异模式解析和渲染该文档





