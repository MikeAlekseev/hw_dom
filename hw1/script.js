// []()
// []()
// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
const idEl = document.querySelector('#super_link');
console.log(idEl);
// []()
// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
// []()
const cardEl = document.querySelectorAll('.card-link');
cardEl.forEach(Element => {
    Element.textContent = 'ссылка' ;
});
console.log(Element);
// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
// []()
const cardEl2 = document.querySelectorAll('.card-body .card-link');
console.log(cardEl2);

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
// []()
const dataEl = document.querySelector('[data-number="50"]');
console.log(dataEl);
// 5. Выведите содержимое тега title в консоль.
// []()
const titleEl = document.title;
console.log(titleEl);
// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
// []()
const cartitEl = document.querySelector('.card-title');
console.log(cartitEl.parentElement);
// 7. Создайте тег`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
const textEl = document.createElement('p');
textEl.textContent = 'Привет';
const caEl = document.querySelector('.card');
caEl.insertBefore(textEl, caEl.firstChild);
// console.log();

// 8. Удалите тег h6 на странице.
const h6El = document.querySelector('h6');
h6El.remove();				