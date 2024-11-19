var names = [];

while (true) {
    var input = prompt ("Enter the next player's name (leave it blank to finish)");
    if (input === null || input.trim() === "") {
        break;
    }
    names.push(input.trim());
}

function shuffleNames() {
    const h2Element = document.querySelector("h2");
    const animationDuration = 1000;
    const intervalSpeed = 50;

    let interval = setInterval (() => {
        const randomName = names [Math.floor(Math.random() * names.length)];
        h2Element.textContent = randomName;
    }, intervalSpeed);

    setTimeout (() => {
        clearInterval(interval);
        const finalName = names [Math.floor(Math.random() * names.length)];
        h2Element.textContent = finalName;
    }, animationDuration);

    document.querySelector("img").setAttribute ("src", "./images/truth0.png");
}

function shuffleTruth() {
    const image = document.querySelector("img");
    const animationDuration = 700;
    const intervalSpeed = 20;

    let interval = setInterval (() => {
        const randomTruth = "./images/truth" + (Math.floor(Math.random() * 10)+1) + ".png";
        image.setAttribute ("src", randomTruth);
    }, intervalSpeed);

    setTimeout (() => {
        clearInterval(interval);
        const finalTruth = "./images/truth" + (Math.floor(Math.random() * 10)+1) + ".png";
        image.setAttribute ("src", finalTruth);
    }, animationDuration);
}

function shuffleDare() {
    const image = document.querySelector("img");
    const animationDuration = 700;
    const intervalSpeed = 20;

    let interval = setInterval (() => {
        const randomDare = "./images/dare" + (Math.floor(Math.random() * 10)+1) + ".png";
        image.setAttribute ("src", randomDare);
    }, intervalSpeed);

    setTimeout (() => {
        clearInterval(interval);
        const finalDare = "./images/dare" + (Math.floor(Math.random() * 10)+1) + ".png";
        image.setAttribute ("src", finalDare);
    }, animationDuration);
}
