function bigger() {
	alert("Text will get bigger!");
	document.getElementById("textarea").style.fontSize="24pt";
}

function changeStyle() {
	alert("Text will get styling");

	if (document.getElementById("fancyShmancy").checked) {
		document.getElementById("textarea").style.fontWeight="bold";
		document.getElementById("textarea").style.color="blue";
		document.getElementById("textarea").style.textDecoration="underline";
	}
	else if (document.getElementById("boringBetty").checked) {
		document.getElementById("textarea").style.fontWeight="normal";
	}
}

function moo() {
	document.getElementById("textarea").style.textTransform="uppercase";
	
	var parts = document.getElementById("textarea").value.split(".");
	var str = parts.join("-Moo");

	document.getElementById("textarea").value = str;
}
