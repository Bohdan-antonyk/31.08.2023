const regulatorOneEl = document.querySelector('.regulator-one');
const regulatorTwoEl = document.querySelector('.regulator-two');
const gearEl = document.querySelector('.gear');
const stopEl = document.querySelector('.stop');

// Speed
const speedZero = document.querySelector('.speed-zero');
const speedOne = document.querySelector('.speed-one');
const speedTwo = document.querySelector('.speed-two');
const speedThree = document.querySelector('.speed-three');

let currentSpeed = 5;
let currentDirection = 1;

regulatorOneEl.addEventListener("click", function (event) {
    const clickX = event.clientX;
    const buttonLeft = regulatorOneEl.getBoundingClientRect().left;

    if (clickX < buttonLeft + regulatorOneEl.offsetWidth / 2) {
        currentDirection = -1;
        leftSideClick();
    } else {
        currentDirection = 1;
        rightSideClick();
    }
});

function leftSideClick() {
    regulatorOneEl.style.transform = "rotate(-40deg)";
    updateAnimation();
}

function rightSideClick() {
    regulatorOneEl.style.transform = "rotate(40deg)";
    updateAnimation();
}

function updateAnimation() {
    let animationDirection;
    if (currentDirection === 1) {
        animationDirection = "rotate";
    } else {
        animationDirection = "reverse rotate";
    }
    const animationSpeed = currentSpeed + "s";
    gearEl.style.animation = `${animationDirection} ${animationSpeed} linear infinite`;
}

stopEl.addEventListener('click', stopSideClick);

function stopSideClick() {
    regulatorOneEl.style.transform = "";
    regulatorOneEl.classList.add('initial-position');
    gearEl.style.animation = "rotate 0s linear infinite";
    currentDirection = 1;
}

speedZero.addEventListener('click', () => {
    regulatorTwoEl.style.transform = "rotate(0deg)";
    currentSpeed = 0;
    updateAnimation();
});

speedOne.addEventListener('click', () => {
    regulatorTwoEl.style.transform = "rotate(45deg)";
    currentSpeed = 5;
    updateAnimation();
});

speedTwo.addEventListener('click', () => {
    regulatorTwoEl.style.transform = "rotate(90deg)";
    currentSpeed = 3;
    updateAnimation();
});

speedThree.addEventListener('click', () => {
    regulatorTwoEl.style.transform = "rotate(135deg)";
    currentSpeed = 1;
    updateAnimation();
});