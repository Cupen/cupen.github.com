/**
 * Ѱ·��Ҫ�ƹ��ϰ���
 * 
 * @param destPoint
 * @param positionArray
 * @param blocks
 */
function seekWays( localBoy, destPoint, positionArray, blocksArray){
	// ���ԭ��·�ߣ�����Ѱ·��
	while(positionArray.length > 0){
		positionArray.pop();
	}
	var ways = new Array();
	var tempway = new Array();
	while(false){
		
	}
	
	// ����X�ᣬ����Y��
	positionArray.push( {x:destPoint.x, y:localBoy.y} );
	positionArray.push( {x:destPoint.x, y:destPoint.y} );
}

function createWays( originPoint, destPoint, spaceX, spaceY){
	var increaseX=0;
	var increaseY=0;
	var increaseX_Dir = localBoy.x > destPoint.x ? -1 : 1; // x����������
	var increaseY_Dir = localBoy.y > destPoint.y ? -1 : 1; // y����������
	var absX = Math.abs( localBoy.x - destPoint.x );
	var absY = Math.abs( localBoy.y - destPoint.y );
	
	var seekX_Array = new Array();
	var seekY_Array = new Array();
}

function seekAllWays( localBoy, destPoint, array, blocksArray){
	var increaseX=0;
	var increaseY=0;
	var increaseX_Dir = localBoy.x > destPoint.x ? -1 : 1; // x����������
	var increaseY_Dir = localBoy.y > destPoint.y ? -1 : 1; // y����������
	var absX = Math.abs( localBoy.x - destPoint.x );
	var absY = Math.abs( localBoy.y - destPoint.y );
	
	var tempArr = new Array();
	
	var tempX = localBoy.x;
	var tempY = localBoy.y;
	
	while( increaseX > absX ){
		if( !checkBlock(
				{x:tempX,y:tempY,width:localBoy.width, height:localBoy.height},
				blocksArray)
		){
			temp.push({x:tempX, y:tempY});
		}
		
		while( increaseY > absY ){
			var tempY = localBoy.y + (++increaseY)*localBoy.speed * increaseY_Dir;
			if( !checkBlock(
					{x:tempX,y:tempY,width:localBoy.width, height:localBoy.height},
					blocksArray)
			){
				temp.push({x:tempX, y:tempY});
			}
		}
	}
}

function checkBlock( localBoy, blocksArray){
	var spaceX, spaceY; // spaceX,X�ᰲȫ���룬spaceY,Y�ᰲȫ����
 	var absX, absY; 	// absX, X��ʵ�ʾ���, absY,Y��ʵ�ʾ��� 
	
 	for(var i=0, length=blocksArray.length; i < lenght; i++){
		spaceX = Math.floor( (localBoy.width + blocksArray[i].width)/2 );
		spaceY = Math.floor( (localBoy.height + blocksArray[i].height)/2 );
		absX = Math.abs( localBoy.x - blocksArray[i].x );
		absY = Math.abs( localBoy.y - blocksArray[i].y );
		if ( absX < spaceX && absY < spaceY ) {
			return true; // �����������ϰ�����
		}
	}
 	return false; // �����껹ľ���ϰ���
}