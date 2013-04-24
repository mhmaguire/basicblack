window.onload = function (){
	var theFooter = document.getElementById("mainFoot");
	if (theFooter !== null) {
        var space = window.innerHeight - theFooter.offsetTop;
	    theFooter.style.height = space + 20 + 'px';
    }
};

window.onresize = function (){
	var theFooter = document.getElementById("mainFoot");
	if(theFooter !== null) {
        var space = window.innerHeight - theFooter.offsetTop;
	    theFooter.style.height = space + 20 + 'px';
    }
};