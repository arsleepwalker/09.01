document.querySelector('#header').innerHTML = `
        <div class="header">
            <div class="container">
                <ul class="nav">
                    <li class="nav__top"><a href="../index.html" class="nav__top"><img src="./img/logo.svg" alt="#" class="nav__top__logo"></a></li>
                    <li class="nav__top"><a href="#" class="nav__top__sslk">О нас</a></li>
                    <li class="nav__top"><a href="../news/news.html" class="nav__top__sslk">Новости</a></li>
                    <li class="nav__top"><a href="../sales/sales.html" class="nav__top__sslk">Акции</a></li>
                    <li class="nav__top"><a href="../online-tablo/onlineTablo.html" class="nav__top__sslk">Онлайн табло</a></li>
                    <li class="nav__top"><a href="../profil/profilreg.html" class="nav__top__sslk profil">Профиль</a></li>
                </ul>
            </div>
        </div>
`

document.querySelector('#body').innerHTML = `

    <div class="container">
    <h3 class="news__title">О нас</h3>
        <div class="aboutUS__sectionone">
            <img src="./img/stuardessa.png" alt="#" class="aboutUS__sectionone__img active">
            <img src="./img/stuardessatwo.jpg" alt="#" class="aboutUS__sectionone__img">
            <img src="./img/stuardessathree.jpg" alt="#" class="aboutUS__sectionone__img">
            <p class="aboutUS__sectionone__text">Мы — ваш надежный партнер в мире воздушных путешествий! Наша авиакомпания стремится сделать каждое ваше путешествие комфортным, безопасным и запоминающимся. 
Со дня основания мы уделяем особое внимание качеству обслуживания наших пассажиров. Наша команда профессионалов работает над тем, чтобы ваш полет был максимально приятным и беззаботным. </p>
        </div>
    </div>

    <div class="container">
        <div class="aboutUS__sectiontwo">
            <div class="aboutUS__sectiontwo__box">
                <p class="aboutUS__sectiontwo__box__title">Наш флот</p>
                <p class="aboutUS__sectiontwo__box__text">WingWave получает новые, самые современные лайнеры напрямую с заводов производителей. Пассажиры WingWave могут оценить комфорт и удобство самолетов нового поколения Airbus A320neo и Airbus A321neo.</p>
            </div>

            <div class="aboutUS__sectiontwo__box">
                <p class="aboutUS__sectiontwo__box__title">Технологии</p>
                <p class="aboutUS__sectiontwo__box__text">WingWave первой внедряет современные технологии и предлагает пассажирам самые актуальные услуги: мобильный посадочный талон, самостоятельная регистрация</p>
            </div>

            <div class="aboutUS__sectiontwo__box">
                <p class="aboutUS__sectiontwo__box__title">Бонусы</p>
                <p class="aboutUS__sectiontwo__box__text">Пассажиры авиакомпании могут получать еще больше преимуществ после регистрации в программе лояльности WW Priority. </p>
            </div>
        </div>
    </div>


    <div class="container">
        <div class="aboutUS__sectionthree">
            <h3 class="aboutUS__sectionthree__title">Контакты</h3>
            <div class="aboutUS__sectionthree__box">
                <div class="aboutUS__sectionthree__box__blok">
                    <img src="./img/tel.svg" alt="#" class="aboutUS__sectionthree__box__blok__img">
                    <div class="aboutUS__sectionthree__box__blok__text">
                        <p class="aboutUS__sectionthree__box__blok__text__title">Бесплатно по России</p>
                        <p class="aboutUS__sectionthree__box__blok__text__title">8-943-145-90-60</p>
                    </div>
                </div>

                <div class="aboutUS__sectionthree__box__blok">
                    <img src="./img/pohta.svg" alt="#" class="aboutUS__sectionthree__box__blok__img">
                    <div class="aboutUS__sectionthree__box__blok__text">
                        <p class="aboutUS__sectionthree__box__blok__text__title">Написать через</p>
                        <p class="aboutUS__sectionthree__box__blok__text__title"><a href="../index.html#sectionsix" class="aboutUS__sectionthree__box__blok__text__title__sslk">Форму обратной связи</a></p>
                    </div>
                </div>
            </div>
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



