function bigger() {
	alert("Text will get bigger!");
	document.getElementById("textarea").style.fontSize = "24pt";
}

function changeStyle(elem) {
	alert("Text will change styling.");

	if (elem.value == 'fancyShmancy') {
		document.getElementById("textarea").style.fontWeight = "bold";
		document.getElementById("textarea").style.color = "blue";
		document.getElementById("textarea").style.textDecoration = "underline";
	}
	else if (elem.value == 'boringBetty') {
		document.getElementById("textarea").style.fontWeight="normal";
		document.getElementById("textarea").style.color = "black";
		document.getElementById("textarea").style.textDecoration = "none";
	}
}

function moo(){
    	document.getElementById("textarea").style.textTransform="uppercase";
	
	var parts = document.getElementById("textarea").value.split(".");
	var str = parts.join("-Moo");

	document.getElementById("textarea").value = str;
}
