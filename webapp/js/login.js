$(function(){
	var arr=[false,false,false];	
//电话验证	
	$(".phone").blur(function(){
	var u=$(".phone").val();
	var g=/^[1][3-8]\d{9}$/g;
	var result=g.test(u);
	if(result==true){
		arr[0]=true;
		}
	else{
		result="";
	}
});
	
	
		//邮箱验证
$(".user").blur(function(){
	var u=$(".user").val();
	var gg=/^\w{4,20}@[a-z]{2,4}.(com|cn)$/g;
	var result1=gg.test(u);
	if(result1==true){
		arr[1]=true;
		}
	else{
		result1="";
	}
});
	//密码验证
$(".password").blur(function(){
	var p=$(".password").val();
	var g1=/^\d{6,12}$/g;
	var result2=g1.test(p);
	if(result2==true){
		arr[2]=true;
		}
	else{
		result2="";
	}
//	console.log(2)
});
$(".btnbox").click(function(){
	var u=$(".phone").val();
	var p=$(".password").val();
	if(arr[0]==true||arr[1]==true&&arr[2]==true){
	window.location.href="../html/index.html";
	$.cookie(u,p,{expires:20});
	$(".phone").val("");
	$(".password").val("");
	}
})
	
	
	
})