function sendEmail() {
	Email.send({
		Host: "smtp.elasticemail.com",
		Username: "hitenvk22@gmail.com",
		Password: "242E5C1D4A452D5485D203B815F652BC3BF5",
		To: 'hitenvk22@gmail.com',
		From: document.getElementById("email").value,
		Subject: "Contact for any inquiry",
		Body: "Name: " + document.getElementById("name").value
			+ "<br>Email: " + document.getElementById("email").value
			+ "<br>Message: " + document.getElementById("message").value
	}).then(
		message => {
			if (message === "OK") {
				swal("Success", "Your message has been sent!", "success");
			} else {
				swal("Error", "An error occurred: " + message, "error");
			}
		}
	).catch(error => {
		swal("Error", "An unexpected error occurred: " + error, "error");
	});
}
