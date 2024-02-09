// Delay the prompt to allow the black screen to display first
setTimeout(function() {
    var password = prompt("Please enter the password to access the website:");
    if (password !== "ILoveYouNidhi") {
        // Redirect to the home page if password is incorrect
        window.location.href = "error.html";
    } else {
        // Redirect to the home page if password is correct
        window.location.href = "index.html";
    }
}, 3000); // Adjust the delay time as needed (in milliseconds)
