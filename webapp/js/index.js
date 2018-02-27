$(function(){
	var index=0;//定义下标变量
	var timer;
	var imglength=$(".more-img li").length;
	//console.log(imglength);
	$(".circle span").click(function(){
		index=$(this).index();
		a()
	});
	
	
	//封装换图片的方法
	function a(){
		//检测右边界
		if(index>=imglength){
			index=0
		}
		//检测左边界 
		if(index<-1){
			index=imglength-1
		}
		//换图
		$(".more-img li").eq(index).stop().animate({
			opacity:1
		},1000).siblings().stop().animate({
			opacity:0
		},1000)
		//切换小圆点的
		$(".circle span").eq(index).addClass("current").siblings()
		.removeClass("current");
		
	};
	//自动播放
	autoplay();
	function autoplay(){
	timer=setInterval(function(){
		index++;
		a()
	},3000)
	};
	
	$(".box").hover(function(){
		clearInterval(timer)
	},function(){
		autoplay();
	});
	
	$(".index").click(function(){
		window.location.href="index.html";
	});
	$(".classify1").click(function(){
		window.location.href="html/classify1.html";
	});
	$(".img3").click(function(){
		window.location.href="html/register.html";
	});
	$(".food").click(function(){
		window.location.href="html/food.html";
	});
	$(".myself").click(function(){
		window.location.href="html/myself.html";
	});
});