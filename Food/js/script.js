window.addEventListener('DOMContentLoaded', function () {

    // tabs

    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');
    function hideContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide')//добавляем класс display = none , который скрывант элемент
            item.classList.remove('show', 'fade')// добавляем класс display = block а анимацию , который добавляет элемент
        })
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active')
        })
    }// скрывает картинки и текс ,и убирает жирность у пунктов меню 

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade')
        tabsContent[i].classList.remove('hide')
        tabs[i].classList.add('tabheader__item_active')
    }

    hideContent()
    showTabContent()

    tabsParent.addEventListener('click', function (event) {
        const target = event.target
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideContent()
                    showTabContent(i)
                }
            })
        }
    })


    const deadline = '2021-03-30'

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor((t / (1000 * 60 * 60 * 24))),
            hours = Math.floor((t / (1000 * 60 * 60) % 24)),
            minutes = Math.floor((t / (1000 * 60) % 60)),
            seconds = Math.floor((t / 1000) % 60)

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`
        } else {
            return num
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000)

        updateClock()

        function updateClock() {
            const t = getTimeRemaining(endtime)
            days.innerHTML = getZero(t.days)
            hours.innerHTML = getZero(t.hours)
            minutes.innerHTML = getZero(t.minutes)
            seconds.innerHTML = getZero(t.seconds)

            if (t.total <= 0) {
                clearInterval(timeInterval)
            }
        }
    }

    setClock('.timer', deadline)

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]')

    function closeModal() {
        modal.classList.add('hide')
        modal.classList.remove('show')
        document.body.style.overflow = ''
    }

    function openModal() {
        modal.classList.add('show')
        modal.classList.remove('hide')
        document.body.style.overflow = 'hidden'
        clearTimeout(modalTimerId)
    }

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal)
    })

    modalCloseBtn.addEventListener('click', closeModal)

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal
        }
    })

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal()
        }
    })

    // const modalTimerId = setTimeout(openModal,3000)

    function showModalByScroll() {
        if (window.pageYOffset
            + document.documentElement.clientHeight
            >= document.documentElement.scrollHeight) {
            openModal()
            window.removeEventListener('scroll', showModalByScroll)
        }
    }

    window.addEventListener('scroll', showModalByScroll)


//Использование класс для сохдания карточек меню
    class MenuCard {
        constructor(src, alt, title, descr, price, parentSElector) {
            this.src = src
            this.alt = alt
            this.title = title
            this.descr = descr
            this.price = price
            this.dollar = 2.6
            this.parent = document.querySelector(parentSElector)
            this.changePrice()
        }
        changePrice() {
            this.price = this.price * this.dollar
        }
        render() {
            const element = document.createElement('div');
            element.innerHTML = `
                <div class="menu__item">
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> BYN/день</div>
                    </div>
                </div>
            
            `
    //Добавлеет елемен в нужное место и сохроняет её
            this.parent.append(element)
        }
    }

    new MenuCard(
        "img/tabs/vegy.jpg"

    ).render()
});
//когда контент HTML подгрузился



