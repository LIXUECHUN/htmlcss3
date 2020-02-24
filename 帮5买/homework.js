/*上面的框滚动悬浮*/
window.onload = function() {
	var cover = document.getElementsByClassName('top')[0];
	var cover1 = document.getElementsByClassName('topout')[0];

	window.onscroll = function(){
		var str = document.documentElement.scrollTop || document.body.scrollTop;
		if(str>180){
			cover.style.position = "fixed";
		}else{
			cover.style.position = "static";
		}
	}
	window.onscroll = function(){
		var str = document.documentElement.scrollTop || document.body.scrollTop;
		if(str>180){
			cover1.style.position = "fixed";
		}else{
			cover1.style.position = "static";
		}
	}
}

/*充值动态*/
var recharge = document.getElementsByTagName('select')[0];
var str = document.getElementsByClassName('m3bom')[0].getElementsByTagName('span')[2];
recharge.onchange = function(){
	str.innerHTML = "￥" + recharge.value;
};





/*轮播图*/
function getStyle(obj, attr) { //返回值带有单位px
  	if (obj.currentStyle) {
  		return obj.currentStyle[attr];
  	} else {
  		return getComputedStyle(obj, null)[attr];
  	}
  }

function animate(obj, json, callback) {
	clearInterval(obj.timer);
	obj.timer = setInterval(function () {
		var flag = true;
		for (var attr in json) {
			(function (attr) {
				if (attr == "opacity") {
				var now = parseInt(getStyle(obj, attr) * 100);
				var dest = json[attr] * 100;
			} else {
				var now = parseInt(getStyle(obj, attr));
				var dest = json[attr];
			}
			var speed = (dest - now) / 6;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			if (now != dest) {
				flag = false;
				if (attr == "opacity") {
					obj.style[attr] = (now + speed) / 100;
				} else {
					obj.style[attr] = now + speed + "px";
				}
  			}
  		})(attr);
  	}
  	if (flag) {
  		clearInterval(obj.timer);
  		callback && callback(); //如果回调函数存在，就调用回调函数
  	}
  }, 30);
}

var box = document.getElementById('box');
var slider = document.getElementById('slider');
var left = document.getElementById('left');
var right = document.getElementById('right');
var oNavlist = document.getElementById('nav').children;
var index = 1; //打开页面生效的图片的下标为1
var timer;
var isMoving = false;
//图片停止滚动
box.onmouseover = function () {
	animate(left, {
		opacity: 60
	})
	animate(right, {
		opacity: 60
	})
	clearInterval(timer); 
}
//图片开始接着滚动
box.onmouseout = function () {
	animate(left, {
		opacity: 0
	})
	animate(right, {
		opacity: 0
	})
	timer = setInterval(next, 3000); 
}
right.onclick = next;
left.onclick = prev;

function next() {
	if (isMoving) {
		return;
	}
	isMoving = true;
	index++;
	navmove();
	animate(slider, {
		left: -809 * index
	}, function () {
		if (index == 7) {
			slider.style.left = '-809px';
			index = 1;
		}
		isMoving = false;
	});
}

function prev() {
	if (isMoving) {
		return;
	}
	isMoving = true;
	index--;
	navmove();
	animate(slider, {
		left: -809 * index
	}, function () {
		if (index == 0) {
			slider.style.left = '-4854px';
			index = 6;
		}
		isMoving = false;
	});
}
//按钮点击切换
for (var i = 0; i < oNavlist.length; i++) {
	oNavlist[i].index = i;
	oNavlist[i].onclick = function () {
		index = this.index + 1;
		navmove();
		animate(slider, {
			left: -809 * index
		});
	}

}
//按钮样式跟着图片切换而切换
function navmove() {
	for (var i = 0; i < oNavlist.length; i++) {
		oNavlist[i].className = "";
	}
	if (index > 6) {
		oNavlist[0].className = "active";
	} else if (index <= 0) {
		oNavlist[5].className = "active";
	} else {
		oNavlist[index - 1].className = "active";
	}
}
//自动滚动切换
timer = setInterval(next, 3000);

/*快讯*/
var ul = document.getElementsByClassName('main3')[0].getElementsByTagName('ul')[0];
function show() {
	var top = ul.offsetTop - 1; 
	ul.style.top = top + "px"; 

	if (-1 * parseInt(ul.style.top) >= ul.offsetHeight/2) {
	    ul.style.top = 0;
	}
}
var t = setInterval(show, 10);
var li = ul.getElementsByTagName("li");
for (var i = 0; i < li.length; i++) {
	li[i].onmouseout = function () {
	    t = setInterval(show, 10);
};

li[i].onmouseover = function () {
    clearInterval(t);
	};
}

/*右侧四个弹出框*/
var side = document.getElementsByClassName('side')[0].children;
side[0].onmouseover = function(){
	this.style.right = -5 + 'px';
	side[1].style.right = 0;
}
side[0].onmouseout = function(){
	this.style.right = -90 + 'px';
	side[1].style.right = -85 + 'px';
}
side[1].onmouseover = function(){
	this.style.right = 0;
	side[0].style.right = -5 + 'px';
}
side[1].onmouseout = function(){
	this.style.right = -85 + 'px';
	side[0].style.right = -90 + 'px';
}
side[2].onmouseover = function(){
	this.style.right = 0;
}
side[2].onmouseout = function(){
	this.style.right = -86 + 'px';
}
side[3].onmouseover = function(){
	this.style.right = 0;
	side[4].style.right = 0;
	side[4].getElementsByTagName('img')[0].src = "img/erwei.png";
}
side[3].onmouseout = function(){
	this.style.right = -86 + 'px';
	side[4].style.right = -86 + 'px';
}
side[4].onmouseover = function(){
	this.style.right = 0;
	side[3].style.right = 0;
	this.getElementsByTagName('img')[0].src = "img/erwei.png";
}
side[4].onmouseout = function(){
	this.style.right = -86 + 'px';
	side[3].style.right = -86 + 'px';
	this.getElementsByTagName('img')[0].src = "img/serwei.png";
}
side[5].onmouseover = function(){
	this.style.right = 0;
}
side[5].onmouseout = function(){
	this.style.right = -86 + 'px';
}