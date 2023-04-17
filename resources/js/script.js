var adviceCount = document.querySelector("#advice-count-span");
var quote = document.querySelector("#advice-text-span");
var generateBtn = document.querySelector(".dice-btn");
generateBtn.addEventListener("click", generateAdvice);

window.onload = generateAdvice();

async function generateAdvice() {
    quote.textContent = "Looking for advice ;)";
    
    generateBtn.classList.add("disabled-state");
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    adviceCount.textContent = data.slip.id;
    quote.textContent = data.slip.advice;
    generateBtn.disabled = false;
    generateBtn.classList.remove("disabled-state");
}



