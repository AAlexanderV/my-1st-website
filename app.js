// to place header "fixed"
const header = document.querySelector(".header");
let mainImgH = document.getElementById("main_image").clientHeight;

window.addEventListener("scroll", function () {
    let scrollPos = window.scrollY;
    if (scrollPos > mainImgH) {
        header.classList.add("fixed");
        header_logo.classList.add("white");
    }
    if (scrollPos < mainImgH) {
        header.classList.remove("fixed");
        header_logo.classList.remove("white");
    }
});

// Для открывания бургер-меню (три полоски или Х)
const menu_btn = document.querySelector(".nav_toggle");
const menu_nav = document.querySelector(".nav");
const header_slogan = document.querySelector(".header_slogan");
const header_logo = document.querySelector(".header_logo");

menu_btn.addEventListener("click", function () {
    if (! menu_btn.classList.contains("active")){
        // чтобы сделать актив = крестик
        menu_btn.classList.add("active");
        // присвоить актив для нав_2
        menu_nav.classList.add("active");
        header_slogan.classList.add("hide");
        header.classList.add("red");
        header_logo.classList.add("white");
    }
    else {
        // чтобы убрать актив = три полоски
        menu_btn.classList.remove("active");
        // убрать актив для нав_2
        menu_nav.classList.remove("active");
        header_slogan.classList.remove("hide");
        header.classList.remove("red");
    }
});

// Для элементов навигации, когда кликаешь по ним, чтобы свернуло бургер-меню обратно
const nav_links = document.querySelectorAll(".nav_link");

nav_links.forEach(function (item) {
    item.addEventListener("click", function(){
        menu_btn.classList.remove("active");
        menu_nav.classList.remove("active");
        header.classList.remove("red");
        header_slogan.classList.remove("hide");
    })
});

// Для кнопок с услугами
const tabsBtn = document.querySelectorAll(".dropbtn");
const content = document.querySelectorAll(".dropdown-content")

tabsBtn.forEach(function(item){
    item.addEventListener("click", function(){
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab")
        let currentContent = document.querySelector(tabId)

        if (! currentBtn.classList.contains("active")){
            tabsBtn.forEach(function(item){
                item.classList.remove("active");
            })
    
            content.forEach(function(item){
                item.classList.remove("active");
            })
    
            currentBtn.classList.add("active");
            currentContent.classList.add("active");
        }
    })
});
// При загрузке страницы автоматом клмкает первую кнопку услуг
document.querySelector(".dropbtn").click();


// SLIDER 
let prevSliderMode = numberOfslides();
let curSliderMode = numberOfslides();

// При загрузке страницы определяет кол-во слайдов к показу
document.addEventListener("DOMContentLoaded", function(){
    sliderWfix();
});

// Выполняем заново при изменении размера окна
window.addEventListener('resize', function() {
    curSliderMode = numberOfslides();
    if (curSliderMode != prevSliderMode) {
        sliderWfix();
        prevSliderMode = curSliderMode;
    }
});

// SliderWidth fix function
function sliderWfix(){
    const swiper = new Swiper('.swiper', {
        slidesPerView: curSliderMode,
        // Optional parameters
        loop: true,
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
};

function numberOfslides (){
    let w = window.innerWidth;
    if (w >= 1200) {
        return 3;
    }
    else if ((w < 1200) && (w > 800)) {
        return 2;
    }
    else {
        return 1;
    }
};
// SLIDER 

