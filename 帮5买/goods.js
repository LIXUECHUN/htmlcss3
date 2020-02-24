/*选择商品缩略图划入大图随之变化*/
var bottom = document.getElementsByClassName('bottom1')[0].getElementsByTagName('img');
var img = document.getElementsByClassName('left1')[0].getElementsByTagName('img')[0];
var img1 = document.getElementsByClassName('left12')[0].getElementsByTagName('img')[0];
var large = document.getElementsByClassName('large')[0];
var left12 = document.getElementsByClassName('left12')[0];
var left1 = document.getElementsByClassName('left1')[0];
var box = document.getElementsByClassName('box')[0];

bottom[1].onmouseover = function(){
	bottom[1].setAttribute('class', 'img301');
	bottom[2].setAttribute('class', 'img3');
	img.src = "img/pp0.jpeg";
}
bottom[2].onmouseover = function(){
	bottom[1].setAttribute('class', 'img3');
	bottom[2].setAttribute('class', 'img301');
	img.src = "img/pp1.jpeg";
}


/*划入大图，右侧显示放大镜*/
left1.onmouseover = function(){
	left12.style.display = "block";
	large.style.display = "block";
	img1.src = img.src;
	
}
left1.onmouseout = function(){
	left12.style.display = "none";
	large.style.display = "none";
}
left1.onmousemove = function (ev) {
	var ev = ev || window.event;
	var Top=document.documentElement.scrollTop || document.body.scrollTop;
	var oL = ev.clientX - box.offsetLeft - large.offsetWidth/2 -25;
	var oT = ev.clientY - box.offsetTop - large.offsetHeight/2 -25 + Top;

	var oMaxw = left1.offsetWidth - large.offsetWidth;
	var oMaxh = left1.offsetHeight - large.offsetHeight;

	oL = oL > oMaxw ? oMaxw : oL < 0 ? 0 : oL;
	oT = oT > oMaxh ? oMaxh : oT < 0 ? 0 : oT;

	large.style.left = oL + 'px';
	large.style.top = oT + 'px';
	
	img1.style.left = - 2*oL +80 +'px' ;
	img1.style.top = - 2*oT + 'px';
	large.style.cursor = "pointer";
}

/*商品规格点击时边框及背景的显示*/
var biankuang = document.getElementsByClassName('select')[0].getElementsByTagName('div');
var xuanze2 = document.getElementsByClassName('xuanze2')[0];
biankuang[0].onclick = function(){
	biankuang[0].setAttribute('class', 'teshu daa');
	biankuang[1].setAttribute('class', 'daa');
	xuanze2.innerHTML = '"' + biankuang[0].innerHTML + '"';
}
biankuang[1].onclick = function(){
	biankuang[1].setAttribute('class', 'teshu daa');
	biankuang[0].setAttribute('class', 'daa');
	xuanze2.innerHTML = '"' + biankuang[1].innerHTML + '"';
}
biankuang[0].onmouseover = function(){
	biankuang[0].style.cursor = "pointer";
}
biankuang[1].onmouseover = function(){
	biankuang[1].style.cursor = "pointer";
}


/*商品数量加减号*/
var shuliang = document.getElementsByClassName('shuliang')[0].getElementsByTagName('button');
var btnn = document.getElementsByClassName('btn2')[0];

shuliang[0].onclick = function(){
	if(btnn.value == 1){
		shuliang[0].style.cursor = "not-allowed";
		btnn.value = btnn.value;
	}else{
		shuliang[0].style.cursor = "pointer";
		btnn.value--;
	}
}
shuliang[1].onclick = function(){
	if(btnn.value == 5){
		shuliang[1].style.cursor = "not-allowed";
		btnn.value = btnn.value;
	}else{
		shuliang[1].style.cursor = "pointer";
		btnn.value++;
	}
}
shuliang[1].onmouseover = function(){
	if(btnn.value == 5){
		shuliang[1].style.cursor = "not-allowed";
	}else{
		shuliang[1].style.cursor = "pointer";
	}
}
shuliang[0].onmouseover = function(){
	if(btnn.value == 1){
		shuliang[0].style.cursor = "not-allowed";
	}else{
		shuliang[0].style.cursor = "pointer";
	}
}


/*蒙罩效果*/
var purchase = document.getElementsByClassName('purchase');
var jiagou = document.getElementsByClassName('jiagou')[0];
var mengzhao = document.getElementsByClassName('mengzhao')[0];
purchase[1].getElementsByClassName('bt2')[0].onclick = function(){
	jiagou.style.display = "block";
	mengzhao.style.display = "block";
}
purchase[0].getElementsByClassName('bt1')[0].onclick = function(){
	jiagou.style.display = "none";
	mengzhao.style.display = "none";
}
purchase[0].getElementsByClassName('bt2')[0].onclick = function(){
	jiagou.style.display = "none";
	mengzhao.style.display = "none";
}
document.getElementById('eee').onclick = function(){
	jiagou.style.display = "none";
	mengzhao.style.display = "none";
}