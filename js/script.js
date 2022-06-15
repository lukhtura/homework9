const nextButton = document.querySelector('.next-button');
const prevButton = document.querySelector('.prev-button');
const sliderLine = document.querySelector('.slider-line');
let offset = 0;
prevButton.disabled = true;

nextButton.addEventListener('click', () => {
    toNextSLide();
    checkButtonIfSlidesEnd();
});

prevButton.addEventListener('click', () => {
    toPreviousSlide();
    checkButtonIfSlidesEnd();
});

function toNextSLide() {
    offset += 400;
    sliderLine.style.left = `${-offset}px`;
};

function toPreviousSlide() {
    offset -= 400;
    sliderLine.style.left = `${-offset}px`;
};

function checkButtonIfSlidesEnd() {
    if (offset === 0) {
        prevButton.disabled = true
    } else {
        prevButton.disabled = false
    };
    if (offset === 3200) {
        nextButton.disabled = true
    } else if (offset < 3200) {
        nextButton.disabled = false
    }
};