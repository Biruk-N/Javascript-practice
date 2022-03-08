var todos =[
	"clean room",
	"exercie",
	"study"

];
var todosimport =[
	"clean room!",
	"exercie!",
	"study!"

];
// var todoslength = todos.length;
// for (var i = 0; i < todoslength; i++){
// 	console.log(i);
// 	// todos.pop();
// }
function logtodos(todo, i){
	console.log(todo, i);
}
todos.forEach(logtodos);
todosimport.forEach(logtodos);
//improve for
// loop access the array action is function


// var counterOne = 0;
// while (counterOne < 10){
// 	console.log(counterOne);
// 	counterOne++
// }
// var counterTwo = 10;
// do {
// 	console.log(counterTwo);
// 	counterTwo--;
// } while (counterTwo > 0);