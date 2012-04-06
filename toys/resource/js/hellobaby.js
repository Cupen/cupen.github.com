var imagePath = "resource/image/";
var count_debug = 0;

var KEY = {
    W: 87,
    S: 83,
    A: 65,
    D: 68
};

var DIR = {
    STOP: 0,
    UP: 1,
    DOWN: 2,
    LEFT: 3,
    RIGHT: 4,
	
	UP_LEFT:5,
	UP_RIGHT:6,
	DOWN_LEFT:7,
	DOWN_RIGHT:8
};

var commond = {
	scale:false,
	move:true,
	fire:false
};

var input = {
	w:false,
	s:false,
	a:false,
	d:false,
	f:false,
	
	up:false,
	down:false,
	left:false,
	right:false
};

/**
 * 伪重载构造，各项参数缺省值为随机数
 * 
 * @param name			显示文字
 * @param x,y 			坐标
 * @param speed 		移动速度
 * @param dir 			初始方向
 * @param destPositions 移动路线（Array）
 */
function Boy( name, x, y, speed, dir ){
	//this.AI = (AI == null ? true : false);
	this.name = (name == null ? "随机boy" : name);
    this.x = (x == null ? Math.round(Math.random()*1000) : x);
    this.y = (y == null ? Math.round(Math.random()*1000) : y);
	this.width = 0;
	this.height = 0;
    this.speed = (speed == null ? Math.round(Math.random()*10) + 5 : speed);
    this.dir = (dir == null ? Math.round(Math.random()*10)%5 : dir);
    this.boyDiv = null;
    this.destPositions = new Array();
    this.action = { move:true };
	
	var _timer = null; 	// 循环
	var _this = this;	// 当前对象的指针
    
	// 初始化并开动 boy
	this.helloBaby = function helloBaby(){
	    _initialize();
		_updataWidthAndHeight();
	   	//_run();
	   	_timer = window.setInterval(function(){_run();}, 30);
	};
	
	// 消除 boy
	this.destroy = function(){
        window.clearInterval(_timer);
        if(this.boyDiv != null){
            document.getElementsByTagName("body")[0].removeChild(this.boyDiv);
        }
        _timer = null;
        _this = null;
    };
	
    // 仅作测试
    this.toString = function(){
        return ("name="+ this.name +",x=" + this.x + ",y=" + this.y + ",dir=" + this.dir);
    };
	
    var _initialize = function(){
		var textTag = document.createElement("p1");
	    var imgTag = document.createElement("img");
	    var divTag = document.createElement("div");
		
	    // div 里的图片
		imgTag.setAttribute("src", imagePath + "tankUp.png");
		
		// div里的文字
		textTag.textContent = _this.name;
		textTag.text = _this.name;
		textTag.style.color = "#0a0a0a";
		
		// div
		divTag.style.position = "absolute";
		divTag.appendChild(textTag);
		divTag.appendChild(document.createElement("br") );
	    divTag.appendChild(imgTag);
	    
		document.getElementsByTagName("body")[0].appendChild(divTag);
		_this.boyDiv = divTag;
	};
	
	var _updataWidthAndHeight = function(){
		var w = _this.boyDiv.scrollWidth;
		var h = _this.boyDiv.scrollHeight;
		
		_this.width = parseInt(w);
		_this.height = parseInt(h);
	};
	
	var _run = function(){
	    operate_CPU(_this);
	    _move();
	    //_hitBorder();  //demo 不做限制
	    _paint();
	};
	
    var _move = function(){
        switch (_this.dir) {
            case DIR.UP:
                _this.y -= _this.speed;
                break;
                
            case DIR.DOWN:
                _this.y += _this.speed;
                break;
                
            case DIR.LEFT:
                _this.x -= _this.speed;
                break;
                
            case DIR.RIGHT:
                _this.x += _this.speed;
                break;
                
            // default: break;
    	}
	};
    
    var _paint = function(){
	
		var imgTag = _this.boyDiv.getElementsByTagName("img")[0];
        switch (_this.dir) {
            case DIR.UP:
                imgTag.src = imagePath + "tankUp.png";
                break;
                
            case DIR.DOWN:
                imgTag.src = imagePath + "tankDown.png";
                break;
                
            case DIR.LEFT:
                imgTag.src = imagePath + "tankLeft.png";
                break;
                
            case DIR.RIGHT:
                imgTag.src = imagePath + "tankRight.png";
                break;
            // default: break;
        }
        
        _this.boyDiv.style.left = _this.x + "px";
        _this.boyDiv.style.top = _this.y + "px";
    };
    
    var _hitBorder = function(){
        if (_this.x > window.innerWidth - _this.width) {
            _this.x = window.innerWidth - _this.width;
        }
        if (_this.x < 0) {
            _this.x = 0;
        }
        if (_this.y > window.innerHeight - _this.height) {
            _this.y = window.innerHeight - _this.height;
        }
        if (_this.y < 0) {
            _this.y = 0;
        }
    };
}

/**
 * 拿到按键键值，兼容IE和FF
 * @param keyEvent
 * @returns {Number}
 */
function getKeyCode(keyEvent){
    var keyNum = 0;
    // IE
    if (window.event) {
        keyNum = keyEvent.keyCode;
        
    } else if(keyEvent.which) {
		keyNum = keyEvent.which;
		
	}
    return keyNum;
}

function operateWithKeyInput(boy,keyEvent){
    var keyCode = getKeyCode(keyEvent);
    switch (keyCode) {
        case KEY.W:
            boy.dir = DIR.UP;
            break;
            
        case KEY.S:
            boy.dir = DIR.DOWN;
            break;
            
        case KEY.A:
            boy.dir = DIR.LEFT;
            break;
            
        case KEY.D:
            boy.dir = DIR.RIGHT;
            break;
        
        default: alert("哨塔operateWithKeyInput(boy,keyEvent)");
    }
}

//function operate_CPU(boy){
//	if(!boy.action.move){ //boy是否静止
//		return;
//	}
//	var shamKeyEvent = new Object();// 伪造一个按键事件
//	shamKeyEvent.keyCode = 0;		// 兼容ie
//    shamKeyEvent.which = 0;			// 兼容 ff
//    switch(
//    	checkDirWithDest(
//    		{x:boy.x , y:boy.y},
//    		{x:boy.destPositions.x, y:boy.destPositions.y},
//    		boy.speed )
//    ){
//        case DIR.UP:
//            shamKeyEvent.keyCode = KEY.W;
//            shamKeyEvent.which = KEY.W;
//            break;
//            
//        case DIR.DOWN:
//            shamKeyEvent.keyCode = KEY.S;
//            shamKeyEvent.which = KEY.S;
//            break;
//            
//        case DIR.LEFT:
//            shamKeyEvent.keyCode = KEY.A;
//            shamKeyEvent.which = KEY.A;
//            break;
//            
//        case DIR.RIGHT:
//            shamKeyEvent.keyCode = KEY.D;
//            shamKeyEvent.which = KEY.D;
//            break;
//        
//        case DIR.STOP:
//        	shamKeyEvent.keyCode = 0;
//            shamKeyEvent.which = 0;
//            return; // 停止操作
//    }
//    operateWithKeyInput(boy,shamKeyEvent);
//	shamKeyEvent = null;
//}
function operate_CPU(boy){
	if( boy.destPositions.length <= 0){
		return;
	}
	var temp; // 决定boy的方向
	temp = checkDirWithDest(
    			{x:boy.x , y:boy.y},
    			{x:boy.destPositions[0].x, y:boy.destPositions[0].y},
    			boy.speed );
	
	if( temp == DIR.STOP){ // 已达当前终点
		boy.x = boy.destPositions[0].x;
		boy.y = boy.destPositions[0].y;
		boy.destPositions.shift(); // 去掉当前终点 
	}
	boy.dir = temp;
}

function checkDirWithDestQueue(boy){
	
}

/**
 * 返回从起点到终点的方向
 * 若终点与起点的X和Y轴距离大于一步的距离（oneStepSpace），则返回朝终点移动的方向
 * 反之，表示起点和终点不足一步之隔，返回个 DIR.STOP
 * 
 * @param origin   	{number, number}  起点坐标
 * @param dest 		{number, number}  终点坐标
 * @param oneStepSpace  number  boy每次移动的距离（speed属性）
 * 
 * @returns DIR.UP,
 * 			DIR.DOWN,
 * 			DIR.LEFT,
 * 			DIR.right,
 * 			DIR.STOP
 */
function checkDirWithDest(origin, dest, oneStepSpace){
	var abs_x = Math.abs( dest.x - origin.x );
	var abs_y = Math.abs( dest.y - origin.y );
	
	if( abs_x > oneStepSpace ||
		abs_y > oneStepSpace ){
		
		if( abs_x < abs_y ){
			return origin.y > dest.y ? DIR.UP : DIR.DOWN;
		} else {
			return origin.x > dest.x ? DIR.LEFT : DIR.RIGHT;
		}
	
	} else {
		return DIR.STOP;
		
	}
}
