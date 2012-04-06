var positionsArray = {};
var boysArray  = new Array();
var boy;
var mousePosition = {
	x: 0,
	y: 0,
	isChanged: false
};

function initialize(){
	$(document).ready(function(){
		//Boy的构造Boy(name,x,y,speed,dir)
		boy = new Boy("AI boy");
		boy.speed = 10;
		boy.x = Math.round(Math.random()*800);
		boy.y = Math.round(Math.random()*800);
		boy.dir = DIR.UP;
		boy.helloBaby(); // boy开始启动
		//$("body").bind("mousemove","mouseMoveListener()");
		//boyArray.push(boy);
		
		// 初始化 障碍物
		initBlocks( boysArray , 100, 100, 3, 7, 150);
	});
}

/**
 * 初始化障碍物（暂用boy代替）
 * 障碍物按矩阵排列
 * 
 * @param blocks   	boy数组
 * @param originX  	矩阵x轴原点
 * @param originY  	矩阵y轴原点
 * @param row		矩阵行数
 * @param col		矩阵列数
 * @param space		矩阵节点之间的空间大小
 */
function initBlocks( blocks, originX, originY, row, col, space){
	while( row-- > 0){
		var _col = col;
		while( _col-- > 0){
			//Boy的构造Boy(name,x,y,speed,dir)
			var temp = new Boy(
					"障碍物"+(row+1)+(_col+1),
					originX+ space*_col,
					originY + space*row);
			
			temp.dir = DIR.STOP;
			temp.helloBaby();
			blocks.push(temp);
		}
	}
}


function mouseMoveListener(event){
	mousePosition.x = event.clientX;
	mousePosition.y = event.clientY;
	
	//mousePosition.isChanged = true;
	seekWays( boy,
			  mousePosition,
			  boy.destPositions,
			  boysArray );
	
	$("#mouseInfo").empty();
	$("#mouseInfo").append( "x = " + event.clientX + "<br/>" +
						  	"y = " + event.clientY + "<br/>" +
						  	"width = " + boy.width + "<br/>" +
						  	"height = " + boy.height + "<br/>" +
						  	"points = " + boy.destPositions.length);
	
	$("#mouseInfo").css("left", event.clientX);
	$("#mouseInfo").css("top", event.clientY);
}
