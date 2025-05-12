// Change text content dynamically
document.getElementById("changeTextBtn").addEventListener("click", function() {
    document.getElementById("title").textContent = "Welcome to JavaScript!";
});

// Modify CSS styles via JavaScript
document.getElementById("title").addEventListener("mouseover", function() {
    this.classList.toggle("highlight");
});

// Add or remove an element when a button is clicked
document.getElementById("toggleElementBtn").addEventListener("click", function() {
    let description = document.getElementById("description");
    description.classList.toggle("hidden");
});
