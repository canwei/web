// JavaScript Document
//�������ĵ����˶�
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
	      obj.style.left = left+'px'; //leftҲ����С����,��obj.style.leftȡ��
	  }
	  // obj.style.left = obj.offsetLeft + iSpeed +'px';  
	  //obj.style.left��������ֵÿ��ֻ���������������ٶ�iSpeedÿ�ζ���С�����ᱻʡ��С����ÿ���ۼ�����������һ������left�� left += iSpeed;�� 
	  //��һ������left�� left += iSpeed;���Ȱ����е�ֵ���������һ���ٸ��� obj.style.left  �м仹�ǻ����������������һ�ΰ�������С
   },30)

}