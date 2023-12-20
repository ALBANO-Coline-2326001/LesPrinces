document.getElementById("theme").addEventListener("click", function() {
    css=document.getElementById("css");
    if (css.href.endsWith("styledark.css")) {
        css.href="styleclair.css";
    } else {
        css.href="styledark.css";
    }
});

// function titi() {
//     let p = document.getElementById("p")
//     let number1 = prompt("Entrez le premier nombre")
//     let number2 = prompt("Entrez le deuxième nombre")
//     let temp = number1 * number1 + number2 * number2
//     let result = Math.sqrt(temp)
//     p.innerHTML = result
// }