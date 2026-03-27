// alert("helllloooo");

//Declare Variables

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const form = document.querySelector("form");

//Declare Functions

// function handleError (){

// }

//Call Functions

// form.addEventListener("submit", function (e) {
// 	e.preventDefault();
// 	localStorage.setItem;
// });

username.addEventListener("blur", function (e) {
	if (username.value === "") {
		username.setCustomValidity("ENTER A USERNAME");
	} else {
		username.setCustomValidity("");
	}
	username.reportValidity();
});
email.addEventListener("blur", function (e) {
	if (email.value === "") {
		email.setCustomValidity("ENTER A USERNAME");
	} else {
		email.setCustomValidity("");
	}
	email.reportValidity();
});
