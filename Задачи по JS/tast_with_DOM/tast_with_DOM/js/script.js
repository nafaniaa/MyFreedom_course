/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов 

6) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

7) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

8) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

9) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

10) Фильмы должны быть отсортированы по алфавиту*/

'use strict';

// document.addEventListener('DOMContentLoadeed', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    const adv = document.querySelectorAll('.promo__adv img');
    const poster = document.querySelector('.promo__bg');
    const genre = document.querySelector('.promo__genre');
    const movieList = document.querySelector('.promo__interactive-list')
    const addForm = document.querySelector('form.add')
    const addInput =document.querySelector('.adding__input')
    const checkBox = document.querySelector('[type="checkbox"]')

    addForm.addEventListener('submit',(e) =>{
        e.preventDEfualt() //удаляет явное действие (какое-то действие по умолчанию)
        let newFilm = addInput.value // достаём значение и присваиваем переменной
        const favorite = checkBox.checked // если галочка есть, то favorite работает
        if(newFilm){
            if(newFilm.length> 21)
            newFilm=`${film.substring(0, 22)}...`//внутри интерполяции мы пишем переменную через $ и ``. Интерполяция - способ добавления информации с помощью переменный
            // substring обрезает строку 
        }
        if(favorite){
            console.log('Добавляем любимый фильм')
            movieDB.movies.push(newFilm)
            sortArr(movieDB.movies)
            createMovieList(movieDB.movies, movieList)
        }
    })

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };
    const makeChange = () => {
        genre.textContent='драма'
        poster.style.backgroundImage='url(img/bg.jpg)'

    }
    const sortArr =(arr) => {
        arr.sort()
    }

function createMovieList(films,parent){
parent.innerHTML=''
  films.forEach((film,i)=>{
  parent.innerHTML +=`<li class="promo__interactive-item">
   ${i+1} ${film}
  <div class="delete"></div>
</li>`
 })

 document.querySelectorAll('.delete').forEach((btn,i)=>{
     btn.addEventListener('click',()=>{
         btn.parentElement.remove()
         
     })
 })
}
   
    deleteAdv(adv);
    makeChange()
    createMovieList(movieDB.movies, movieList)
// });