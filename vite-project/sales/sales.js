document.querySelector('#header').innerHTML = `
        <div class="header">
            <div class="container">
                <ul class="nav">
                    <li class="nav__top"><a href="../index.html" class="nav__top"><img src="./img/logo.svg" alt="#" class="nav__top__logo"></a></li>
                    <li class="nav__top"><a href="../about-us/aboutUS.html" class="nav__top__sslk">О нас</a></li>
                    <li class="nav__top"><a href="../news/news.html" class="nav__top__sslk">Новости</a></li>
                    <li class="nav__top"><a href="#" class="nav__top__sslk">Акции</a></li>
                    <li class="nav__top"><a href="../online-tablo/onlineTablo.html" class="nav__top__sslk">Онлайн табло</a></li>
                    <li class="nav__top"><a href="../profil/profilreg.html" class="nav__top__sslk profil">Профиль</a></li>
                </ul>
            </div>
        </div>
`


document.querySelector('#body').innerHTML = `
    <div class="container">
        <h3 class="sales__title">Акции</h3>
        <div class="sales">

            <div class="sales__box">
                <div class="sales__box__gradient onegradient"></div>
                <div class="sales__box__text">
                    <p class="sales__box__text__title">Скидка студентам</p>
                    <a href="#" class="sales__box__text__sslk" onclick="showModal('modalsales1')">Подробнее</a>
                </div>
            </div>
    
            <div class="sales__box">
                <div class="sales__box__gradient twogradient"></div>
                <div class="sales__box__text">
                    <p class="sales__box__text__title">Билет обратно дешевле</p>
                    <a href="#" class="sales__box__text__sslk" onclick="showModal('modalsales2')">Подробнее</a>
                </div>
            </div>

            <div class="sales__box">
                <div class="sales__box__gradient threegradient"></div>
                <div class="sales__box__text">
                    <p class="sales__box__text__title">Скидки пенсионерам</p>
                    <a href="#" class="sales__box__text__sslk" onclick="showModal('modalsales3')">Подробнее</a>
                </div>
            </div>

        </div>

        <div class="sales">

            <div class="sales__box">
                <div class="sales__box__gradient fourgradient"></div>
                <div class="sales__box__text">
                    <p class="sales__box__text__title">Выгодные билеты на выходные!</p>
                    <a href="#" class="sales__box__text__sslk" onclick="showModal('modalsales4')">Подробнее</a>
                </div>
            </div>
    
            <div class="sales__box">
                <div class="sales__box__gradient fivegradient"></div>
                <div class="sales__box__text">
                    <p class="sales__box__text__title">Дети летают бесплатно</p>
                    <a href="#" class="sales__box__text__sslk" onclick="showModal('modalsales5')">Подробнее</a>
                </div>
            </div>

            <div class="sales__box">
                <div class="sales__box__gradient sixgradient"></div>
                <div class="sales__box__text">
                    <p class="sales__box__text__title">Скидка 50% на багаж</p>
                    <a href="#" class="sales__box__text__sslk" onclick="showModal('modalsales6')">Подробнее</a>
                </div>
            </div>
            
        </div>

        <div class="sales">

            <div class="sales__box">
                <div class="sales__box__gradient sevengradient"></div>
                <div class="sales__box__text">
                    <p class="sales__box__text__title">Романтический отпуск с выгодой</p>
                    <a href="#" class="sales__box__text__sslk" onclick="showModal('modalsales7')">Подробнее</a>
                </div>
            </div>
    
            <div class="sales__box">
                <div class="sales__box__gradient eightgradient"></div>
                <div class="sales__box__text">
                    <p class="sales__box__text__title">Уникальное предложение: комплексные туры с перелетом</p>
                    <a href="#" class="sales__box__text__sslk" onclick="showModal('modalsales8')">Подробнее</a>
                </div>
            </div>

            <div class="sales__box">
                <div class="sales__box__gradient ninegradient"></div>
                <div class="sales__box__text">
                    <p class="sales__box__text__title">Скидка до 30% на выбранные направления</p>
                    <a href="#" class="sales__box__text__sslk" onclick="showModal('modalsales9')">Подробнее</a>
                </div>
            </div>
            
        </div>
    </div>

    <div id="modalsales1" class="modalsales">
        <div class="modalsales__content">
        <span id="closeModalBtn" class="modalsales__content__close" onclick="closeModal('modalsales1')">&times;</span>
        <p class="modalsales__content__text">Скидка студентам - особые условия для молодежи, чтобы путешествия были доступными и выгодными. Мы предлагаем студентам специальные скидки и условия для путешествий, чтобы помочь им исследовать мир без лишних затрат.</p>
        </div>
    </div>

    <div id="modalsales2" class="modalsales">
        <div class="modalsales__content">
        <span id="closeModalBtn" class="modalsales__content__close" onclick="closeModal('modalsales2')">&times;</span>
        <p class="modalsales__content__text">Билет обратно дешевле - экономьте на путешествиях с выгодными предложениями на обратные билеты. Мы рады предложить вам экономию при приобретении обратных билетов - отличный повод добавить что-то особенное в свой маршрут.</p>
        </div>
    </div>

    <div id="modalsales3" class="modalsales">
        <div class="modalsales__content">
        <span id="closeModalBtn" class="modalsales__content__close" onclick="closeModal('modalsales3')">&times;</span>
        <p class="modalsales__content__text">Скидка пенсионерам - специальные предложения для заслуженных гостей, делающие полеты еще приятнее. Путешествуйте с нами по выгодным тарифам, которые мы разработали специально для наших зрелых пассажиров.</p>
        </div>
    </div>

    <div id="modalsales4" class="modalsales">
        <div class="modalsales__content">
        <span id="closeModalBtn" class="modalsales__content__close" onclick="closeModal('modalsales4')">&times;</span>
        <p class="modalsales__content__text">Выгодные билеты на выходные - отличный повод спланировать незабываемый отдых в выходные дни. Наслаждайтесь специальными ценами на билеты, чтобы провести уик-энд с пользой, отправляясь в незабываемое путешествие.</p>
        </div>
    </div>

    <div id="modalsales5" class="modalsales">
        <div class="modalsales__content">
        <span id="closeModalBtn" class="modalsales__content__close" onclick="closeModal('modalsales5')">&times;</span>
        <p class="modalsales__content__text">Дети летают бесплатно - радуем маленьких пассажиров и их семьи уникальными предложениями. Отдыхайте вместе с детьми, снижая расходы на их путешествия благодаря нашему особому предложению.</p>
        </div>
    </div>

    <div id="modalsales6" class="modalsales">
        <div class="modalsales__content">
        <span id="closeModalBtn" class="modalsales__content__close" onclick="closeModal('modalsales6')">&times;</span>
        <p class="modalsales__content__text">Скидка 50% на багаж - экономьте на перевозке багажа и путешествуйте с комфортом. Наслаждайтесь скидкой на дополнительный багаж, делая свое путешествие более удобным.</p>
        </div>
    </div>

    <div id="modalsales7" class="modalsales">
        <div class="modalsales__content">
        <span id="closeModalBtn" class="modalsales__content__close" onclick="closeModal('modalsales7')">&times;</span>
        <p class="modalsales__content__text">Романтический отпуск с выгодой - создайте незабываемые моменты вдвоем с нашими романтическими предложениями. Подарите себе и вашему партнеру незабываемые воспоминания, выбирая наши специальные предложения.</p>
        </div>
    </div>

    <div id="modalsales8" class="modalsales">
        <div class="modalsales__content">
        <span id="closeModalBtn" class="modalsales__content__close" onclick="closeModal('modalsales8')">&times;</span>
        <p class="modalsales__content__text">Уникальное предложение: комплексные туры с перелетом - путешествуйте легко и комфортно, выбирая оптимальные варианты отдыха. Объедините перелет с выгодным туром, чтобы создать идеальное путешествие.</p>
        </div>
    </div>

    <div id="modalsales9" class="modalsales">
        <div class="modalsales__content">
        <span id="closeModalBtn" class="modalsales__content__close" onclick="closeModal('modalsales9')">&times;</span>
        <p class="modalsales__content__text">Скидка до 30% на выбранные направления - планируйте свои приключения с выгодой, экономьте и наслаждайтесь путешествиями. Не упустите шанс сэкономить на полетах в выбранные направления, делая ваше путешествие еще более приятным.</p>
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

