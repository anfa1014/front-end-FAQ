## position
* static：指定元素使用正常的布局行为，即元素在文档常规流中当前的布局位置。此时 top, right, bottom, left 和 z-index 属性无效。
* relative：在不改变页面布局的前提下调整元素位置
* absolute：不为元素预留空间，通过指定元素相对于最近的非 static 定位祖先元素的偏移，来确定元素位置。绝对定位的元素可以设置外边距（margins），且不会与其他边距合并。
* sitcky(粘性定位)：css3新特性，结合了relative和fixed
* 还有其他公共值：inherit等

## 垂直居中
* table
	* wrapper的display为table
	* cell的display为table-cell && vertical-align为middle;
* margin-top + 绝对定位+ top50%
	* 必须已知高度
	* margin-top 为高度的一半
*  transform 
	* position为relative  
	* top 50%
	* translateY(-50%)  注意：50%是元素自身高度
* margin auto
	* 绝对定位 left right bottom top 为0
	* 必须已知高度和宽度，否则会沾满容器  
* flex布局
 
## transform
* rotate() 旋转
* skew() 变形
* scale() 缩放
* translate(,) 移动 


## link和import区别

## flex布局
* 容器具有的属性
	* display 为flex 或者 inline-flex
	* flex-direction 决定主轴方向，即项目的排列顺序
	* flex-wrap  项目不在同一轴线，如何换行
	* flex-flow direction和wrap的简写
	* justify-content 主轴对齐方式
	* align-items 交叉轴对称方式
	* align-content  多根轴线的对称方式
* item具有的属性
	* order 项目的排列顺序。数值越小，排列越靠前，默认为0
	* flex-grow 放大比例 默认为0
	* flex-shrink 缩小比例，默认为1
	* flex-basis 分配多余空间之前，项目占据的主轴空间
	* flex grow&shrink&basis简写
	* align-self 允许与其元素不同的对齐方式

## 清除浮动的方法
* clear
	* 容器内添加空标签  clear:both
	* 容易添加伪元素after 设置为clear：both
* bfc
	*  容器设置overflow为auto或者hidden
	*  容器设置float不为none
	*  容器设置Position为absolute和fixed
	*  容器display为inline-block、flex等 
	
## 实现两列等宽
*  使用float：left
*  flex 
	* item的flex-grow为1

## box-model盒模型
网页布局的基础,每个元素被表示为一个矩形的方框，框的内容、内边距、边界和外边距。浏览器渲染网页布局时，它会算出每个框的内容要用什么样式，内边距边界和外边距的是多少，以及框相对于其它框放在哪里。

*  content:width和height
	* width:固定值、百分比、available、min-content、max-content、fit-content、auto
	* height:固定值、百分比、auto  
*  内边距 padding
	* < length > | < percentage >
	* 默认为0，不能为负数
	* 百分比是和本身包含的元素的宽度有关的
*  边框 border
	* 位于内边距的外边缘以及外边距的内边缘之间。边界的默认大小为0  
	* border宽度 
		* 正数和关键字
		* 默认是medium 
	* border颜色
		*  初始值是currentcolor 
	* border样式  
		* 默认是none
		* 有效值：hidden、double、none、dot、solid
*  外边距 margin
	* margin的top和bottom属性对非替换内联元素无效 如span
	*  固定值，百分比，auto
	*  百分比是相对于父元素块的宽度

## box-sizing
用于更改用于计算元素宽度和高度的默认的 CSS 盒子模型

* 关键字值content-box和border-box
* content-box 默认值，width是content的宽度
* border-box width=border+content+padding

## BFC（块格式化上下文）
Box 是 CSS 布局的对象和基本单位，元素的类型和 display 属性，决定了这个 Box 的类型。 不同类型的 Box， 会参与不同的 Formatting Context（一个决定如何渲染文档的容器）。

定义的是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。

*  Block Formatting Context（BFC | 块级格式化上下文）
*  Inline Formatting Context（IFC |行内格式化上下文）。
	* 一个接一个地水平排列，起点是包含块的顶部。水平方向上的 margin，border 和 padding在框之间得到保留。框在垂直方向上可以以不同的方式对齐：它们的顶部或底部对齐，或根据其中文字的基线对齐。包含那些框的长方形区域，会形成一行，叫做行框。  

块格式化上下文（Block Formatting Context，BFC） 是Web页面的可视化CSS渲染的一部分，是布局过程中生成块级盒子的区域，也是浮动元素与其他元素的交互限定区域。

下列方式会创建块格式化上下文：
* 浮动元素（元素的 float 不是 none）
* 绝对定位元素（元素的 position 为 absolute 或 fixed）
* 行内块元素（元素的 display 为 inline-block）
* overflow 值不为 visible 的块元素
用处：
1. 清除浮动
2. 布局：自适应两栏布局
3. 防止垂直margin合并


