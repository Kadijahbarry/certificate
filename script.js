document.addEventListener("DOMContentLoaded", () => {
    const revealButton = document.getElementById("revealButton");
    const hiddenMessage = document.getElementById("hiddenMessage");

    revealButton.addEventListener("click", () => {
        hiddenMessage.style.display = "block"; // Show the hidden message
        revealButton.style.display = "none";  // Hide the button after clicking
    });
});


