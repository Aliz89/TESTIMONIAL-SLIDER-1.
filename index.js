const slide = document.getElementById("slide");
const upArrow = document.getElementById("upArrow");
const downArrow = document.getElementById("downArrow");

let x = 0; // Ez tárolja, hogy a slide jelenleg hol van. 

// FELFELÉ nyíl → vizuálisan felfelé görget
upArrow.onclick = function() {
    if (x < 0) { // ha még lehet lejjebb menni
        x += 300; // növeli a top értéket → a slide lefelé mozdul → vizuálisan felfelé görget
        slide.style.top = x + "px";
    }
}

// LEFELÉ nyíl → vizuálisan lefelé görget
downArrow.onclick = function() {
    if (x > -900) { // ha még lehet feljebb menni
        x -= 300; // csökkenti a top értéket → a slide feljebb mozdul → vizuálisan lefelé görget
        slide.style.top = x + "px";
    }
}