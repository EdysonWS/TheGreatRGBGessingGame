var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickcolor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.getElementsByTagName("h1");

colorDisplay.textContent = pickedColor;

for(var i= 0; i < squares.length ; i++){
	//add initial color to square
	squares[i].style.backgroundColor = colors[i];

	//add click listener to saquares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "ARRASOU!1!";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Tente Novamente";
		}
	});
}
function changeColors(color){
	//loop throw squares
	for(var i=0; color.length ; i++){
		// change collor
		squares[i].style.backgroundColor = color;
	}
}

function pickcolor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//add color to array
	for(var i=0; i < num; i++){
		arr.push(randomColor())
	}
	return arr;
}

function randomColor(){
	//gerando vermelho
	var r = Math.floor(Math.random() * 256);
	//gerando verde
	var g = Math.floor(Math.random() * 256);
	//gerando azul
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r +", " + g + ", " + b + ")";
}