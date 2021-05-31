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
    "img/taya/taya-bracelets1.jpg",
    'photo',
    "MERCURO",
    'Серебро',
    '5 500 руб',
    '3 849 руб',
    '30%',
    ".catalog__row",
    "bracelets/index_bracelet_1.html"

).render();

new MenuCard(
    "img/taya/taya-bracelets2.jpg",
    'photo',
    "REGIS",
    'Серебро',
    '5 500 руб',
    '3 849 руб',
    '30%',
    ".catalog__row",
    "bracelets/index_bracelet_2.html"

).render();

new MenuCard(
    "img/taya/taya-bracelets3.jpg",
    'photo',
    "OSHEA",
    'Серебро',
    '5 500 руб',
    '3 849 руб',
    '30%',
    ".catalog__row",
    "bracelets/index_bracelet_3.html"
 

).render();

new MenuCard(
    "img/taya/taya-bracelets4.jpg",
    'photo',
    "TIEVA",
    'Серебро',
    '5 500 руб',
    '3 849 руб',
    '30%',
    ".catalog__row",
    "bracelets/index_bracelet_4.html"

).render();

new MenuCard(
    "img/taya/taya-bracelets5.jpg",
    'photo',
    "KORSO",
    'Серебро',
    '5 500 руб',
    '3 849 руб',
    '30%',
    ".catalog__row",
    "bracelets/index_bracelet_5.html"

).render();

new MenuCard(
    "img/taya/taya-bracelets6.jpg",
    'photo',
    "AUHO",
    'Серебро',
    '5 500 руб',
    '3 849 руб',
    '30%',
    ".catalog__row",
    "bracelets/index_bracelet_6.html"

).render();

new MenuCard(
    "img/taya/taya-bracelets7.jpg",
    'photo',
    "FURI",
    'Серебро',
    '5 500 руб',
    '3 849 руб',
    '30%',
    ".catalog__row",
    "bracelets/index_bracelet_7.html"

).render();

new MenuCard(
    "img/taya/taya-bracelets8.jpg",
    'photo',
    "TILIVO",
    'Серебро',
    '5 500 руб',
    '3 849 руб',
    '30%',
    ".catalog__row",
    "bracelets/index_bracelet_8.html"

).render();

new MenuCard(
    "img/taya/taya-bracelets9.jpg",
    'photo',
    "KAULO",
    'Серебро',
    '5 500 руб',
    '3 849 руб',
    '30%',
    ".catalog__row",
    "bracelets/index_bracelet_9.html"

).render();

