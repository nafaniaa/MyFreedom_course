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


// btnPrev.addEventListener('click', () => {
//     const itemLeft = Math.abs(position) / itemWidth;
//     // position += itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;

//     if (itemLeft >= slidesToScroll) {
//         position = position + movePosition;
//     } else {
//         position = position + itemLeft * itemWidth;
//     }

//     setPosition();
//     checkBtns();
// });

// btnNext.addEventListener('click', () => {
//     const itemLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
//     // position -= itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;

//     if (itemLeft >= slidesToScroll) {
//         position -= movePosition;
//     } else {
//         position -= itemLeft * itemWidth;
//     }

//     setPosition();
//     checkBtns();
// });


const setPosition = () => {
    track.style.transform = `translateX(-200px)`;
};

// const checkBtns = () => {
//     btnPrev.disabled = position === 0;
//     btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
// };
// checkBtns();

const time = setInterval(setPosition, 2000)


const modalTrigger = document.querySelectorAll('[data-modal]'),
modal = document.querySelector('.modal'),
modalCloseBtn = document.querySelector('[data-close]');


function closeModal() {
modal.classList.add('hide');
modal.classList.remove('show');
document.body.style.overflow = '';
};

function openModal() {
modal.classList.add('show');
modal.classList.remove('hide');
document.body.style.overflow = 'hidden';
clearInterval(modalTimerId);
};


modalTrigger.forEach(btn => {
btn.addEventListener('click', openModal);
});

modalCloseBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
if (e.target === modal) {
    closeModal();
}
});

document.addEventListener('keydown', (e) => {
if (e.code === 'Escape' && modal.classList.contains('show')) {
    closeModal();
}
});

// const modalTimerId = setTimeout(openModal, 5000);

function showModalByScroll() {
if (window.pageYOffset +
    document.documentElement.clientHeight >=
    document.documentElement.scrollHeight) {
    openModal();
    window.removeEventListener('scroll', showModalByScroll);
}
}

window.addEventListener('scroll', showModalByScroll);
