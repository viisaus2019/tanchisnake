/**
 * Map 地图类
 * @row 行属性
 * @col 列属性
 * @width 总宽度属性
 * @height 总高度属性
 **/
function Map(row, col, width, height) {
	this.row = row;
	this.col = col;
	this.width = width;
	this.height = height;
	// 有一个数组属性
	this.arr = [];
	// 由于最终要渲染在页面中， 所以要借助一个dom元素
	this.dom = document.createElement("div");
}

// 方法要写在原型中
// 填充方法
Map.prototype.fill = function() {
	for (var j = 0; j < this.row; j++) {
		// 由于是要一行一行的创建，所以要创建一个行容器
		var row_dom = document.createElement("div");
		// 创建一个行数组
		var row_arr = [];
		// 给row_dom添加类名
		row_dom.className = "row"; 
		// 循环将每一行填充满
		for (var i = 0; i < this.col; i++) {
			// 创建一个小方格元素
			var col_dom = document.createElement("span");
			// 给col_dom添加类名
			col_dom.className = "grid";
			// 追加子元素
			row_dom.appendChild(col_dom);
			// 将创建出来的每一个小方格元素追加到行数组中
			row_arr.push(col_dom);
		}

		// 将填充满的每一行追加到dom中
		this.dom.appendChild(row_dom);
		// 将row_arr放入到自身的arr属性中
		this.arr.push(row_arr);
		// 给dom添加类名
		this.dom.className = "box";
	}
	// 上树
	document.body.appendChild(this.dom);
}

// 清屏
Map.prototype.clear = function() {
	// 循环清除地图中的背景颜色
	for (var i = 0; i < this.arr.length; i++) {
		for (var j = 0; j < this.arr[i].length; j++) {
			// this.arr[i][j].style.backgroundColor = "white";
			this.arr[i][j].style.backgroundImage = "none";
		}
	}
}