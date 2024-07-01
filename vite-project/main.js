
//популярные вопросы
document.addEventListener('DOMContentLoaded', function() {
  const sectionFive = document.querySelector('#sectionfive');
  const items = sectionFive.querySelectorAll(".accordion a");

  function toggleAccordion() {
      this.classList.toggle('active');
      this.nextElementSibling.classList.toggle('active');
  }

  items.forEach(item => item.addEventListener('click', toggleAccordion));
});

//смена секции на главной странице

document.addEventListener("DOMContentLoaded", function() {
  var registrButton = document.querySelector('.sectiontwo__blokone__btn a.sectiontwo__blokone__registr');
  registrButton.addEventListener("click", function(event) {
    event.preventDefault();
    var sectionTwo = document.querySelector('.sectiontwo');
    var sectionTwoRegistr = document.querySelector('.sectiontworegistr');
    sectionTwo.style.animation = "slideOut 0.5s forwards";
    sectionTwoRegistr.style.animation = "slideIn 0.5s forwards";
    setTimeout(function() {
      sectionTwo.style.display = 'none';
      sectionTwoRegistr.style.display = 'block';
    }, 500);
  });

  var poiskButton = document.querySelector('.sectiontworegistr__btn a.sectiontworegistr__blokone__poisk');
  poiskButton.addEventListener("click", function(event) {
    event.preventDefault();
    var sectionTwo = document.querySelector('.sectiontwo');
    var sectionTwoRegistr = document.querySelector('.sectiontworegistr');
    sectionTwoRegistr.style.animation = "slideOut 0.5s forwards";
    sectionTwo.style.animation = "slideIn 0.5s forwards";
    setTimeout(function() {
      sectionTwoRegistr.style.display = 'none';
      sectionTwo.style.display = 'block';
    }, 500);
  });
});







// модальные окна новости
function showModal(modalId) {
  // Сначала скрываем все модальные окна
  var modalsnews = document.querySelectorAll('.modalnews');
  modalsnews.forEach(function(modal) {
      modal.style.display = 'none';
  });
  // Затем показываем модальное окно с переданным идентификатором
  var modalnews = document.getElementById(modalId);
  modalnews.style.display = 'block';
}
function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = 'none';
}




// модальные окна акции
function showModal(modalId) {
  // Сначала скрываем все модальные окна
  var modalssales = document.querySelectorAll('.modalsales');
  modalssales.forEach(function(modal) {
      modal.style.display = 'none';
  });
  // Затем показываем модальное окно с переданным идентификатором
  var modalsales = document.getElementById(modalId);
  modalsales.style.display = 'block';
}
function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = 'none';
}


//смена картинки на странице о нас
let images = [
  './img/stuardessa.png',
  './img/stuardessatwo.jpg',
  './img/stuardessathree.jpg'
];

let currentIndex = 0;
let imgElement = document.querySelector('.aboutUS__sectionone__img');

function changeImage() {
  if (currentIndex === images.length) {
    currentIndex = 0;
  }
  imgElement.src = images[currentIndex];

  // Убрать класс "active" со всех изображений
  document.querySelectorAll('.aboutUS__sectionone__img').forEach(img => {
    img.classList.remove('active');
  });

  // Добавить класс "active" к текущему изображению
  document.querySelectorAll('.aboutUS__sectionone__img')[currentIndex].classList.add('active');

  currentIndex++;
}

setInterval(changeImage, 3000); // Меняем изображение каждые 3 секунды


// модальные окна направления
function showModal(modalId) {
  // Сначала скрываем все модальные окна
  var modalspopular = document.querySelectorAll('.modalpopular');
  modalspopular.forEach(function(modal) {
      modal.style.display = 'none';
  });
  // Затем показываем модальное окно с переданным идентификатором
  var modalpopular = document.getElementById(modalId);
  modalpopular.style.display = 'block';
}
function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = 'none';
}







