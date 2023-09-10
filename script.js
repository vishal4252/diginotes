AOS.init(
    duration = 500
);
const programmingLanguages = [
    { name: "CPP Programming", url: "notes.html" },
    { name: "C Programming", url: "notes.html" },
    { name: "Software Engineering", url: "notes.html" },
    { name: "Web Technologies", url: "notes.html" },
    { name: "Technical Communication", url: "notes.html" },
    { name: "Fundamentals of Computer", url: "notes.html" },
    { name: "Computer Networks", url: "notes.html" },
    { name: "Cyber Security", url: "notes.html" },
    { name: "Human Values and Ethics", url: "notes.html" },
    { name: "Principles of Management", url: "notes.html" },
    { name: "Operating System & Linux Programming", url: "notes.html" },
    { name: "Computer Graphics", url: "notes.html" },
    { name: "Cloud Computing", url: "notes.html" },
];
const searchInput = document.getElementById("search-bar");
const suggestionsContainer = document.getElementById("suggestions");
function redirectToLanguagePage(languageName) {
    const matchedLanguage = programmingLanguages.find(
        language => language.name.toLowerCase() === languageName.toLowerCase()
    );

    if (matchedLanguage) {
        window.location.href = matchedLanguage.url;
    }
}
searchInput.addEventListener("input", () => {
    const userInput = searchInput.value.toLowerCase();
    const matchedLanguages = programmingLanguages.filter(language =>
        language.name.toLowerCase().includes(userInput)
    );

    if (userInput === "") {
        suggestionsContainer.innerHTML = "";
    } else if (matchedLanguages.length === 0) {
        suggestionsContainer.innerHTML = "Not found";
    } else {
        const suggestionsHTML = matchedLanguages
            .map(language => `<div class="suggestion">${language.name}</div>`)
            .join("");
        suggestionsContainer.innerHTML = suggestionsHTML;

        const suggestionItems = document.querySelectorAll(".suggestion");

        suggestionItems.forEach(item => {
            item.addEventListener("click", () => {
                const clickedLanguage = item.textContent;
                redirectToLanguagePage(clickedLanguage);
            });
        });
    }
});
searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        redirectToLanguagePage(searchInput.value);
    }
});
const searchButton = document.getElementById("search-btn");
function redirectToLanguagePage(languageName) {
    const matchedLanguage = programmingLanguages.find(
        language => language.name.toLowerCase() === languageName.toLowerCase()
    );

    if (matchedLanguage) {
        window.location.href = matchedLanguage.url;
    }
}
searchButton.addEventListener("click", () => {
    const userInput = searchInput.value;
    redirectToLanguagePage(userInput);
});
