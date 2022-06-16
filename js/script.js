const nextButton = document.querySelector('.next-button');
const prevButton = document.querySelector('.prev-button');
const sliderLine = document.querySelector('.slider-line');
prevButton.disabled = true;
let offset = 0;
let count = 1;
let intervalID = setInterval(toNextSLide, 5000);

function startInterval() {
    intervalID = setInterval(toNextSLide, 5000);
};

function stopInterval() {
    clearInterval(intervalID);
};

nextButton.addEventListener('click', () => {
    toNextSLide();
    checkButtonAndInterval();
    stopInterval();
    if (count < 9) {
        startInterval();
    };
});

prevButton.addEventListener('click', () => {
    toPreviousSlide();
    checkButtonAndInterval();
    stopInterval();
    startInterval();
});

function toNextSLide() {
    count += 1;
    console.log(count)
    checkButtonAndInterval();
    offset += 400;
    sliderLine.style.left = `${-offset}px`;
};

function toPreviousSlide() {
    count--;
    offset -= 400;
    sliderLine.style.left = `${-offset}px`;
};

function checkButtonAndInterval() {
    if (count === 1) {
        prevButton.disabled = true
    } else {
        prevButton.disabled = false
    };
    if (count > 8) {
        stopInterval();
        nextButton.disabled = true
    } else if (count !== 9) {
        nextButton.disabled = false
    };
};