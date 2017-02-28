// JavaScript Document
//导航栏的弹性运动
var oU3 = document.getElementById('ul3');
var aA = oU3.getElementsByTagName('a');
var oBg = document.getElementById('bg_red');
var oIcon = getByClass(document,'icon')
var aIcon1 = getByClass(document,'icon_1')
var iNow = 0;
	for(var i=0;i<aA.length;i++)
	{
	   aA[i].index = i;
	   aA[i].onmouseover = function()
	   {
	       startMove(oBg,this.offsetLeft);
	   
	   }
	   aA[i].onclick = function()
	   {  
	      if(this.index == iNow) return;
	      for(var i=0;i<aIcon1.length;i++)
		  {
		     aIcon1[i].style.opacity = 0 ;  
			 aIcon1[i].style.left = 1000 +'px' ;  
		  }
	      StarMove(aIcon1[this.index],{ left:200,opacity:100})
		  iNow = this.index;
	   }
	
	}
	
var iSpeed = 0;
var left = 0;
function startMove(obj,iTarget)
{
   clearInterval(obj.timer);
   obj.timer=setInterval(function(){
      iSpeed += (iTarget-obj.offsetLeft)/5;
	  iSpeed *= 0.7;
	  
	  left += iSpeed;
	  
	  if(Math.abs(iSpeed)<1 && Math.abs(left-iSpeed)<1)
	  {
	       clearInterval(obj.timer);
		   obj.style.left = obj.offsetLeft + 'px'
	  }
      else
	  {
	      obj.style.left = left+'px'; //left也是有小数的,被obj.style.left取整
	  }
	  // obj.style.left = obj.offsetLeft + iSpeed +'px';  
	  //obj.style.left赋给它的值每次只能是整数，但是速度iSpeed每次都有小数，会被省略小数，每次累计误差产生误差，用一个变量left（ left += iSpeed;） 
	  //用一个变量left（ left += iSpeed;）先把所有的值加起来最后一次再赋给 obj.style.left  中间还是会有误差，看不出，最后一次把误差降到最小
   },30)

}