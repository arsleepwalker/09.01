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
<form class="formreg" action="http://localhost/regwin/vendor/signin.php" method="post">
 
<label class="label">Почта</label>
<input class="formreg__input" type="text" name="email" id="">

<label class="label">Пароль</label></label>
<input class="formreg__input" type="password" name="password" id="">

<button class="formreg__btn">Войти</button>

<p class="formreg__bot">У вас нет аккаунта? - <a class="formreg__bot__sslk" href="./profilreg.html">Зарегестрируйтесь</a></p>

 </form>
</div>

`