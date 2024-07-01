



document.querySelector('#header').innerHTML = `
        <div class="header">
            <div class="container">
                <ul class="nav">
                    <li class="nav__top"><a href="index.html" class="nav__top"><img src="./img/logo.svg" alt="#" class="nav__top__logo"></a></li>
                    <li class="nav__top"><a href="./about-us/aboutUS.html" class="nav__top__sslk">О нас</a></li>
                    <li class="nav__top"><a href="./news/news.html" class="nav__top__sslk">Новости</a></li>
                    <li class="nav__top"><a href="./sales/sales.html" class="nav__top__sslk">Акции</a></li>
                    <li class="nav__top"><a href="./online-tablo/onlineTablo.html" class="nav__top__sslk">Онлайн табло</a></li>
                    <li class="nav__top"><a href="./profil/profilreg.html" class="nav__top__sslk profil">Профиль</a></li>
                </ul>
            </div>
        </div>
`

document.querySelector('#sectionone').innerHTML = `
    <section>
        <div class="sectionone">
            <img src="./img/plane.png" alt="#" class="sectionone__img">
        </div>
    </section>
`
document.querySelector('#sectiontwo').innerHTML = `
<section>

        <div class="container" >
            <div class="sectiontwo" id="poisk">

                <div class="sectiontwo__blokone">
                    <button class="sectiontwo__blokone__btn" id="poisk">
                    <a href="#" class="sectiontwo__blokone__poisk">Поиск билетов</a>
                    </button>
                    <button class="sectiontwo__blokone__btn" id="registr">
                    <a href="" class="sectiontwo__blokone__registr">Регистрация на рейс</a>
                    </button>
                </div>

                <div class="sectiontwo__bloktwo">

                    <div class="sectiontwo__bloktwo__pole">
                        <p class="sectiontwo__bloktwo__pole__text">Откуда</p>
                        <input type="text" class="sectiontwo__bloktwo__pole__input" id="otkuda">
                    </div>

                    <button class="sectiontwo__bloktwo__strelki"><img src="./img/strelki.svg" alt="#"></button>
                    
                    <div class="sectiontwo__bloktwo__pole">
                        <p class="sectiontwo__bloktwo__pole__text">Куда</p>
                        <input type="text" class="sectiontwo__bloktwo__pole__input" id="kuda">
                    </div>

                    <div class="sectiontwo__bloktwo__pole">
                        <p class="sectiontwo__bloktwo__pole__text">Дата Вылета</p>
                        <input type="date" class="sectiontwo__bloktwo__pole__input" id="data">
                    </div>

                    <button class="sectiontwo__bloktwo__btn"><a href="#" class="sectiontwo__bloktwo__btn__sslk">Найти</a></button>
                
                </div>

                <div class="sectiontwo__blokthree">

                    <div class="sectiontwo__blokthree__box">
                        <input type="checkbox" class="sectiontwo__blokthree__box__check" id="animal">
                        <p class="sectiontwo__blokthree__box__text">Лечу с питомцем</p>
                    </div>

                    <div class="sectiontwo__blokthree__box">
                        <input type="checkbox" class="sectiontwo__blokthree__box__check" id="bagag">
                        <p class="sectiontwo__blokthree__box__text">Билет с багажом</p>
                    </div>

                    <div class="sectiontwo__blokthree__box">
                        <input type="checkbox" class="sectiontwo__blokthree__box__check" id="ruhnayi">
                        <p class="sectiontwo__blokthree__box__text">Только ручная кладь</p>
                    </div>
                </div>

            </div>

            <div class="sectiontworegistr" id="registr">
                <div class="sectiontworegistr__blokone">
                    <button class="sectiontworegistr__btn" id="poisk">
                        <a href="#" class="sectiontworegistr__blokone__poisk">Поиск билетов</a>
                    </button>
                    <button class="sectiontworegistr__btn" id="registr">
                        <a href="" class="sectiontworegistr__blokone__registr">Регистрация на рейс</a>
                    </button>
                </div>

                <div class="sectiontworegistr__bloktwo">
                    <div class="sectiontworegistr__bloktwo__input">
                        <p class="sectiontworegistr__bloktwo__input__title">Фамилия</p>
                        <input type="text" class="sectiontworegistr__bloktwo__input__pole">
                    </div>
                    <div class="sectiontworegistr__bloktwo__input">
                        <p class="sectiontworegistr__bloktwo__input__title">Номер билета</p>
                        <input type="text" class="sectiontworegistr__bloktwo__input__pole">
                    </div>
                    <button class="sectiontworegistr__bloktwo__btn"><a href="" class="sectiontworegistr__bloktwo__btn__sslk">Зарегестрироваться</a></button>
                </div>

                <p class="sectiontworegistr__text">Онлайн регистрация на рейс начинается за 24 часа до планового времени вылета самолета</p>
            </div>
        </div>
    </section>
`
document.querySelector('#sectionthree').innerHTML = `
<section>
        <div class="container">
            <div class="sectionthree">
                <div class="sectionthree__top">
                    <h2 class="sectionthree__top__title">Акции</h2>
                    <a href="../sales/sales.html" class="sectionthree__top__sslk">Все акции<img src="./img/Arrow.svg" alt="#" class="sectionthree__top__sslk__img"></a>
                </div>

                <div class="sectionthree__bottom">

                    <div class="sectionthree__bottom__sales">
                        <div class="sectionthree__bottom__sales__gradient onegradient"></div>
                        <div class="sectionthree__bottom__sales__text">
                            <p class="sectionthree__bottom__sales__text__title">Скидка студентам</p>
                            <a href="#" class="sectionthree__bottom__sales__text__sslk" onclick="showModal('modalsales1')">Подробнее</a>
                        </div>
                    </div>

                    <div class="sectionthree__bottom__sales">
                        <div class="sectionthree__bottom__sales__gradient twogradient"></div>
                        <div class="sectionthree__bottom__sales__text">
                            <p class="sectionthree__bottom__sales__text__title">Билет обратно 
                                дешевле</p>
                            <a href="#" class="sectionthree__bottom__sales__text__sslk" onclick="showModal('modalsales2')">Подробнее</a>
                        </div>
                    </div>

                    <div class="sectionthree__bottom__rasslk">
                        <p class="sectionthree__bottom__rasslk__title">Подписаться на рассылку акций</p>
                        <p class="sectionthree__bottom__rasslk__text">Почта</p>
                        <input type="rasemail" class="sectionthree__bottom__rasslk__input" id="email">
                        <button class="sectionthree__bottom__rasslk__btn"><a href="#" class="sectionthree__bottom__rasslk__btn__sslk">Подписаться</a></button>
                    </div>

                </div>
            </div>
        </div>
    </section>
`

document.querySelector('#sectionfour').innerHTML = `
<section>
        <div class="container">
            <div class="sectionfour">

                <div class="sectionfour__top">
                    <h2 class="sectionfour__top__title">Новости</h2>
                    <a href="../news/news.html" class="sectionfour__top__sslk">Все новости<img src="./img/Arrow.svg" alt="#" class="sectionfour__top__sslk__img"></a>
                </div>

                <div class="sectionfour__bottom">

                    <div class="sectionfour__bottom__news">
                        <div class="sectionfour__bottom__news__text">
                            <p class="sectionfour__bottom__news__text__title">Парк пополнился тремя новыми самолетами</p>
                            <a href="#" class="sectionfour__bottom__news__text__sslk" onclick="showModal('modalnews1')">Подробнее</a>
                        </div>
                        <div class="sectionfour__bottom__news__gradient twogradient"></div>
                    </div>

                    <div class="sectionfour__bottom__news">
                        <div class="sectionfour__bottom__news__text">
                            <p class="sectionfour__bottom__news__text__title">Запускаем новую программу лояльности</p>
                            <a href="#" class="sectionfour__bottom__news__text__sslk" onclick="showModal('modalnews2')">Подробнее</a>
                        </div>
                        <div class="sectionfour__bottom__news__gradient onegradient"></div>
                    </div>

                    <div class="sectionfour__bottom__news">
                        <div class="sectionfour__bottom__news__text">
                            <p class="sectionfour__bottom__news__text__title">Открываем новые льготные категории</p>
                            <a href="#" class="sectionfour__bottom__news__text__sslk" onclick="showModal('modalnews3')">Подробнее</a>
                        </div>
                        <div class="sectionfour__bottom__news__gradient threegradient"></div>
                    </div>

                </div>

            </div>
        </div>
    </section>
`

document.querySelector('#sectionnapr').innerHTML = `
<section>
        <div class="container">
            <div class="sectionnapr">
                
                <div class="sectionnapr__top">
                    <h2 class="sectionnapr__top__title">Популярные направления</h2>
                    <a href="../popular/popular.html" class="sectionnapr__top__sslk">Смотреть все<img src="./img/Arrow.svg" alt="#" class="sectionnapr__top__sslk__img"></a>
                </div>

                <div class="sectionnapr__blok">
                    <div class="sectionnapr__blok__kart">
                        <img src="./img/kaliningrad.jpeg" alt="#" class="sectionnapr__blok__kart__img" onclick="showModal('modalpopular1')">
                        <a href="#" class="sectionnapr__blok__kart__gorod" onclick="showModal('modalpopular1')">Калининград</a>
                        <p class="sectionnapr__blok__kart__strana">Россия</p>
                    </div>
                    <div class="sectionnapr__blok__kart">
                        <img src="./img/moscow.jpeg" alt="#" class="sectionnapr__blok__kart__img" onclick="showModal('modalpopular2')">
                        <a href="#" class="sectionnapr__blok__kart__gorod" onclick="showModal('modalpopular2')">Москва</a>
                        <p class="sectionnapr__blok__kart__strana">Россия</p>
                    </div>
                </div>
                <div class="sectionnapr__blok">
                    <div class="sectionnapr__blok__kart">
                        <img src="./img/sanktPeterburg.jpeg" alt="#" class="sectionnapr__blok__kart__img" onclick="showModal('modalpopular3')">
                        <a href="#" class="sectionnapr__blok__kart__gorod" onclick="showModal('modalpopular3')">Санкт-Петербург</a>
                        <p class="sectionnapr__blok__kart__strana">Россия</p>
                    </div>
                    <div class="sectionnapr__blok__kart">
                        <img src="./img/almata.jpeg" alt="#" class="sectionnapr__blok__kart__img" onclick="showModal('modalpopular4')">
                        <a href="#" class="sectionnapr__blok__kart__gorod" onclick="showModal('modalpopular4')">Алматы</a>
                        <p class="sectionnapr__blok__kart__strana">Казахстан</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
`

  document.querySelector('#sectionfive').innerHTML = `
<section>
        <div class="container">
            <div class="sectionfive">

                <div class="accordion">
                    <div class="accordion-item">
                      <a>Можно ли взять чемодан в самолет?</a>
                      <div class="content">
                        <p>Да, вы можете взять чемодан в самолет. Пожалуйста, ознакомьтесь с правилами провоза багажа на нашем сайте или свяжитесь с нашим отделом обслуживания клиентов для получения дополнительной информации.</p>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <a>Есть ли скидки на билеты для детей?</a>
                      <div class="content">
                        <p>Да, у нас предусмотрены скидки на билеты для детей. Подробности о детских тарифах и условиях получения скидки можно уточнить на нашем сайте или путем обращения в отдел продаж.</p>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <a>Как зарегистрироваться на рейс онлайн?</a>
                      <div class="content">
                        <p>Чтобы зарегистрироваться на рейс онлайн, пожалуйста, перейдите на наш сайт в раздел "Онлайн-регистрация" и следуйте указаниям. Также мы можем помочь вам с онлайн-регистрацией, обратитесь к нашим сотрудникам за помощью.</p>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <a>Могу ли я сдать билет?</a>
                      <div class="content">
                        <p>Вы можете сдать билет в соответствии с условиями тарифа, который вы приобрели. Для получения информации о процедуре возврата и возможных штрафах свяжитесь с нашим центром обслуживания клиентов.</p>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <a>Как взять на борт животное?</a>
                      <div class="content">
                        <p>Для перевозки животного на борту своего рейса, пожалуйста, ознакомьтесь с нашими правилами и требованиями к перевозке домашних животных. Для получения дополнительной информации и организации перелета с вашим питомцем обратитесь в нашу службу поддержки.</p>
                      </div>
                    </div>
                  </div>

            </div>
        </div>
    </section>

`


document.querySelector('#sectionsix').innerHTML = `
<section>
        <div class="container" id="sectionsix">
            <div class="sectionsix">
                <div class="sectionsix__box">
                    <p class="sectionsix__box__title">Остались вопросы?</p>
                    <p class="sectionsix__box__text">Напишите свою почту, мы ответим на вашу заявку в течении двух часов</p>
                    <form action="http://localhost/regwin/vendor/vopros.php" method="post">
                    <p class="sectionsix__box__lable">Почта</p>
                    <input type="email" class="sectionsix__box__input" name="email">
                    <p class="sectionsix__box__lable">Ваш вопрос</p>
                    <input type="text" class="sectionsix__box__input" name="question">  
                    <button class="sectionsix__box__btn">Отправить</button> 
                    </form>             
                </div>
            </div>
        </div>
    </section>

`

document.querySelector('#footer').innerHTML = `
<footer>
        <div class="footer">
            <div class="container">
                <img src="./img/logofooter.svg" alt="#" class="footer__img">
                <ul class="footer__nav">
                    <li class="footer__nav__li"><a href="./about-us/aboutUS.html" class="footer__nav__li bot">О нас</a></li>
                    <li class="footer__nav__li"><a href="./news/news.html" class="footer__nav__li bot">Новости</a></li>
                    <li class="footer__nav__li"><a href="./sales/sales.html" class="footer__nav__li bot">Акции</a></li>
                    <li class="footer__nav__li"><a href="./online-tablo/onlineTablo.html" class="footer__nav__li bot">Онлайн табло</a></li>
                    <li class="footer__nav__li"><a href="#" class="footer__nav__li bot">Профиль</a></li>
                </ul>
            </div>
        </div>
    </footer>
`




document.querySelector('#modalsalesone').innerHTML = `
    <div id="modalsales1" class="modalsales">
        <div class="modalsales__content">
        <span id="closeModalBtn" class="modalsales__content__close" onclick="closeModal('modalsales1')">&times;</span>
        <p class="modalsales__content__text">Скидка студентам - особые условия для молодежи, чтобы путешествия были доступными и выгодными. Мы предлагаем студентам специальные скидки и условия для путешествий, чтобы помочь им исследовать мир без лишних затрат.</p>
        </div>
    </div>
`


document.querySelector('#modalsalestwo').innerHTML = `
    <div id="modalsales2" class="modalsales">
        <div class="modalsales__content">
        <span id="closeModalBtn" class="modalsales__content__close" onclick="closeModal('modalsales2')">&times;</span>
        <p class="modalsales__content__text">Билет обратно дешевле - экономьте на путешествиях с выгодными предложениями на обратные билеты. Мы рады предложить вам экономию при приобретении обратных билетов - отличный повод добавить что-то особенное в свой маршрут.</p>
        </div>
    </div>
`


document.querySelector('#modalnewsone').innerHTML = `
    <div id="modalnews1" class="modalnews">
        <div class="modalnews__content">
        <span id="closeModalBtn" class="modalnews__content__close" onclick="closeModal('modalnews1')">&times;</span>
        <p class="modalnews__content__text">Парк пополнился тремя новыми самолетами, расширяя наши возможности и улучшая комфорт пассажиров. Новейшие модели самолетов присоединились к нашему парку, что позволит нам предлагать еще больше рейсов и разнообразных маршрутов для наших клиентов. Будьте готовы к более комфортным и удобным путешествиям!</p>
        </div>
    </div>
`


document.querySelector('#modalnewstwo').innerHTML = `
    <div id="modalnews2" class="modalnews">
        <div class="modalnews__content">
        <span id="closeModalBtn" class="modalnews__content__close" onclick="closeModal('modalnews2')">&times;</span>
        <p class="modalnews__content__text">Запускаем новую программу лояльности, где каждый полет приближает вас к эксклюзивным привилегиям и скидкам. Теперь каждый ваш полет с нами будет приносить вам еще больше выгоды. Наша новая программа лояльности предлагает уникальные бонусы, специальные предложения и накопление бонусных баллов, делая путешествия с нашей авиакомпанией еще более привлекательными.</p>
        </div>
    </div>
`


document.querySelector('#modalnewsthree').innerHTML = `
    <div id="modalnews3" class="modalnews">
        <div class="modalnews__content">
        <span id="closeModalBtn" class="modalnews__content__close" onclick="closeModal('modalnews3')">&times;</span>
        <p class="modalnews__content__text">Открываем новые льготные категории для пассажиров, делая полеты еще доступнее и удобнее. Мы постоянно работаем над улучшением условий путешествий наших клиентов. Новые льготные категории предусматривают специальные скидки и условия для определенных групп пассажиров, чтобы сделать авиаперелеты еще более выгодными.</p>
        </div>
    </div>
`


document.querySelector('#modalpopularone').innerHTML = `
    <div id="modalpopular1" class="modalpopular">
        <div class="modalpopular__content">
        <span id="closeModalBtn" class="modalpopular__content__close" onclick="closeModal('modalpopular1')">&times;</span>
        <p class="modalpopular__content__title">Калининград</p>
        <p class="modalpopular__content__text"> Калининград, ранее известный как Кенигсберг, является административным центром Калининградской области, российского анклава между Польшей и Литвой.</p>
        <img src="./img/put.svg" alt="#" class="modalpopular__content__samolet">
        <div class="modalpopular__content__tabl">
            <div class="modalpopular__content__tabl__colomn">
                <p class="modalpopular__content__tabl__colomn__title">Город отправления</p>
                <p class="modalpopular__content__tabl__colomn__text">Москва</p>
                <p class="modalpopular__content__tabl__colomn__text">Санкт-Петербург</p>
                <p class="modalpopular__content__tabl__colomn__text">Екатеренбрг</p>
                <p class="modalpopular__content__tabl__colomn__text">Новосибирск</p>
                <p class="modalpopular__content__tabl__colomn__text">Красноярск</p>
                <p class="modalpopular__content__tabl__colomn__text">Хабаровск</p>
            </div>
            <div class="modalpopular__content__tabl__colomn">
                <p class="modalpopular__content__tabl__colomn__title">Время перелета</p>
                <p class="modalpopular__content__tabl__colomn__text">1 час 50 минут</p>
                <p class="modalpopular__content__tabl__colomn__text">1 час 25 минут</p>
                <p class="modalpopular__content__tabl__colomn__text">2 часа 40 минут</p>
                <p class="modalpopular__content__tabl__colomn__text">4 часа 15 минут</p>
                <p class="modalpopular__content__tabl__colomn__text">5 часов 20 минут</p>
                <p class="modalpopular__content__tabl__colomn__text">8 часов 15 минут</p>
            </div>
        </div>
        </div>
    </div>
`


document.querySelector('#modalpopulartwo').innerHTML = `
    <div id="modalpopular2" class="modalpopular">
        <div class="modalpopular__content">
        <span id="closeModalBtn" class="modalpopular__content__close" onclick="closeModal('modalpopular2')">&times;</span>
        <p class="modalpopular__content__title">Москва</p>
        <p class="modalpopular__content__text"> столица России, политический, экономический и культурный центр страны.</p>
        <img src="./img/put.svg" alt="#" class="modalpopular__content__samolet">
        <div class="modalpopular__content__tabl">
            <div class="modalpopular__content__tabl__colomn">
                <p class="modalpopular__content__tabl__colomn__title">Город отправления</p>
                <p class="modalpopular__content__tabl__colomn__text">Москва</p>
                <p class="modalpopular__content__tabl__colomn__text">Санкт-Петербург</p>
                <p class="modalpopular__content__tabl__colomn__text">Екатеренбрг</p>
                <p class="modalpopular__content__tabl__colomn__text">Новосибирск</p>
                <p class="modalpopular__content__tabl__colomn__text">Красноярск</p>
                <p class="modalpopular__content__tabl__colomn__text">Хабаровск</p>
            </div>
            <div class="modalpopular__content__tabl__colomn">
                <p class="modalpopular__content__tabl__colomn__title">Время перелета</p>
                <p class="modalpopular__content__tabl__colomn__text">0 часов 0 минут</p>
                <p class="modalpopular__content__tabl__colomn__text">1 час 25 минут</p>
                <p class="modalpopular__content__tabl__colomn__text">2 часа 30 минут</p>
                <p class="modalpopular__content__tabl__colomn__text">4 часа 15 минут</p>
                <p class="modalpopular__content__tabl__colomn__text">4 часа 20 минут</p>
                <p class="modalpopular__content__tabl__colomn__text">8 часов 15 минут</p>
            </div>
        </div>
        </div>
    </div>
`


document.querySelector('#modalpopularthree').innerHTML = `
    <div id="modalpopular3" class="modalpopular">
        <div class="modalpopular__content">
        <span id="closeModalBtn" class="modalpopular__content__close" onclick="closeModal('modalpopular3')">&times;</span>
        <p class="modalpopular__content__title">Санкт-Петербург</p>
        <p class="modalpopular__content__text"> крупнейший культурный и туристический центр, известен своей архитектурой и историческими достопримечательностями.</p>
        <img src="./img/put.svg" alt="#" class="modalpopular__content__samolet">
        <div class="modalpopular__content__tabl">
            <div class="modalpopular__content__tabl__colomn">
                <p class="modalpopular__content__tabl__colomn__title">Город отправления</p>
                <p class="modalpopular__content__tabl__colomn__text">Москва</p>
                <p class="modalpopular__content__tabl__colomn__text">Санкт-Петербург</p>
                <p class="modalpopular__content__tabl__colomn__text">Екатеренбрг</p>
                <p class="modalpopular__content__tabl__colomn__text">Новосибирск</p>
                <p class="modalpopular__content__tabl__colomn__text">Красноярск</p>
                <p class="modalpopular__content__tabl__colomn__text">Хабаровск</p>
            </div>
            <div class="modalpopular__content__tabl__colomn">
                <p class="modalpopular__content__tabl__colomn__title">Время перелета</p>
                <p class="modalpopular__content__tabl__colomn__text">1 час 10 минут</p>
                <p class="modalpopular__content__tabl__colomn__text">0 часов 0 минут</p>
                <p class="modalpopular__content__tabl__colomn__text">2 часа 30 минут</p>
                <p class="modalpopular__content__tabl__colomn__text">4 часа 15 минут</p>
                <p class="modalpopular__content__tabl__colomn__text">5 часов 20 минут</p>
                <p class="modalpopular__content__tabl__colomn__text">8 часов 15 минут</p>
            </div>
        </div>
        </div>
    </div>
`


document.querySelector('#modalpopularfour').innerHTML = `
    <div id="modalpopular4" class="modalpopular">
        <div class="modalpopular__content">
        <span id="closeModalBtn" class="modalpopular__content__close" onclick="closeModal('modalpopular4')">&times;</span>
        <p class="modalpopular__content__title">Алматы</p>
        <p class="modalpopular__content__text"> крупнейший город Казахстана, финансовый центр и культурный фокус республики.</p>
        <img src="./img/put.svg" alt="#" class="modalpopular__content__samolet">
        <div class="modalpopular__content__tabl">
            <div class="modalpopular__content__tabl__colomn">
                <p class="modalpopular__content__tabl__colomn__title">Город отправления</p>
                <p class="modalpopular__content__tabl__colomn__text">Москва</p>
                <p class="modalpopular__content__tabl__colomn__text">Санкт-Петербург</p>
                <p class="modalpopular__content__tabl__colomn__text">Екатеренбрг</p>
                <p class="modalpopular__content__tabl__colomn__text">Новосибирск</p>
                <p class="modalpopular__content__tabl__colomn__text">Красноярск</p>
                <p class="modalpopular__content__tabl__colomn__text">Хабаровск</p>
            </div>
            <div class="modalpopular__content__tabl__colomn">
                <p class="modalpopular__content__tabl__colomn__title">Время перелета</p>
                <p class="modalpopular__content__tabl__colomn__text">3 часа</p>
                <p class="modalpopular__content__tabl__colomn__text">5 часов 25 минут</p>
                <p class="modalpopular__content__tabl__colomn__text">3 часа 40 минут</p>
                <p class="modalpopular__content__tabl__colomn__text">3 часа </p>
                <p class="modalpopular__content__tabl__colomn__text">3 часа 20 минут</p>
                <p class="modalpopular__content__tabl__colomn__text">6 часов 15 минут</p>
            </div>
        </div>
        </div>
    </div>

`