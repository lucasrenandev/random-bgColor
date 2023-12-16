// Strict mode
// Modo estrito
"use strict";

// Generate random background color --> hexadecimal
// Gerar cor de fundo aleatória --> Hexadecimal
function randomBgColor() {
    const hero = document.querySelector(".hero");
    const hex = "abcdef0123456789";
    const max = 6;
    let newHex = "";

    for(let i = 0; i < max; i ++) {
        const randomHex = Math.floor(Math.random() * hex.length);
        newHex += hex.substring(randomHex, randomHex + 1);
    }
    hero.style.backgroundColor = "#" + newHex;
}
setInterval(randomBgColor, 1000);

// Generate random background color --> RGB
// Gerar cor de fundo aleatória --> RGB
/* function randomBgColor() {
    const hero = document.querySelector(".hero");
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255; 
    hero.style.backgroundColor = `rgb(${r}, ${g}, ${b})`; 
}
setInterval(randomBgColor, 1000); */