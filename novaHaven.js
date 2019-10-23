//Get all search options
document.getElementById("search_button1").onclick = SearchOne;
document.getElementById("search_button2").onclick = SearchTwo;
document.getElementById("search_button3").onclick = SearchThree;
document.getElementById("search_button4").onclick = SearchFour;
document.getElementById("search_button5").onclick = SearchFive;
document.getElementById("search_button6").onclick = Documentation;
document.getElementById("logo").onclick = refresh;
//Refresh
function refresh(){
	window.location.reload();
}
//IFrame
function SearchOne() {
	var entryVal = document.getElementById("entryInput");
	var entryId = entryVal.value.toLowerCase();
	var check = entryId.substring(0, 4);
	if(check != "http" && check != ""){
		bar("Enter the entire URL!");
		return;
	}
	if(entryId == ""){
		bar("IFrame is not 100% accurate.");
		return;
	}
	else{
		document.body.innerHTML = '<div id=\"holderNova\"><iframe ' + ' src=\"' + entryId + '\"' + '>' + '</iframe></div>';
		document.body.innerHTML += '<img id=\"menu\" onclick=\"refresh()\" alt=\"Crescent\" src=\"assets/images/novaHavenFavi.png\">';
	}
}
//Object
function SearchTwo() {
	var entryVal = document.getElementById("entryInput");
	var entryId = entryVal.value.toLowerCase();
	var check = entryId.substring(0, 4);
	if(check != "http" && check != ""){
		bar("Enter the entire URL!");
		return;
	}
	if(entryId == ""){
		bar("Questionable results.");
		return;
	}
	else{
		document.body.innerHTML = '<div id=\"holderNova\"><object ' + ' data=\"' + entryId + '\"' + '>' + "<" + 'embed src=\"' + entryId + '\"' + "></embed>" + '</object></div>';
		document.body.innerHTML += '<img id=\"menu\" onclick=\"refresh()\" alt=\"Crescent\" src=\"assets/images/novaHavenFavi.png\">';
	}
}
//BlockUp
function SearchThree() {
	var entryVal = document.getElementById("entryInput");
	var entryId = entryVal.value.toLowerCase();	
	var check = entryId.substring(0, 4);
	if(check != "http" && check != ""){
		bar("Enter the entire URL!");
		return;
	}
	if(entryId == ""){
		bar("Blocks all pop-ups but allows downloads.");
		return;
	}
	else{
		document.body.innerHTML = '<div id=\"holderNova\"><iframe sandbox=\"allow-top-navigation allow-scripts allow-same-origin allow-pointer-lock allow-forms\" allow=\"encrypted-media\" ' + ' src=\"' + entryId + '\"' + '>' + '</iframe></div>';
		document.body.innerHTML += '<img id=\"menu\" onclick=\"refresh()\" alt=\"Crescent\" src=\"assets/images/novaHavenFavi.png\">';
	}
}
//Proxy
function SearchFour() {
	var entryVal = document.getElementById("entryInput");
	var entryId = entryVal.value.toLowerCase();
	var check = entryId.substring(0, 4);
	if(check != "http" && check != ""){
		bar("Enter the entire URL!");
		return;
	}
	if(entryId == ""){
		bar("Cannot be blocked. PROXY!");
		return;
	}
	else{
		document.body.innerHTML = '<div id=\"holderNova\"><iframe  sandbox=\"allow-top-navigation allow-scripts allow-same-origin allow-pointer-lock allow-forms\" allow=\"encrypted-media\"' + 'src=\"https://secure.adcharity.repl.co/' + entryId + '\">' + '</iframe></div>';
		document.body.innerHTML += '<img id=\"menu\" onclick=\"refresh()\" alt=\"Crescent\" src=\"assets/images/novaHavenFavi.png\">';
	}
}
//getPDF
function SearchFive() {
	var entryVal = document.getElementById("entryInput");
	var entryId = entryVal.value.toLowerCase();
	var check = entryId.substring(0, 4);
	if(check != "http" && check != ""){
		bar("Enter the entire URL!");
		return;
	}
	if(entryId == ""){
		bar("Will take a long time. Use in edge cases.");
		return;
	}
	else{
		bar("This will take a while!")
		GrabzIt("OTRmN2NjMDE5MTZmNDllMjk4NTQ5ZTRiMTk5YTA4ZWY=").ConvertURL(entryId, 
		{"format": "pdf", "download": 1}).Create();
	}
}
//Documentation
function Documentation(){
	bar("Redirecting towards documentation!");
	window.location.replace("docs.html");
	
}
//Creating a snackBar
function bar(c){
	document.getElementById("snackbarContent").innerHTML = c;
	var target = document.getElementById("snackbar");
	target.className = "show";
	setTimeout(function(){ target.className = target.className.replace("show", ""); }, 2500);
}