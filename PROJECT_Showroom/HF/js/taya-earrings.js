class MenuCard {
    constructor(src, alt, title, material, oldprice, newprice, sale, parentSelector, href) {
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.material = material;
        this.oldprice = oldprice;
        this.newprice = newprice;
        this.sale = sale;
        // this.dollar = 2.6;
        this.parent = document.querySelector(parentSelector);
        this.href = href;
        // this.changePrice();
    }
    // changePrice() {
    //     this.price = this.price * this.dollar;
    // }
    render() {
        const element = document.createElement('a');
        element.className = 'catalog__item';
        element.setAttribute('href', `${this.href}`);
        element.innerHTML = `
    
        <div class="catalog-item__img">
            <img src=${this.src} alt=${this.alt}>
        </div>
        <h2 class="catalog-item__h2">${this.title}</h2>
        <div class="catalog-item__info">
            <p class="catalog-item__material">${this.material}</p>
            <p class="catalog-item__price"> <span>${this.oldprice}</span> ${this.oldprice}</p>
        </div>
        <div class="catalog-item__sale">${this.sale}</div>
 
        
        `;
        this.parent.append(element);
    }
}

new MenuCard(
    "img/taya/taya-earrings1.jpg",
    'photo',
    "LILO",
    'Серебро',
    '5 500 руб',
    '3 849 руб',
    '30%',
    ".catalog__row",
    "earrinngs/index_earring_1.html"

).render();

new MenuCard(
    "img/taya/taya-earrings2.jpg",
    'photo',
    "GIO",
    'Серебро',
    '5 500 руб',
    '3 849 руб',
    '30%',
    ".catalog__row",
    "earrinngs/index_earring_2.html"

).render();

new MenuCard(
    "img/taya/taya-earrings3.jpg",
    'photo',
    "VIOLA",
    'Серебро',
    '5 500 руб',
    '3 849 руб',
    '30%',
    ".catalog__row",
    "earrinngs/index_earring_3.html"

).render();

new MenuCard(
    "img/taya/taya-earrings4.jpg",
    'photo',
    "KODO",
    'Серебро',
    '5 500 руб',
    '3 849 руб',
    '30%',
    ".catalog__row",
    "earrinngs/index_earring_4.html"

).render();

new MenuCard(
    "img/taya/taya-earrings5.jpg",
    'photo',
    "MARI",
    'Серебро',
    '5 500 руб',
    '3 849 руб',
    '30%',
    ".catalog__row",
    "earrinngs/index_earring_5.html"

).render();

new MenuCard(
    "img/taya/taya-earrings6.jpg",
    'photo',
    "RIRI",
    'Серебро',
    '5 500 руб',
    '3 849 руб',
    '30%',
    ".catalog__row",
    "earrinngs/index_earring_6.html"

).render();

new MenuCard(
    "img/taya/taya-earrings7.jpg",
    'photo',
    "IEWA",
    'Серебро',
    '5 500 руб',
    '3 849 руб',
    '30%',
    ".catalog__row",
    "earrinngs/index_earring_7.html"

).render();

new MenuCard(
    "img/taya/taya-earrings8.jpg",
    'photo',
    "VOLIM",
    'Серебро',
    '5 500 руб',
    '3 849 руб',
    '30%',
    ".catalog__row",
    "earrinngs/index_earring_8.html"

).render();

new MenuCard(
    "img/taya/taya-earrings9.jpg",
    'photo',
    "LAULA",
    'Серебро',
    '5 500 руб',
    '3 849 руб',
    '30%',
    ".catalog__row",
    "earrinngs/index_earring_9.html"

).render();