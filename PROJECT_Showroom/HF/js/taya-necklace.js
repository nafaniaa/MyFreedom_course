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
    "img/taya/taya-necklace1.jpg",
    'photo',
    "AGUARA",
    'Серебро',
    '5 500 руб',
    '3 849 руб',
    '30%',
    ".catalog__row",
    "necklaces/index_necklace_1.html"

).render();

new MenuCard(
    "img/taya/taya-necklace2.jpg",
    'photo',
    "SARA",
    'Серебро',
    '5 500 руб',
    '3 849 руб',
    '30%',
    ".catalog__row",
    "necklaces/index_necklace_2.html"

).render();

new MenuCard(
    "img/taya/taya-necklace3.jpg",
    'photo',
    "OLIVA",
    'Серебро',
    '5 500 руб',
    '3 849 руб',
    '30%',
    ".catalog__row",
    "necklaces/index_necklace_3.html"

).render();

new MenuCard(
    "img/taya/taya-necklace4.jpg",
    'photo',
    "VIETA",
    'Серебро',
    '5 500 руб',
    '3 849 руб',
    '30%',
    ".catalog__row",
    "necklaces/index_necklace_4.html"

).render();

new MenuCard(
    "img/taya/taya-necklace5.jpg",
    'photo',
    "ORSA",
    'Серебро',
    '5 500 руб',
    '3 849 руб',
    '30%',
    ".catalog__row",
    "necklaces/index_necklace_5.html"

).render();

new MenuCard(
    "img/taya/taya-necklace6.jpg",
    'photo',
    "NIFA",
    'Серебро',
    '5 500 руб',
    '3 849 руб',
    '30%',
    ".catalog__row",
    "necklaces/index_necklace_6.html"

).render();

new MenuCard(
    "img/taya/taya-necklace7.jpg",
    'photo',
    "OPAL",
    'Серебро',
    '5 500 руб',
    '3 849 руб',
    '30%',
    ".catalog__row",
    "necklaces/index_necklace_7.html"

).render();

new MenuCard(
    "img/taya/taya-necklace8.jpg",
    'photo',
    "OERA",
    'Серебро',
    '5 500 руб',
    '3 849 руб',
    '30%',
    ".catalog__row",
    "necklaces/index_necklace_8.html"

).render();

new MenuCard(
    "img/taya/taya-necklace9.jpg",
    'photo',
    "OLI",
    'Серебро',
    '5 500 руб',
    '3 849 руб',
    '30%',
    ".catalog__row",
    "necklaces/index_necklace_9.html"

).render();