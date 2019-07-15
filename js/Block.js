/*障碍物类*/
function Block(img) {
	// 有一个数组属性
	this.arr = [
		// {row: 8, col: 8},
		// {row: 8, col: 9},
		// {row: 8, col: 10},
		// {row: 9, col: 10},
		// {row: 10, col: 10},
		// {row: 11, col: 10},
		// {row: 12, col: 10},
		// {row: 13, col: 10},
		// {row: 14, col: 10},
		// {row: 15, col: 10},

		// 测试
		{row: 6, col: 5},
		{row: 6, col: 6},
		{row: 6, col: 7},
		{row: 7, col: 7},
		{row: 8, col: 7},
	];
	// 图片属性
	this.img = img;
}