let buttons = document.querySelectorAll(".theme");
console.log(buttons)
buttons.forEach((elem) => {
    elem.addEventListener("click", function() {
        let css = document.getElementById("css");
        if (css.href.endsWith("styledark.css")) {
            css.href="styleclair.css";
        } else {
            css.href="styledark.css";
        }
    });
})
