const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    slidesPerView: 'auto',
    centeredSlides: false,

   pagination: {
    el: '.swiper-pagination',
    clickable: true,
 },
});


const hiddenSlides = document.querySelectorAll(".swiper-slide-hidden, .swiper-slide-extra");
const button = document.querySelector(".open-btn button");
const images = document.querySelector(".btn-icons")
let isHidden = true;


button.addEventListener("click", () => {
  if (isHidden) {
    hiddenSlides.forEach(slide => {
      slide.classList.remove("swiper-slide-hidden", "swiper-slide-extra");
    });
    images.classList.add("btn-icons-open");
    button.textContent = "Скрыть";
    isHidden = false;

  } else {
    hiddenSlides.forEach(slide => {
      slide.classList.add("swiper-slide-hidden", "swiper-slide-extra");
    });
    images.classList.remove("btn-icons-open");
    button.textContent = "Показать все";
    isHidden = true; 
  }
});


