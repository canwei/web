// JavaScript Document
//雪花效果函数
var minSize = 5;  //雪花最下为5
var maxSize = 50;  //雪花最下为50
var newOn =200;  //产生一朵雪花的时间雪花
var flakeColor = "#fff";  //雪花的颜色
var $flake = $("<div></div>").css("position","absolute").html("&#10054");//创建一个div对象，并css赋值为绝对定位才可以移动，
$(function(){
     var documentWidth = 800;  //获取屏幕的可视宽度
	 var documentHeight = 400;//获取屏幕的可视高度
	 setInterval(function(){
	      var startPositionLeft = Math.random()*documentWidth; //设置初始雪花离屏幕左边的随机距离
		  var startOpacity = 0.7 + Math.random(); //雪花初始的透明度
		  var endPositionLeft = Math.random()*documentWidth;//设置到屏幕底部时雪花离屏幕左边的随机距离
		  var durationFall = documentHeight*10 + Math.random()*3000;//产生一个雪花 下落的随机时间
		  var sizeFlake = minSize + Math.random()*maxSize;//产生随机大小的雪花
		  var endOpacity = 0.5 + Math.random(); //雪花初始的透明度
		  
	      $flake.clone().appendTo(".show").eq(0).css({
		       "left":startPositionLeft,
			   "opacity":startOpacity,
			   "font-size":sizeFlake,
			   "color":flakeColor,
			   "top":"0px"
		  }).animate({   //animate是让上面的值变化到下面值，用时durationFall
		       "top":documentHeight,
			   "left":endPositionLeft,
			   "opacity":endOpacity
		  },durationFall,function(){   //回调函数是去除到达底部的雪花
		       $(this).remove();
		  });
	 },newOn)

});
