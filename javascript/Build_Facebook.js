var database = [
	{
		username: "Biruk",
		password: "super"
	},
	{
		username: "Sally",
		password: "123"
	},
	{
		username: "Ingrid",
		password: "su"
	}
];
var newsfeed = [
	{
		username: "Boobby",
		timeline: "so tired from all that"

	},	
	{
		username:"Sally",
		timeline:"Javascript is so cool!"
	}

];
// to use sign in
var usernameprompt = prompt("what is username name?");
var passwordprompt = prompt("what is username password?");
// for validation first
function isUservalid(user, pass){
	for (var i = 0; i < database.length; i++) {
		if (database[i].username === user &&
		 database[i].password === passs) {
			return true;


		}
			return false;
		
}
// after validation
function signin(user, pass) {
	console.log(isUservalid(user, pass));
	}
	if (isUservalid(user, pass)) {
	alert("you'r in");
		console.log(newsfeed);
	} else {
		alert("try again");
	}
}
signin(usernameprompt, passwordprompt);
//if not pass argument not work
