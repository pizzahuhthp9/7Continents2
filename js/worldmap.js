var x = document.getElementById("welcome-page-inside-box");
var y = document.getElementById("back-btn");
var z = document.getElementById("seccond-content");
var welcomePageContainer = document.getElementById("welcome-page-container");

function hidebox(){
	x.style.display = "none";
	y.style.display = "block";
	z.style.display = "block";
	x.style.opacity = "0";
	y.style.opacity = "1";
	z.style.opacity = "1";
	document.body.style.backgroundColor= "#a1d1e2";
	welcomePageContainer.style.backgroundImage = "url(image/All-Recovered-No-Star.png)";
}

function showbox(){
	x.style.display = "block";
	y.style.display = "none";
	z.style.display = "none";
	x.style.opacity = "1";
	y.style.opacity = "0";
	z.style.opacity = "0";
	document.body.style.backgroundColor= "#2a443f";
	welcomePageContainer.style.backgroundImage = "url(image/All-Recovered.png)";
}