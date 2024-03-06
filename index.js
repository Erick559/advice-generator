const adviceCounter = document.querySelector('.advice-counter');
const displayedAdvice  = document.querySelector('.advice');
const randomizerButton = document.querySelector('.randomizer')


document.addEventListener("DOMContentLoaded", getRandomAdvice());
randomizerButton.addEventListener("click", () => {
    getRandomAdvice();
});

async function getRandomAdvice(){
    const response = await fetch("https://api.adviceslip.com/advice")
    const advice = await response.json();

    adviceCounter.textContent = `ADVICE #${advice.slip.id}`
    displayedAdvice.textContent = `"${advice.slip.advice}"`
}