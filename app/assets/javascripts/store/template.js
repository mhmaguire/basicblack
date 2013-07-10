window.onload = function (){
	var theFooter = document.getElementById("mainFoot");
	if (theFooter !== null) {
        var space = window.innerHeight - theFooter.offsetTop;
	    theFooter.style.height = space + 20 + 'px';
        console.log(space);
    }
  var buttonRepeat = setInterval(buttonAnimate, 3000);
  function buttonAnimate() {
	  $('#mainNav .button').animate({
	   		backgroundColor: '#D8171D',
	   	}, 800, function() {
	   		$('#mainNav .button').animate({
	   			backgroundColor: 'rgba(0,0,0,1)',
	   		}, 800);
	  });
	};
};

window.onresize = function (){
	var theFooter = document.getElementById("mainFoot");
	if(theFooter !== null) {
        var space = window.innerHeight - theFooter.offsetTop;
	    theFooter.style.height = space + 20 + 'px';
    }
};