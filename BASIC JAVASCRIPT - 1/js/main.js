

function mod_selection (val) {
	/*var textArea = document.getElementById('my_text');*/

	if(val=='b'){
		if(document.getElementById('my_text').style.fontWeight == "normal")
		{document.getElementById('my_text').style.fontWeight = "bold";}
		else
			{document.getElementById('my_text').style.fontWeight = "normal"}
	}
	if(val=='i'){
		if(document.getElementById('my_text').style.fontStyle == "normal")
		{document.getElementById('my_text').style.fontStyle = "italic";}
		else
			{document.getElementById('my_text').style.fontStyle = "normal"}
	}
	if(val=='u'){
		if(document.getElementById('my_text').style.textDecoration == "none")
		{document.getElementById('my_text').style.textDecoration = "underline";}
		else
			{document.getElementById('my_text').style.textDecoration = "none"}
	}


}
	
	/*if(val=='i'){
	if (val=='i'){document.getElementById('my_text').style.fontStyle ='italic'}
		else {document.getElementById('my_text').style.textDecoration = "underline overline"}}*/

function changeFont(){
	var e = document.getElementById("ftype").value;
    document.getElementById('my_text').style.fontFamily=e;
     
}
function changeSize(){
	var e = document.getElementById("fsize").value;
    document.getElementById('my_text').style.fontSize=e;
}
function changeColor(){
	var e = document.getElementById("fcolor").value;
    document.getElementById('my_text').style.color=e;
}