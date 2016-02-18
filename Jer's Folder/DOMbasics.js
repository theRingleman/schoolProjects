// SELECT and MANIPULATE 

// var body = document.querySelectorAll("body");
// var isBlue = false;

// setInterval(function (){
// 	if (isBlue) {
// 		body.style.color = "white";
// 	} else {
// 		body.style.background = "#3498db";
// 	}
// 	isBlue = !isBlue;
// }, 1000);

var h1 = document.querySelector("h1");

h1.addEventListener("click", function(){
	alert("Hey don't hit me!");
});

h1.style.color = "#2e4663";


var li = document.querySelectorAll("li");

for (i = 0; i < li.length; i++){
	li[i].addEventListener("click", function(){
		this.style.color = "#ff0000";
	});
}

