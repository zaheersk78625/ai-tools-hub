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
function searchTools() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let cards = document.getElementsByClassName("card");

  for (let i = 0; i < cards.length; i++) {
    let title = cards[i].getElementsByTagName("h2")[0].innerText.toLowerCase();
    let desc = cards[i].getElementsByTagName("p")[0].innerText.toLowerCase();

    if (title.includes(input) || desc.includes(input)) {
      cards[i].style.display = "block";
    } else {
      cards[i].style.display = "none";
    }
  }
}


