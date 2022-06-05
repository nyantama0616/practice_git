const animals = ["panda", "usagi", "koara"];
const animalEl = document.getElementById("animal");

let i = 0;
setInterval(() => {
    animalEl.textContent = animals[i++ % animals.length];
}, 500);
