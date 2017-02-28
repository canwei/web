// JavaScript Document

function getStyle(obj,attr)
{
      if(obj.currentStyle)
	  {
	       return obj.currentStyle[attr];
	  } 
      else
	  {
	       return getComputedStyle(obj,false)[attr];
	  }

} 

function StarMove(obj,json,fn){
	clearInterval(obj.timer);
	
	obj.timer = setInterval(function(){
		var bStop=true;	//�����˶��Ѿ���ֹͣ��
		
	    for(var attr in json)
		{
			var iCur =0;
			if(attr == 'opacity')
			{
				 iCur = parseInt(parseFloat(getStyle(obj,attr))*100); //����С�����⣬һֱ������С��
			}
			else
			{
				 iCur = parseInt(getStyle(obj,attr));
			}
			
			var speed = (json[attr]-iCur)/8;
			speed = speed >0 ? Math.ceil(speed) : Math.floor(speed); //�ٶȴ���0ʱ������ȡ����С��0����ȡ��
			
			 if(iCur!=json[attr])
			 { 
				 bStop=false; 
			 }
			 if(attr == 'opacity' )
			 {
				  obj.style.filter = 'alpha(opacity:'+(iCur + speed)+')';
				  obj.style.opacity = (iCur + speed)/100;
			 }
			 else
			 {
				  // obj.style.width = obj.offsetWidth + speed + 'px';
				  obj.style[attr] = iCur + speed + 'px';
			 }
			
			
		}
		
		if(bStop)
		{
			clearInterval(obj.timer);
			if(fn)
			{
				fn(); 
			}
		}
	  },30);
	  
}
