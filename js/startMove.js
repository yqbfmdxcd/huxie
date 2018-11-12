/*
 * 运动函数封装
 */

function startMove(elem, json, fn){
	clearInterval(elem.timer);
	elem.timer = setInterval(function(){
		var flag = true;	// 假设所有的属性，都已经到达目标值
		for( attr in json ){
			// 当前值
			var v = getStyle(elem, attr);
			if( attr == "opacity" ){
				v = Math.round(v*100);
			}else{
				v = parseInt(v);
			}
			// 速度
			var target = json[attr];
			var speed = (target - v)/6;		
			speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
			// 更新
			if( attr == "opacity" ){
				elem.style[attr] = (v+speed)/100;
				if( /MSIE/.test(navigator.userAgent) ){
					elem.style.filter = "alpha(opacity:"+(v+speed)+")";
				}
			}else{
				elem.style[attr] = v+speed+"px";
			}
			if( v != target ){
				flag = false;				
			}
		}
		if( flag){
			clearInterval(elem.timer);
			if(fn){
				fn();
			}
		}
	}, 60);
}

function getStyle(elem, attr){
	if( window.getComputedStyle ){
		return window.getComputedStyle(elem, false)[attr];
	}else{
		return elem.currentStyle[attr];
	}
}
