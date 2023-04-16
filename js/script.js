let lang = {
    "pl": {
        "slogan": "Korzystanie z Internetu ma swoje nieocenione zalety, ale pamiętaj,</br> że nie jest wolne od zagrożeń.",
        "card0": "Korzystaj z weryfikacji dwoetapowej",
        "card1": "Wylogowuj się ze swoich kont, jeśli korzystałeś z nich na obcym komputerze",
        "card2": "Korzystaj tylko z sieci WiFi posiadające hasło",
        "card3": "Odwiedzaj wyłącznie bezpieczne strony, czyli takie, które posiadają certyfikat bezpieczeństwa (świadczy o nim zamknięta kłódka, którą znajdziesz na lewo od adresu strony www)",
        // "textTest": "Sprawdź jak bezpieczne jest twoje hasło",
        "textTest": "Sprawdź jak silne jest twoje hasło",
        "inputPassword": "Wprowadź tutaj",
        "check0": "Więcej niż 5",
        "check1": "Nie więcej niż 15",
        "check2": "Zawiera cyfry",
        "check3": "Zawiera znaki specjalne",
        "check4": "Nie zawiera spacji",
        // "textSecure": "Bezpieczeństwo haseł zaczyna się od ich siły.",
        "textSecure": "Co to jest silne hasło?",
        "SuggestionsSecure": "Sugestie dotyczące ulepszeń hasła",
        "advice0": "Ma co najmniej 12 znaków, ale lepiej jest co najmniej 14 znaków.",
        "advice1": "Kombinacja wielkich liter, małych liter, cyfr i symboli.",
        "advice2": "To nie wyraz, który można znaleźć w słowniku, ani nazwa osoby, znaku, produktu, organizacji, sportu lub hobby.",
        "advice3": "Znacznie inne niż poprzednie hasła.",
        "advice4": "Łatwy do zapamiętania, ale trudny do odgadnięcia przez innych. </br></br>Rozważ użycie zapadających w pamięć fraz, takich jak \"6MonkeysRLooking^\".",
        "text500": "Pobierz dodatkowe materiały",
        "download": "Pobrać",
    },
    "ua": {
        "slogan": "Користування Інтернетом має безцінні переваги, але пам’ятайте,</br> що воно не позбавлене ризиків.",
        "card0": "Використовуйте 2-етапну перевірку",
        "card1": "Вийдіть зі своїх облікових записів, якщо ви їх використовували на чужому комп’ютері",
        "card2": "Використовуйте лише мережі WiFi, які мають пароль",
        "card3": "Відвідуйте лише безпечні веб-сайти, тобто ті, які мають сертифікат безпеки (про це свідчить закритий замок, який ви знайдете зліва від адреси веб-сайту)",
        "textTest": "Перевір наскільки сильний твій пароль",
        "inputPassword": "Введення паролю",
        "check0": "Більше ніж 5",
        "check1": "Не більше ніж 15",
        "check2": "Включає цифри",
        "check3": "Включає спеціяльні знаки",
        "check4": "Не має пробілів",
        // "textSecure": "Безпека паролів залежить від їх захисту та сили",
        "textSecure": "Що таке сильний пароль?",
        "SuggestionsSecure": "Сильний пароль",
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
                <span>Safe Internet</span>
            </div>
            <div class="language-wrapper">
            <div class="pl language-text language" data-lang="pl">pl</div>
            <div class="line language-text"> | </div>
            <div class="ua language-text language" data-lang="ua">ua</div>
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
                        <div class="text-card">${lang[currentLang].card0}</div>
                    </div>
                    <div class="swiper-slide card">
                        <div class="image">
                            <img class="card-image" src="images/4.png" alt="foreign-pc">
                        </div>
                        <div class="text-card">${lang[currentLang].card1}</div>
                    </div>
                    <div class="swiper-slide card">
                        <div class="image">
                            <img class="card-image" src="images/2.png" alt="two-step-auth">
                        </div>
                        <div class="text-card">${lang[currentLang].card2}</div>
                    </div>
                    <div class="swiper-slide card">
                        <div class="image">
                            <img class="card-image" src="images/5.png" alt="safe-wifi">
                        </div>
                        <div class="text-card">${lang[currentLang].card3}</div>
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
            
            <div class="glowing">
                <div class="pass">
                    <input type="password" id="password" placeholder="${lang[currentLang].inputPassword}" onInput="check()" />
                    <div id="eye"><img id="scrToEye" src="css/eye/closed.svg" /></div>
                    <div id="bar"></div> 
                </div>
            </div>
            <div id="entropySum"></div>
        </div>

        <div class="secure">
            <div class="text-secure">${lang[currentLang].textSecure}</div>
            
            <div class="aboutEntropy">
                <img id="imgEnt" src="images/entropy.png">
                <div class="textEnt">Sprawdzanie hasła za pomocą entropii to metoda oceny siły hasła poprzez pomiar losowości.</br></br> Entropia odzwierciedla ilość informacji zawartych w haśle oraz stopień przypadkowości lub niepewności w nim zawartej. Im wyższa entropia, tym hasło jest bardziej odporne, ponieważ zawiera więcej informacji i jest trudniejsze do wybrania metodą wyszukiwania lub ataku słownikowego.</div>
            </div>

            <div class="suggestions">
            <div class="level-secure">${lang[currentLang].SuggestionsSecure}</div>
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
            </div>
        </div>
        </div>

        <div id="footer">
        <div class="footer-text">BEZVERKHNII 2023</div>
        </div>
    `


    document.querySelectorAll(".language").forEach((langItem) => {
        // console.log(123, langItem)
        langItem.addEventListener("click", (event) => {
            currentLang = event.target.dataset.lang
            // console.log(currentLang)
            render()
        })
    })


}

let swiper = new Swiper(".mySwiper", {
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
})

const eyeElement = document.getElementById("eye")
const imgElement = document.getElementById("scrToEye")
const password = document.getElementById("password")
let isOpen = false
let isVisible = false

eyeElement.addEventListener("click", function () {

    isOpen = !isOpen // инвертация 
    isVisible = !isVisible
    imgElement.src = isOpen ? "css/eye/open.svg" : "css/eye/closed.svg" // if (isOpen) {"css/eye/open.svg"} else {"css/eye/closed.svg"}
    password.type = isVisible ? "text" : "password"
});

function check() {
    let input = document.getElementById("password").value

    input = input.trim()

    document.getElementById("password").value = input
    let entropizer = new Entropizer()
    let entropy = entropizer.evaluate(input)
    const elem = document.getElementById("bar")
    let width = 0;
    console.log(entropy)

    let outputEnt = document.getElementById("entropySum")
    entropySum.innerHTML = "Entropia hasła: " + Math.round(entropy) + " bit"

    function move() {


        if (entropy >= 1 && entropy < 30) {
            elem.style.width = "15%"
            elem.style.background = "linear-gradient(149deg, #ffd684, #fff200)"
        } else if (entropy >= 30 && entropy < 50) {
            elem.style.width = "45%"
            elem.style.background = "linear-gradient(149deg, #ffd684, #ffb300)"
        } else if (entropy >= 50 && entropy < 70) {
            elem.style.width = "70%"
            elem.style.background = "linear-gradient(149deg, #ffd684, #ff6a00)"
        } else if (entropy >= 70 && entropy < 120) {
            elem.style.width = "85%"
            elem.style.background = "linear-gradient(149deg, #ffd684, #ff3700)"
        } else if (entropy >= 120) {
            elem.style.width = "100%"
            elem.style.background = "linear-gradient(149deg, #ffd684, #ff0000)"
        } else {
            elem.style.width = 0 + "%"
        }


    }


    move()

}