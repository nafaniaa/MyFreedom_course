document.querySelectorAll('.faq__head').forEach((item) =>
    item.addEventListener('click', () => {
        const parent = item.parentNode;
        if (parent.classList.contains('faq__item--active')) {
            parent.classList.remove('faq__item--active');

        } else {
            document.querySelectorAll('.faq__item').forEach((child) => child.classList.remove('faq__item--active'));        
            parent.classList.add('faq__item--active');
        }       
    })
    
)