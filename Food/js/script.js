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

});
    //когда контент HTML подгрузился