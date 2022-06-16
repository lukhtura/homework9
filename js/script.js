const nextButton = document.querySelector('.next-button');
const prevButton = document.querySelector('.prev-button');
const sliderLine = document.querySelector('.slider-line');
prevButton.disabled = true;
let offset = 0;
let sliderCount = 1;
let intervalID = setInterval(toNextSLide, 5000);

nextButton.addEventListener('click', () => {
    toNextSLide();
    checkButtonAndInterval();
    stopInterval();
    startInterval();
});

prevButton.addEventListener('click', () => {
    toPreviousSlide();
    checkButtonAndInterval();
    stopInterval();
    startInterval();
});

function startInterval() {
    if (sliderCount < 9) {
        intervalID = setInterval(toNextSLide, 5000);
    };
};

function stopInterval() {
    clearInterval(intervalID);
};

function toNextSLide() {
    sliderCount += 1;
    checkButtonAndInterval();
    offset += 400;
    sliderLine.style.left = `${-offset}px`;
};

function toPreviousSlide() {
    sliderCount--;
    offset -= 400;
    sliderLine.style.left = `${-offset}px`;
};

function checkButtonAndInterval() {
    if (sliderCount === 1) {
        prevButton.disabled = true
    } else {
        prevButton.disabled = false
    };
    if (sliderCount > 8) {
        stopInterval();
        nextButton.disabled = true
    } else if (sliderCount !== 9) {
        nextButton.disabled = false
    };
};