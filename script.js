const onsets = ["c", "d", "b", "h", "t", "m", "s", "p", "w"];
const rimes = ["at", "in", "ug", "en", "it", "ap", "un", "op", "ook", "eet"];

let currentOnsetIndex = 0;
let currentRimeIndex = 0;

function displayWord() {
    document.getElementById("onset").textContent = onsets[currentOnsetIndex];
    document.getElementById("rime").textContent = rimes[currentRimeIndex];
}

function nextOnset() {
    currentOnsetIndex = (currentOnsetIndex + 1) % onsets.length;
    displayWord();
}

function previousOnset() {
    currentOnsetIndex = (currentOnsetIndex - 1 + onsets.length) % onsets.length;
    displayWord();
}

function nextRime() {
    currentRimeIndex = (currentRimeIndex + 1) % rimes.length;
    displayWord();
}

function previousRime() {
    currentRimeIndex = (currentRimeIndex - 1 + rimes.length) % rimes.length;
    displayWord();
}

// 初期表示
displayWord();
