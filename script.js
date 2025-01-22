document.addEventListener("DOMContentLoaded", () => {
    const revealButton = document.getElementById("revealButton");
    const hiddenContent = document.getElementById("hiddenContent");

    revealButton.addEventListener("click", () => {
        hiddenContent.style.display = "block";
        revealButton.style.display = "none"; // Hide the button after clicking
    });
});



