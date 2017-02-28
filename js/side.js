// JavaScript Document
//左边侧边栏事件
var oUl=document.getElementById('ul1');
var aLi=getByClass(oUl,'img');
var aShow = getByClass(document,'show');
var aP1 = getByClass(document,'p1');
var aClose = getByClass(aShow,'close');
var aUdio = document.getElementById('music1');
var iMinZindex = 2;

aLi[2].onclick = setfocus();

for( var i=0;i<aLi.length;i++ )
{
	aLi[i].style.left = aLi[i].offsetLeft + 'px';
	aLi[i].style.top = aLi[i].offsetTop + 'px';
}
for( var i=0;i<aLi.length;i++ )
{
	aLi[i].style.position = 'absolute';
	aLi[i].style.marginLeft =0;
	aLi[i].style.marginTop =0;
	
}
for( var i=0;i<aLi.length;i++ )
{
    aLi[i].index = i;
	aLi[i].onmouseover = function(){
		
		this.style.zIndex = iMinZindex++;
		StarMove(this,{ width:55, height:55, marginLeft:-10,marginTop:-10});
	 
	}
	aLi[i].onmouseout = function(){
	
		StarMove(this,{ width:35, height:35, marginLeft:0,marginTop:0});
	 
	}
	aLi[i].onclick = function(){
	    
		for(var i=0;i<aShow.length;i++)
		{
		     aShow[i].style.display = 'none';
		
		}
		$('.show').eq(this.index).fadeIn(1000); 
	    //aShow[this.index].style.display = 'block';
	}

}
	for( var i=0;i<aClose.length;i++ )
	{
		 aClose[i].onclick = function(){
		
			this.parentNode.style.display = 'none';
			if(aUdio.paused){//获得播放状态,这个属性应该是是否是暂停状态,如果是就播放,如果不是暂停就暂停
				aUdio.pause();
			}else{
				aUdio.pause();
			}
		}
	}
