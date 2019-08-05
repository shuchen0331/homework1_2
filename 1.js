var flag=0;
function deletePlaceHolderText(){
		var x=document.getElementById("baidu");
	//	if(x.value=="在Coogle中搜索, 或输入网址"){
		x.onautocomplete="off";
		x.value="";
		x.style.color="black";
		
		
}
function showPlaceHolderText(){
var x=document.getElementById("baidu");
if(x.value==""){
	x.value="在Coogle中搜索, 或输入网址";
	x.style.color="#80868B";	
}
}
//判断点击的地方是否在搜索框外面
function showClickOtherPlace(numa){
	if(numa==1){
	var x=document.getElementById("baidu");
	window.onload = function() {
	 //  a=function() {
		document.onclick = function(e) {
			var ele = e ? e.target : window.event.srcElement;
			if(ele.id !=='baidu') {
				showPlaceHolderText();
			}
			if(ele.id!=="firstdiv"){
				var y=document.getElementById("ymbjdiv");
				
						y.style.display="none";
			}
		};
	};
	}
	
}
function speakOn(){
	var x=document.getElementById("speakImg");
	x.style.display="block";
	
}
function speakLeave(){
	var x=document.getElementById("speakImg");
	x.style.display="none";
}
function speakerOn(){
	//if(x.id=="speakButton")
	
	document.getElementById("speakHref").click();
}
//出现自定义此页的提示语句
function showZDY(){
	
	var x=document.getElementById("zidingyi");
	x.style.display="block";
	var y=document.getElementById("firstdiv");
	y.style.opacity=0.2;
}
function delZDY(){
	var x=document.getElementById("zidingyi");
	y=document.getElementById("firstdiv");
	y.style.opacity=1;
	x.style.display="none";
	
}
//对自定义框进行设置
//当鼠标落在上面时变灰色
function changeColor(numa){
	var x=document.getElementById("div2");
	var x1=document.getElementById("ChromeBack");
	var y=document.getElementById("div3");
	var y1=document.getElementById("upPic");
	if(numa==1)
		{
	x.style.backgroundColor="greenyellow";
	x1.style.filter="grayscale(80%)";
	}
		else{
	y.style.backgroundColor="greenyellow";
	y1.style.filter="grayscale(80%)";
}
}
//离开时变成白色
function changeWhite(numa){
	var x=document.getElementById("div2");
	var x1=document.getElementById("ChromeBack");

	var y=document.getElementById("div3");
	var y1=document.getElementById("upPic");
if(numa==1){
	x.style.backgroundColor="#FFFFFF";
	x1.style.filter="grayscale(0%)";
}
else {
	y.style.backgroundColor="#FFFFFF";
	y1.style.filter="grayscale(0%)";
}
}
//使自定义页出现消失
function showZDYYM(numa){
	if(numa==1){
		var x=document.getElementById("ymbjdiv");
//		alert(11);
		x.style.display="block";	
	}
}
//判断点击的地方是否在自定义框外面
function showClickOtherZDYPlace(){
	//var x=document.getElementById("firstdiv");
	//window.onload = function() {
	 
		//document.onclick = function(e) {
			//var ele = e ? e.target : window.event.srcElement;
			i//f(ele.id !=='firstdiv') {
				
				//var x=document.getElementById("ymbjdiv");
				
					//	x.style.display="none";
			
		//	}
		//};
	//};
}
