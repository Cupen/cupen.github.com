var imagePath = "/theme/images/picture/";
var count_debug = 0;
var images = {
	up: imagePath + "tankUp.png",
	down: imagePath + "tankDown.png",
	left: imagePath + "tankLeft.png",
	right: imagePath + "tankRight.png"
};
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
	fire:false,
}

var input = {
	w:false,
	s:false,
	a:false,
	d:false,
	f:false,
	
	up:false,
	down:false,
	left:false,
	right:false,
}

/**
 * x,y 		坐标
 * speed 	移动速度
 * dir 		初始方向
 * name		显示文字
 */

function Boy(name,x,y,speed,dir){
	this.name = (name == null ? "随机boy" : name);
    this.x = (x == null ? Math.round(Math.random()*1000) : x);
    this.y = (x == null ? Math.round(Math.random()*1000) : x);
	this.width = 0;
	this.height = 0;
    this.speed = (speed == null ? Math.round(Math.random()*10) + 5 : speed);
    this.dir = (dir == null ? Math.round(Math.random()*10)%5 : dir);
    this.boyDiv = null;
	
	var _timer = null;
	var _this = this;
    
	this.helloBaby = function helloBaby(){
	    _initialize();
		_updataWidthAndHeight();
	   	//_run();
	   	_timer = window.setInterval(function(){_run();}, 30);
	};
	
	this.destroy = function(){
        window.clearInterval(_timer);
        if(this.boyDiv != null) {
            document.getElementsByTagName("body")[0].removeChild(this.boyDiv);
        }
        _timer = null;
        _this = null;
    }
	
    this.toString = function(){
        return ("name="+ this.name +",x=" + this.x + ",y=" + this.y + ",dir=" + this.dir);
    };
	
    var _initialize = function(){
		var textTag = document.createElement("p1");
	    var imgTag = document.createElement("img");
	    var divTag = document.createElement("div");
		
		imgTag.setAttribute("src", imagePath + "tankUp.png");
		
		textTag.textContent = _this.name;
		textTag.text = _this.name;
		textTag.style.color = "#0a0a0a";
		
		//拉倒~
		//style="clear: left; position: absolute;"
	    //divTag.style.clear = "left";
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
		console.log(_this.boyDiv.style.width);
		
	}
	
	var _run = function(){
	    operate_CPU(_this);
	    _move();
	    _hitBorder();
	    _paint();
	    //_timer = window.setTimeout(function(){_run();}, 30);
	    //console.log(_this);
	    //console.log(boy.boyDiv);
	    //console.count(count_debug)
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
                imgTag.src = images.up;
                break;
                
            case DIR.DOWN:
                imgTag.src = images.down;
                break;
                
            case DIR.LEFT:
                imgTag.src = images.left;
                break;
                
            case DIR.RIGHT:
                imgTag.src = images.right;
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

function operate(boy,keyEvent){
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
    }
}

function operate_CPU(boy){
    var shamKeyEvent = new Object();
    var randInt = (Math.round(Math.random() * 40));// 4-40
	shamKeyEvent.keyCode = 0;//防止undefined
    shamKeyEvent.which = 0;
    switch (randInt) {
        case 1:
            shamKeyEvent.keyCode = KEY.W;
            shamKeyEvent.which = KEY.W;
            break;
            
        case 2:
            shamKeyEvent.keyCode = KEY.S;
            shamKeyEvent.which = KEY.S;
            break;
            
        case 3:
            shamKeyEvent.keyCode = KEY.A;
            shamKeyEvent.which = KEY.A;
            break;
            
        case 4:
            shamKeyEvent.keyCode = KEY.D;
            shamKeyEvent.which = KEY.D;
            break;
    }
    operate(boy,shamKeyEvent);
	shamKeyEvent = null;
	randInt = null;
}

function setImages( _images){
	images = _images;
}
