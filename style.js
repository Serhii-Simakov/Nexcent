const burger = document.querySelector('.burger');
const headerNav = document.querySelector('.nav');
const noScroll = document.querySelector('.body');
burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  headerNav.classList.toggle('active');
  noScroll.classList.toggle('lock');
});


// Получаем все элементы "button"
let elements = document.querySelectorAll(".button");

// Добавляем обработчик события "click" к каждому элементу
for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function() {
    alert("Кнопка нажата!");
  });
}