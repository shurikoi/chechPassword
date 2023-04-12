let lang = {
    "pl": {
        "slogan": "Korzystanie z Internetu ma swoje nieocenione zalety, ale pamiętaj,</br> że nie jest wolne od zagrożeń.",
        // "textTest": "Sprawdź o ile bezpieczne hasło",
        "textTest": "Sprawdź czy spełnia hasło minimalne warunki",
        "inputPassword": "Wprowadź tutaj",
        "check0": "Więcej niż 5",
        "check1": "Nie więcej niż 15",
        "check2": "Zawiera cyfry",
        "check3": "Zawiera znaki specjalne",
        "check4": "Nie zawiera spacji",
        "textSecure": "Bezpieczeństwo haseł zaczyna się od ich siły.",
        "levelSecure": "Silne hasło",
        "advice0": "Jest to co najmniej 12 znaków, ale lepsze jest co najmniej 14 znaków.",
        "advice1": "Kombinacja wielkich liter, małych liter, cyfr i symboli.",
        "advice2": "To nie wyraz, który można znaleźć w słowniku, ani nazwa osoby, znaku, produktu lub organizacji.",
        "advice3": "Znacznie inne niż poprzednie hasła.",
        "advice4": "Łatwy do zapamiętania, ale trudny do odgadnięcia przez innych. </br></br>Rozważ użycie zapadających w pamięć fraz, takich jak \"6MonkeysRLooking^\".",
        "text500": "Pobierz dodatkowe materiały",
        "download": "Pobrać",
    },
    "ua": {
        "slogan": "Користування Інтернетом має безцінні переваги, але пам’ятайте,</br> що воно не позбавлене ризиків.",
        "textTest": "Перевір чи відповідає пароль мінімальним вимогам",
        "inputPassword": "Введення паролю",
        "check0": "Більше ніж 5",
        "check1": "Не більше ніж 15",
        "check2": "Включає цифри",
        "check3": "Включає спеціяльні знаки",
        "check4": "Не має пробілів",
        "textSecure": "Безпека паролів залежить від їх захисту та сили",
        "levelSecure": "Сильний пароль",
        "advice0": "Має принаймні 12 символів, але краще коли не менше 14.",
        "advice1": "Комбінація великих літер та малих, цифр і символів.",
        "advice2": "Це не вираз, який можна знайти в словнику, не назва особа, продукту чи організації.",
        "advice3": "Значно інший ніж попередні",
        "advice4": "Легкий для запам'ятовування, але складний для відгадання </br></br>Візьми на увагу використання прилипаючих до пам'яті виразів, таких як \"6MonkeysRLooking^\".",
        "text500": "Завантажити додаткові матеріяли",
        "download": "Завантажити",
    }
}

let currentLang = "pl"

render()


function render() {
    document.body.innerHTML = `
        <div id="header">
            <div class="gradient"></div>
            <div class="project-name">
                <span>Safe Internet </span>
            </div>
            <div class="language-wrapper">
                <div class="ua language-text language" data-lang="ua">ukr</div>
                <div class="line language-text"> | </div>
                <div class="pl language-text language" data-lang="pl">pl</div>
            </div>
        </div>

        <div id="main">

            <div id="slogan">${lang[currentLang].slogan}</div>

            <section class = "swiper-section">
            <div class="swiper mySwiper container">
                <div class="swiper-wrapper content">
                    <div class="swiper-slide card">
                        <div class="image">
                            <img class="card-image" src="images/3.png" alt="two-step-auth">
                        </div>
                        <div class="text-card">Korzystaj z weryfikacji dwoetapowej</div>
                    </div>
                    <div class="swiper-slide card">
                        <div class="image">
                            <img class="card-image" src="images/4.png" alt="foreign-pc">
                        </div>
                        <div class="text-card">Wylogowuj się ze swoich kont, jeśli korzystałeś z nich na obcym komputerze</div>
                    </div>
                    <div class="swiper-slide card">
                        <div class="image">
                            <img class="card-image" src="images/2.png" alt="two-step-auth">
                        </div>
                        <div class="text-card">Korzystaj tylko z sieci WiFi posiadające hasło</div>
                    </div>
                    <div class="swiper-slide card">
                        <div class="image">
                            <img class="card-image" src="images/5.png" alt="safe-wifi">
                        </div>
                        <div class="text-card">Odwiedzaj wyłącznie bezpieczne strony, czyli takie, które posiadają certyfikat bezpieczeństwa (świadczy o nim zamknięta kłódka, którą znajdziesz na lewo od adresu strony www)</div>
                    </div>
                </div>
                
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-pagination"></div>
        </section>

        <div class="container-test">
            <div class="text-test">
            ${lang[currentLang].textTest}
            </div>
            <div class="pass"><input type="text" id="password" placeholder="${lang[currentLang].inputPassword}" onInput="check()" /></div>
            <div class="indicators">
                <div id="check0">
                    <i class="far fa-check-circle"></i>${lang[currentLang].check0}
                </div>
                <div id="check1">
                    <i class="far fa-check-circle"></i>${lang[currentLang].check1}
                </div>
                <div id="check2">
                    <i class="far fa-check-circle"></i>${lang[currentLang].check2}
                </div>
                <div id="check3">
                    <i class="far fa-check-circle"></i>${lang[currentLang].check3}
                </div>
                <div id="check4">
                    <i class="far fa-check-circle"></i>${lang[currentLang].check4}
                </div>
            </div>
        </div>

        <div class="secure">
            <div class="text-secure">${lang[currentLang].textSecure}</div>
            <div class="level-secure">${lang[currentLang].levelSecure}</div>



            <div class="container-cards">
                <div class="block">
                ${lang[currentLang].advice0}
                </div>
                <div class="block">
                ${lang[currentLang].advice1}
                </div>
                <div class="block">
                ${lang[currentLang].advice2}
                </div>
                <div class="block">
                ${lang[currentLang].advice3}
                </div>
                <div class="block">
                ${lang[currentLang].advice4}
                </div>
            </div>
        </div>

        <div class="additional">
            <div class="text500">
            ${lang[currentLang].text500}
            </div>
            <div class="link-wrapper">
                <div class="link">
                    <div class="source">
                        PowerPoint:
                    </div>
                    
                    <a href="button.svg"  download="button.svg" class="download" >
                    ${lang[currentLang].download}
                    </a>
                </div>
                <div class="link">
                    <div class="source">
                        PowerPoint:
                    </div>
                    
                    <a href="button.svg"  download="button.svg" class="download" >
                    ${lang[currentLang].download}
                    </a>
                </div>
            </div>
        </div>
        </div>

        <div id="footer">
        <div class="footer-text">BEZVERKHNII 2023</div>
        </div>
    `


    document.querySelectorAll(".language").forEach((langItem) => {
        console.log(123, langItem)
        langItem.addEventListener("click", (event) => {
            currentLang = event.target.dataset.lang
            console.log(currentLang)
            render()
        })
    })

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 1,
        // loop: true,
        // loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

}



function check() {
    var input = document.getElementById("password").value;

    input = input.trim();
    document.getElementById("password").value = input;
    if (input.length >= 5) {
        document.getElementById("check0").style.color = "green";
    }
    else {
        document.getElementById("check0").style.color = "red";
    }

    if (input.length <= 15) {
        document.getElementById("check1").style.color = "green";
    }
    else {
        document.getElementById("check1").style.color = "red";
    }

    if (input.match(/[0-9]/i)) {
        document.getElementById("check2").style.color = "green";
    }
    else {
        document.getElementById("check2").style.color = "red";
    }

    if (input.match(/[^A-Za-z0-9-' ']/i)) {
        document.getElementById("check3").style.color = "green";
    }
    else {
        document.getElementById("check3").style.color = "red";
    }

    if (input.match(' ')) {
        document.getElementById("check4").style.color = "red";
    }
    else {
        document.getElementById("check4").style.color = "green";
    }

}
