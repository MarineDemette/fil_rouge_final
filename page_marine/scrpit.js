const button = document.querySelector("#button");
const text = document.querySelector("#texte");
const body = document.querySelector("body");
 

let theme = "light"

button.addEventListener("click", function () {
    console.log("click");
    body.classList.toggle("darkMode");
    navi.classList.doggle("navbarDark")
    if (theme == "light") {
        theme = "dark";
        text.textContent = "Light theme";
    }
    else{
        theme = "light";
        text.textContent = "Dark Theme";
    }

})