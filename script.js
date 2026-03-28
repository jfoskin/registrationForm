// alert("helllloooo");

//Declare Variables

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const form = document.querySelector("form");
const submitBtn = document.querySelector("submit");
const errorMessage = document.querySelectorAll(".error-message");

//Declare Functions

// function handleError (){

// }

function checkMatch(e) {
	if (password.value !== confirmPassword.value) {
		confirmPassword.setCustomValidity("not a match");
	} else if (confirmPassword.value.patternMismatch) {
		confirmPassword.setCustomValidity("Pattern doesn't match");
	} else {
		confirmPassword.setCustomValidity("");
	}
	confirmPassword.reportValidity();
}

//Call Functions

username.addEventListener("input", function () {
	if (username.value === "") {
		username.setCustomValidity("ENTER A USERNAME");
	} else {
		username.setCustomValidity("");
	}

	username.reportValidity();
});
email.addEventListener("input", function (e) {
	if (email.value === "") {
		email.setCustomValidity("ENTER A USERNAME");
	} else {
		email.setCustomValidity("");
	}
	email.reportValidity();
});

password.addEventListener("input", function (e) {
	if (password.value.length < 8 || password.value === "") {
		password.setCustomValidity("password not long enough");
	} else if (password.value.patternMismatch) {
		password.setCustomValidity("Pattern doesn't match");
	} else {
		password.setCustomValidity("");
	}
	password.reportValidity();
});

confirmPassword.addEventListener("input", checkMatch);

form.addEventListener("submit", function (e) {
	e.preventDefault();
	localStorage.setItem("username", username.value);
	username.value = "";
	email.value = "";
	password.value = "";
	confirmPassword.value = "";
});

window.addEventListener("load", () => {
	const usernameFromLocalStor = localStorage.getItem("username");
	if (usernameFromLocalStor) {
		username.value = usernameFromLocalStor;
	}
});
