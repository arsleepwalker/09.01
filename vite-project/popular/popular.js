document.querySelector('#header').innerHTML = `
        <div class="header">
            <div class="container">
                <ul class="nav">
                    <li class="nav__top"><a href="../index.html" class="nav__top"><img src="./img/logo.svg" alt="#" class="nav__top__logo"></a></li>
                    <li class="nav__top"><a href="../about-us/aboutUS.html" class="nav__top__sslk">О нас</a></li>
                    <li class="nav__top"><a href="../news/news.html" class="nav__top__sslk">Новости</a></li>
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
            <div class="sectionnapr">

                <h3 class="sectionnapr__title">Популярные направления</h3>

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



                <div class="sectionnapr__blok">
                    <div class="sectionnapr__blok__kart">
                        <img src="./img/stambul.webp" alt="#" class="sectionnapr__blok__kart__img" onclick="showModal('modalpopular5')">
                        <a href="#" class="sectionnapr__blok__kart__gorod" onclick="showModal('modalpopular5')">Стамбул</a>
                        <p class="sectionnapr__blok__kart__strana">Турция</p>
                    </div>
                    <div class="sectionnapr__blok__kart">
                        <img src="./img/tachkent.webp" alt="#" class="sectionnapr__blok__kart__img" onclick="showModal('modalpopular6')">
                        <a href="#" class="sectionnapr__blok__kart__gorod" onclick="showModal('modalpopular6')">Ташкент</a>
                        <p class="sectionnapr__blok__kart__strana">Узбекистан</p>
                    </div>
                </div>

                <div class="sectionnapr__blok">
                    <div class="sectionnapr__blok__kart">
                        <img src="./img/antalya.webp" alt="#" class="sectionnapr__blok__kart__img" onclick="showModal('modalpopular7')">
                        <a href="#" class="sectionnapr__blok__kart__gorod" onclick="showModal('modalpopular7')">Анталья</a>
                        <p class="sectionnapr__blok__kart__strana">Турция</p>
                    </div>
                    <div class="sectionnapr__blok__kart">
                        <img src="./img/dybai.webp" alt="#" class="sectionnapr__blok__kart__img" onclick="showModal('modalpopular8')">
                        <a href="#" class="sectionnapr__blok__kart__gorod" onclick="showModal('modalpopular8')">Дубай</a>
                        <p class="sectionnapr__blok__kart__strana">ОАЭ</p>
                    </div>
                </div>


            </div>
        </div>
    </section>


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



    <div id="modalpopular5" class="modalpopular">
        <div class="modalpopular__content">
        <span id="closeModalBtn" class="modalpopular__content__close" onclick="closeModal('modalpopular5')">&times;</span>
        <p class="modalpopular__content__title">Стамбул</p>
        <p class="modalpopular__content__text"> единственный город, находящийся на двух континентах, известен своими культурными памятниками и богатой историей.</p>
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
                <p class="modalpopular__content__tabl__colomn__text">3 часа 30 минут</p>
                <p class="modalpopular__content__tabl__colomn__text">3 часа 25 минут</p>
                <p class="modalpopular__content__tabl__colomn__text">5 часов</p>
                <p class="modalpopular__content__tabl__colomn__text">5 часов</p>
                <p class="modalpopular__content__tabl__colomn__text">5 часов 20 минут</p>
                <p class="modalpopular__content__tabl__colomn__text">7 часов</p>
            </div>
        </div>
        </div>
    </div>


    <div id="modalpopular6" class="modalpopular">
        <div class="modalpopular__content">
        <span id="closeModalBtn" class="modalpopular__content__close" onclick="closeModal('modalpopular6')">&times;</span>
        <p class="modalpopular__content__title">Ташкент</p>
        <p class="modalpopular__content__text"> столица Узбекистана, крупный промышленный и культурный центр Центральной Азии.</p>
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
                <p class="modalpopular__content__tabl__colomn__text">3 часа 30 минут</p>
                <p class="modalpopular__content__tabl__colomn__text">4 часа</p>
                <p class="modalpopular__content__tabl__colomn__text">4 часа 40 минут</p>
                <p class="modalpopular__content__tabl__colomn__text">3 часа 15 минут</p>
                <p class="modalpopular__content__tabl__colomn__text">4 часов 20 минут</p>
                <p class="modalpopular__content__tabl__colomn__text">7 часов</p>
            </div>
        </div>
        </div>
    </div>


    <div id="modalpopular7" class="modalpopular">
        <div class="modalpopular__content">
        <span id="closeModalBtn" class="modalpopular__content__close" onclick="closeModal('modalpopular7')">&times;</span>
        <p class="modalpopular__content__title">Анталья</p>
        <p class="modalpopular__content__text"> известен своими курортами на побережье Средиземного моря и богатой историей.</p>
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
                <p class="modalpopular__content__tabl__colomn__text">3 часа 30 минут</p>
                <p class="modalpopular__content__tabl__colomn__text">3 часа 25 минут</p>
                <p class="modalpopular__content__tabl__colomn__text">5 часов</p>
                <p class="modalpopular__content__tabl__colomn__text">5 часов</p>
                <p class="modalpopular__content__tabl__colomn__text">6 часов</p>
                <p class="modalpopular__content__tabl__colomn__text">8 часов 15 минут</p>
            </div>
        </div>
        </div>
    </div>


    <div id="modalpopular8" class="modalpopular">
        <div class="modalpopular__content">
        <span id="closeModalBtn" class="modalpopular__content__close" onclick="closeModal('modalpopular8')">&times;</span>
        <p class="modalpopular__content__title">Дубай</p>
        <p class="modalpopular__content__text">  один из семи эмиратов, богатый нефтью и природными ресурсами, известен своими небоскребами, роскошными отелями и торговыми центрами.</p>
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
                <p class="modalpopular__content__tabl__colomn__text">5 часов</p>
                <p class="modalpopular__content__tabl__colomn__text">6 часов</p>
                <p class="modalpopular__content__tabl__colomn__text">7 часов</p>
                <p class="modalpopular__content__tabl__colomn__text">7 часов</p>
                <p class="modalpopular__content__tabl__colomn__text">8 часов</p>
                <p class="modalpopular__content__tabl__colomn__text">9 часов</p>
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


