const searchInput = document.getElementById("searchInput");
const tools = document.querySelectorAll(".tool");

searchInput.addEventListener("keyup", function () {
    const value = searchInput.value.toLowerCase();

    tools.forEach(tool => {
        const text = tool.textContent.toLowerCase();
        tool.style.display = text.includes(value) ? "block" : "none";
    });
});
function filterTools(category) {
    const tools = document.querySelectorAll(".tool");

    tools.forEach(tool => {
        if (category === "all" || tool.classList.contains(category)) {
            tool.style.display = "block";
        } else {
            tool.style.display = "none";
        }
    });
}
const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkBtn.textContent = "☀️ Light Mode";
    } else {
        darkBtn.textContent = "🌙 Dark Mode";
    }
});

