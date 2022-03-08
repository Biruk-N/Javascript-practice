// var button = document.getElementsByTagName("button")[0];

// button.addEventListener ("click", function() {
// 			console.log("click!!!!!!");
// })

// button.addEventListener ("mouseleave", function() {
// 			console.log("click!!!!!!");
// })

var button = document.getElementById("Enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
// var button = document.getElementsById("Enter")
function inputLength(){
	return input.value.length;
}

function createlistElement(){
	var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
}

function addListAfterClick(){
	if (inputLength() > 0){
		createlistElement();
	}

}

function addListAfterKeypress(event){
// console.log(input.value)

	if (inputLength() > 0 && event.keyCode === 13){
		
	createlistElement();

	}

}

// repeated code to avoid refactore

button.addEventListener("click", addListAfterClick);
// every time clicked go to function addListAfterClick
input.addEventListener("keypress", addListAfterKeypress); 
