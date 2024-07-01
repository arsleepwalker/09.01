document.querySelector('#header').innerHTML = `
        <div class="header">
            <div class="container">
                <ul class="nav">
                    <li class="nav__top"><a href="../index.html" class="nav__top"><img src="./img/logo.svg" alt="#" class="nav__top__logo"></a></li>
                    <li class="nav__top"><a href="../about-us/aboutUS.html" class="nav__top__sslk">О нас</a></li>
                    <li class="nav__top"><a href="#" class="nav__top__sslk">Новости</a></li>
                    <li class="nav__top"><a href="../sales/sales.html" class="nav__top__sslk">Акции</a></li>
                    <li class="nav__top"><a href="../online-tablo/onlineTablo.html" class="nav__top__sslk">Онлайн табло</a></li>
                    <li class="nav__top"><a href="../profil/profilreg.html" class="nav__top__sslk profil">Профиль</a></li>
                </ul>
            </div>
        </div>
`

document.querySelector('#body').innerHTML = `
    <section>
        <div class="container">
        <h3 class="news__title">Новости</h3>

                <div class="news">

                    <div class="news__boxsmall">
                        <div class="news__boxsmall__text">
                            <p class="news__boxsmall__text__title">Парк пополнился тремя новыми самолетами</p>
                            <a href="#" class="news__boxsmall__text__sslk" onclick="showModal('modalnews1')">Подробнее</a>
                        </div>
                        <div class="news__boxsmall__gradient onegradient"></div>
                    </div>

                    <div class="news__boxsmall">
                        <div class="news__boxsmall__text">
                            <p class="news__boxsmall__text__title">Запускаем новую программу лояльности</p>
                            <a href="#" class="news__boxsmall__text__sslk" onclick="showModal('modalnews2')">Подробнее</a>
                        </div>
                        <div class="news__boxsmall__gradient twogradient"></div>
                    </div>

                    <div class="news__boxsmall">
                        <div class="news__boxsmall__text">
                            <p class="news__boxsmall__text__title">Открываем новые льготные категории</p>
                            <a href="#" class="news__boxsmall__text__sslk" onclick="showModal('modalnews3')">Подробнее</a>
                        </div>
                        <div class="news__boxsmall__gradient threegradient"></div>
                    </div>

                </div>

                <div class="news">

                    <div class="news__boxbig">
                        <div class="news__boxbig__text">
                            <p class="news__boxbig__text__title">Встречайте новый самолет в нашем парке - летайте с комфортом!</p>
                            <a href="#" class="news__boxbig__text__sslk" onclick="showModal('modalnews4')">Подробнее</a>
                        </div>
                        <div class="news__boxbig__gradient fivegradient"></div>
                    </div>

                    <div class="news__boxsmall">
                        <div class="news__boxsmall__text">
                            <p class="news__boxsmall__text__title">Наша авиакомпания открывает новое направление в Азии!</p>
                            <a href="#" class="news__boxsmall__text__sslk" onclick="showModal('modalnews5')">Подробнее</a>
                        </div>
                        <div class="news__boxsmall__gradient fourgradient"></div>
                    </div>

                </div>

                <div class="news">

                    <div class="news__boxsmall">
                        <div class="news__boxsmall__text">
                            <p class="news__boxsmall__text__title">Партнерство с крупными отелями: специальные предложения для наших пассажиров</p>
                            <a href="#" class="news__boxsmall__text__sslk" onclick="showModal('modalnews6')">Подробнее</a>
                        </div>
                        <div class="news__boxsmall__gradient sixgradient"></div>
                    </div>

                    <div class="news__boxbig">
                        <div class="news__boxbig__text">
                            <p class="news__boxbig__text__title">Горячие новости: выгодные билеты на лето уже в продаже!</p>
                            <a href="#" class="news__boxbig__text__sslk" onclick="showModal('modalnews7')">Подробнее</a>
                        </div>
                        <div class="news__boxbig__gradient sevengradient"></div>
                    </div>

                </div>

        </div>
    </section>

    <div id="modalnews1" class="modalnews">
        <div class="modalnews__content">
        <span id="closeModalBtn" class="modalnews__content__close" onclick="closeModal('modalnews1')">&times;</span>
        <p class="modalnews__content__text">Парк пополнился тремя новыми самолетами, расширяя наши возможности и улучшая комфорт пассажиров. Новейшие модели самолетов присоединились к нашему парку, что позволит нам предлагать еще больше рейсов и разнообразных маршрутов для наших клиентов. Будьте готовы к более комфортным и удобным путешествиям!</p>
        </div>
    </div>

    <div id="modalnews2" class="modalnews">
        <div class="modalnews__content">
        <span id="closeModalBtn" class="modalnews__content__close" onclick="closeModal('modalnews2')">&times;</span>
        <p class="modalnews__content__text">Запускаем новую программу лояльности, где каждый полет приближает вас к эксклюзивным привилегиям и скидкам. Теперь каждый ваш полет с нами будет приносить вам еще больше выгоды. Наша новая программа лояльности предлагает уникальные бонусы, специальные предложения и накопление бонусных баллов, делая путешествия с нашей авиакомпанией еще более привлекательными.</p>
        </div>
    </div>

    <div id="modalnews3" class="modalnews">
        <div class="modalnews__content">
        <span id="closeModalBtn" class="modalnews__content__close" onclick="closeModal('modalnews3')">&times;</span>
        <p class="modalnews__content__text">Открываем новые льготные категории для пассажиров, делая полеты еще доступнее и удобнее. Мы постоянно работаем над улучшением условий путешествий наших клиентов. Новые льготные категории предусматривают специальные скидки и условия для определенных групп пассажиров, чтобы сделать авиаперелеты еще более выгодными.</p>
        </div>
    </div>

    <div id="modalnews4" class="modalnews">
        <div class="modalnews__content">
        <span id="closeModalBtn" class="modalnews__content__close" onclick="closeModal('modalnews4')">&times;</span>
        <p class="modalnews__content__text">Встречайте новый самолет в нашем парке - летайте с комфортом и наслаждайтесь качественным обслуживанием. Наш новый самолет современен, просторен и оснащен передовыми технологиями, чтобы обеспечить вам приятное и безопасное воздушное путешествие. Готовьтесь к комфортному полету!</p>
        </div>
    </div>

    <div id="modalnews5" class="modalnews">
        <div class="modalnews__content">
        <span id="closeModalBtn" class="modalnews__content__close" onclick="closeModal('modalnews5')">&times;</span>
        <p class="modalnews__content__text">Наша авиакомпания открывает новое направление в Азии, предлагая путешественникам уникальные возможности для открытия мира. Мы стремимся делать путешествия более увлекательными и доступными для наших клиентов. Новое направление в Азии открывает перед вами новые горизонты для удивительных приключений.</p>
        </div>
    </div>

    <div id="modalnews6" class="modalnews">
        <div class="modalnews__content">
        <span id="closeModalBtn" class="modalnews__content__close" onclick="closeModal('modalnews6')">&times;</span>
        <p class="modalnews__content__text">Партнерство с крупными отелями: специальные предложения для наших пассажиров, чтобы сделать ваше путешествие еще более запоминающимся. Наслаждайтесь привилегированным доступом к специальным предложениям от наших партнеров-отелей, обеспечивая себе незабываемые впечатления во время вашего пребывания в любой точке мира.</p>
        </div>
    </div>

    <div id="modalnews7" class="modalnews">
        <div class="modalnews__content">
        <span id="closeModalBtn" class="modalnews__content__close" onclick="closeModal('modalnews7')">&times;</span>
        <p class="modalnews__content__text">Горячие новости: выгодные билеты на лето уже в продаже, не упустите шанс отправиться в незабываемое путешествие! Специальные цены на билеты на летние месяцы уже доступны для бронирования. Поторопитесь, чтобы запланировать свой идеальный отпуск и сэкономить на путешествии.</p>
        </div>
    </div>

`

document.querySelector('#footer').innerHTML = `
<footer>
        <div class="footer">
            <div class="container">
                <img src="./img/logofooter.svg" alt="#" class="footer__img">
                <ul class="footer__nav">
                    <li class="footer__nav__li"><a href="../about-us/aboutUS.html" class="footer__nav__li bot">О нас</a></li>
                    <li class="footer__nav__li"><a href="../news/news.html" class="footer__nav__li bot">Новости</a></li>
                    <li class="footer__nav__li"><a href="../sales/sales.html" class="footer__nav__li bot">Акции</a></li>
                    <li class="footer__nav__li"><a href="../online-tablo/onlineTablo.html" class="footer__nav__li bot">Онлайн табло</a></li>
                    <li class="footer__nav__li"><a href="#" class="footer__nav__li bot">Профиль</a></li>
                </ul>
            </div>
        </div>
    </footer>
`


