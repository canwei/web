// JavaScript Document
//»»·ô¿éµÄº¯Êý
      var i=1;
	  $(".a1").click(function(){
		  $(".head").animate({height:"288px"},500);
		  });
	  $(".p2").click(function(){
		  $(".head").animate({height:"0px"},500);
		  });
	  $(".bgcon img").hover(function(){
		  i=$(this).index();
		  $(".by1").css("background-image",'url(image/bg'+i+'.jpg)');
		  $(".by1").css("background-size","264px 180px");
		  });

	 var bg = localStorage.getItem("i")
	 if(bg == null)
	 {
		  $("body").css("background",'url(image/bg'+0+'.jpg)');
	 }
	 else
	 {
		  $("body").css("background",'url(image/bg'+bg+'.jpg)');
	 }
	  $(".bgcon img").click(function(){
		  i=$(this).index();
		  localStorage.setItem("i",i)
		  $("body").css("background",'url(image/bg'+i+'.jpg)');
		  });