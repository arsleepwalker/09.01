document.querySelector('#header').innerHTML = `
        <div class="header">
            <div class="container">
                <ul class="nav">
                    <li class="nav__top"><a href="../index.html" class="nav__top"><img src="./img/logo.svg" alt="#" class="nav__top__logo"></a></li>
                    <li class="nav__top"><a href="../about-us/aboutUS.html" class="nav__top__sslk">О нас</a></li>
                    <li class="nav__top"><a href="../news/news.html" class="nav__top__sslk">Новости</a></li>
                    <li class="nav__top"><a href="../sales/sales.html" class="nav__top__sslk">Акции</a></li>
                    <li class="nav__top"><a href="#" class="nav__top__sslk">Онлайн табло</a></li>
                    <li class="nav__top"><a href="../profil/profilreg.html" class="nav__top__sslk profil">Профиль</a></li>
                </ul>
            </div>
        </div>
`

document.querySelector('#body').innerHTML = `
    <section>
        <div class="container">
            <div class="onlineTablo">
            <h3 class="onlineTablo__title">Онлайн табло</h3>

                <div class="onlineTablo__blok">
                <div class="onlineTablo__blok__gorod">
                    <p class="onlineTablo__blok__gorod__title">Город отправления</p>
                    <input type="text" class="onlineTablo__blok__gorod__input" id="city">
                </div>
                <button class="onlineTablo__blok__btn"><a href="#" class="onlineTablo__blok__btn__sslk">Загрузить</a></button>
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


