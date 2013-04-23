window.onload = function (){
	var theFooter = document.getElementById("mainFoot");
	var space = window.innerHeight - theFooter.offsetTop;
	theFooter.style.height = space + 20 + 'px';
	console.log('hello there');
};

window.onresize = function (){
	var theFooter = document.getElementById("mainFoot");
	var space = window.innerHeight - theFooter.offsetTop;
	theFooter.style.height = space + 20 + 'px';
};