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
    "img/taya/taya-rings1.jpg",
    'photo',
    "FILA",
    'Серебро',
    '5 500 руб',
    '3 849 руб',
    '30%',
    ".catalog__row",
    "rings/index_ring_1.html"

).render();

new MenuCard(
    "img/taya/taya-rings2.jpg",
    'photo',
    "CAIRO",
    'Серебро',
    '5 500 руб',
    '3 849 руб',
    '30%',
    ".catalog__row",
    "rings/index_ring_2.html"

).render();

new MenuCard(
    "img/taya/taya-rings3.jpg",
    'photo',
    "LIALA",
    'Серебро',
    '5 500 руб',
    '3 849 руб',
    '30%',
    ".catalog__row",
    "rings/index_ring_3.html"

).render();

new MenuCard(
    "img/taya/taya-rings4.jpg",
    'photo',
    "OASIS",
    'Серебро',
    '5 500 руб',
    '3 849 руб',
    '30%',
    ".catalog__row",
    "rings/index_ring_4.html"

).render();

new MenuCard(
    "img/taya/taya-rings5.jpg",
    'photo',
    "OTARA",
    'Серебро',
    '5 500 руб',
    '3 849 руб',
    '30%',
    ".catalog__row",
    "rings/index_ring_5.html"

).render();

new MenuCard(
    "img/taya/taya-rings6.jpg",
    'photo',
    "POLIA",
    'Серебро',
    '5 500 руб',
    '3 849 руб',
    '30%',
    ".catalog__row",
    "rings/index_ring_6.html"

).render();

new MenuCard(
    "img/taya/taya-rings7.jpg",
    'photo',
    "IARA",
    'Серебро',
    '5 500 руб',
    '3 849 руб',
    '30%',
    ".catalog__row",
    "rings/index_ring_7.html"

).render();

new MenuCard(
    "img/taya/taya-rings8.jpg",
    'photo',
    "GALIO",
    'Серебро',
    '5 500 руб',
    '3 849 руб',
    '30%',
    ".catalog__row",
    "rings/index_ring_8.html"

).render();

new MenuCard(
    "img/taya/taya-rings9.jpg",
    'photo',
    "TYARA",
    'Серебро',
    '5 500 руб',
    '3 849 руб',
    '30%',
    ".catalog__row",
    "rings/index_ring_9.html"

).render();