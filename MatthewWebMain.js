document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const savedTheme = localStorage.getItem("theme");
    const glow = document.querySelector(".mouse-glow");

    // Apply saved theme preference
    body.classList.toggle("dark-mode", savedTheme === "dark-mode");
    body.classList.toggle("light-mode", savedTheme !== "dark-mode");

    function updateButtonText() {
        themeToggle.textContent = body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
    }
    updateButtonText();

    themeToggle.addEventListener("click", function () {
        body.classList.toggle("light-mode");
        body.classList.toggle("dark-mode");
        localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark-mode" : "light-mode");
        updateButtonText();
    });

    // Mouse move effect
    document.addEventListener("mousemove", function (e) {
        const glow = document.querySelector(".mouse-glow"); // Assuming you're selecting the glow element

        // Adjust the mouse Y position for page scrolling
        const mouseX = e.clientX - 125;
        const mouseY = e.clientY - 325 + window.scrollY; // Add scrollY to adjust for page scrolling

        // Move the glow element
        glow.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });
});
