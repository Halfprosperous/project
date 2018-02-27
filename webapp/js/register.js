$(function(){
	$(".top").click(function(){
		window.location.href="../html/myself.html"
	})
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
	


//		//短信验证
//$(".massage").blur(function(){
//	var massage=$(".massage").val();
//	var verify=$(".verify").text();
//	if(massage==verify){
//		arr[1]=true;
//		}
//	else{
//		$(".massage").val("")
//	}
//});


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
	var check=$(".check").checked;
	var u=$(".phone").val();
	var p=$(".password").val();
	if(arr[0]==true&&arr[1]==true&&arr[2]==true&&check==true){
	window.location.href="../html/login.html";
	$.cookie(u,p,{expires:20});
	
	}
	else{
	$(".phone").val("");
	$(".password").val("");
	}
})
	
	
	
})



