document.querySelector('#header').innerHTML = `
        <div class="header">
            <div class="container">
                <ul class="nav">
                    <li class="nav__top"><a href="../index.html" class="nav__top"><img src="./img/logo.svg" alt="#" class="nav__top__logo"></a></li>
                    <li class="nav__top"><a href="#" class="nav__top__sslk">О нас</a></li>
                    <li class="nav__top"><a href="../news/news.html" class="nav__top__sslk">Новости</a></li>
                    <li class="nav__top"><a href="../sales/sales.html" class="nav__top__sslk">Акции</a></li>
                    <li class="nav__top"><a href="../online-tablo/onlineTablo.html" class="nav__top__sslk">Онлайн табло</a></li>
                    <li class="nav__top"><a href="#" class="nav__top__sslk profil">Профиль</a></li>
                </ul>
            </div>
        </div>
`

document.querySelector('#body').innerHTML = `
<div class="container">
<form class="formreg" action="http://localhost/regwin/vendor/signup.php" method="post">
 
 <label class="label">Фамилия</label>
 <input class="formreg__input" type="text" name="surname" id="">

 <label class="label">Имя</label>
 <input class="formreg__input" type="text" name="name" id="">

 <label class="label">Отчество</label>
 <input class="formreg__input" type="text" name="partronymic" id="">

 <label class="label">Почта</label>
 <input class="formreg__input" type="email" name="email" id="">

 <label class="label">Серия паспорта</label>
 <input class="formreg__input" type="text" name="passport_series" id="">

 <label class="label">Номер паспорта</label>
 <input class="formreg__input" type="text" name="passport_number" id="">
 
 <label class="label">Пароль</label></label>
 <input class="formreg__input" type="password" name="password" id="">

 <label class="label">Повторите пароль</label></label>
 <input class="formreg__input" type="password" name="password_confirm" id="">
 
 <button class="formreg__btn">Зарегестрироваться</button>
 
 <p class="formreg__bot">У вас уже есть аккаунт? - <a class="formreg__bot__sslk" href="./profilvhod.html">Войти</a></p>

 </form>
</div>

`