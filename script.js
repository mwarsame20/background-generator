var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var generate = document.querySelector(".random");


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

setGradient();


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function generateRandomColor() {
	var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

function setBackground() {
	var newColor1 = generateRandomColor();
	var newColor2 = generateRandomColor();
	var randomGradient = "linear-gradient(to right, " + newColor1 + ", " + newColor2 + ")";
	body.style.background = randomGradient;
	css.textContent = body.style.background + ";";
	color1.value = newColor1;
	color2.value = newColor2;
}

generate.addEventListener("click", setBackground);