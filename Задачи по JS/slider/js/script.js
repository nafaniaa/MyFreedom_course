let position = 0;
const slidesToShow = 3;
const slidesToScroll = 2;
const container = document.querySelector('.slider-container');
const track = document.querySelector('.slider-track');
const items = document.querySelectorAll('.slider-item');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
});


btnPrev.addEventListener('click', () => {
    const itemLeft = Math.abs(position) / itemWidth;
    // position += itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;

    if (itemLeft >= slidesToScroll) {
        position = position + movePosition;
    } else {
        position = position + itemLeft * itemWidth;
    }

    setPosition();
    checkBtns();
});

btnNext.addEventListener('click', () => {
    const itemLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    // position -= itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;

    if (itemLeft >= slidesToScroll) {
        position -= movePosition;
    } else {
        position -= itemLeft * itemWidth;
    }

    setPosition();
    checkBtns();
});


const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};
checkBtns();