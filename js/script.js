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
