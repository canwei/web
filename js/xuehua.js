// JavaScript Document
//ѩ��Ч������
var minSize = 5;  //ѩ������Ϊ5
var maxSize = 50;  //ѩ������Ϊ50
var newOn =200;  //����һ��ѩ����ʱ��ѩ��
var flakeColor = "#fff";  //ѩ������ɫ
var $flake = $("<div></div>").css("position","absolute").html("&#10054");//����һ��div���󣬲�css��ֵΪ���Զ�λ�ſ����ƶ���
$(function(){
     var documentWidth = 800;  //��ȡ��Ļ�Ŀ��ӿ��
	 var documentHeight = 400;//��ȡ��Ļ�Ŀ��Ӹ߶�
	 setInterval(function(){
	      var startPositionLeft = Math.random()*documentWidth; //���ó�ʼѩ������Ļ��ߵ��������
		  var startOpacity = 0.7 + Math.random(); //ѩ����ʼ��͸����
		  var endPositionLeft = Math.random()*documentWidth;//���õ���Ļ�ײ�ʱѩ������Ļ��ߵ��������
		  var durationFall = documentHeight*10 + Math.random()*3000;//����һ��ѩ�� ��������ʱ��
		  var sizeFlake = minSize + Math.random()*maxSize;//���������С��ѩ��
		  var endOpacity = 0.5 + Math.random(); //ѩ����ʼ��͸����
		  
	      $flake.clone().appendTo(".show").eq(0).css({
		       "left":startPositionLeft,
			   "opacity":startOpacity,
			   "font-size":sizeFlake,
			   "color":flakeColor,
			   "top":"0px"
		  }).animate({   //animate���������ֵ�仯������ֵ����ʱdurationFall
		       "top":documentHeight,
			   "left":endPositionLeft,
			   "opacity":endOpacity
		  },durationFall,function(){   //�ص�������ȥ������ײ���ѩ��
		       $(this).remove();
		  });
	 },newOn)

});
