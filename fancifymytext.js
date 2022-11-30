function bigger() {
	document.getElementById("textarea").style.fontSize="24pt";
}

function bold() {
	alert("Text will set to underlined bold blue.");
	document.getElementById("textarea").style.fontWeight="bold";
	document.getElementById("textarea").style.color="blue";
	document.getElementById("textarea").style.textDecoration="underline";
}

function normal() {
	alert("Text will set to normal.");
	document.getElementById("textarea").style.fontWeight="normal";
	document.getElementById("textarea").style.color="black";
	document.getElementById("textarea").style.textDecoration="none";
}

function moo(){
    	document.getElementById("textarea").style.textTransform="uppercase";
	
	var parts = document.getElementById("textarea").value.split(".");
	var str = parts.join("-Moo");

	document.getElementById("textarea").value = str;
}
