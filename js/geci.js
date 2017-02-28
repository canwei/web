// JavaScript Document
//¸è´Ê
var oTxt = document.getElementById('text1');
var oCon = document.getElementById('music_con');	
var iSpeed = 10;
var timer = null;

timer = setInterval(function(){
   
    oCon.style.top =  oCon.offsetTop - 10 + 'px';
	if(oCon.offsetTop == -790)
	{
	    clearInterval(timer);
	}
 

},1000)

//