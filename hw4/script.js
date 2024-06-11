// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.

const formElem = document.querySelector('input');
const spanEl = document.querySelector('span');
formElem.addEventListener('input', () => {
    spanEl.textContent = formElem.value;
});
// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

const btnEl = document.querySelector('.messageBtn');
const messEl = document.querySelector('.message');
btnEl.addEventListener('click', (e) =>{
messEl.classList.add('animate_animated');
messEl.classList.add('animate_fadeInLeftBig');
messEl.style.visibility = 'visible';
});

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

const formEl = document.querySelector('form');
    const formContrEl = formEl.querySelectorAll('input, select');
    formEl.addEventListener('submit', (e) => {
        formContrEl.forEach(element => {
        if (element.value === '') {
            element.classList.add('error');
          e.preventDefault();
        }
      });
    });

    formEl.addEventListener('input', (e) => {
      if (!e.target.classList.contains('form-control')) {
        return;
      }
      e.target.value === ''
        ? e.target.classList.add('error')
        : e.target.classList.remove('error');
    });
