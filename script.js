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



const button = document.querySelector(".open-btn button");
button.addEventListener("click", () => {
  const hiddenSlides = document.querySelectorAll(".swiper-slide-hidden, .swiper-slide-extra");
  hiddenSlides.forEach(slide => {
    slide.classList.remove("swiper-slide-hidden", "swiper-slide-extra");
  });
  button.style.display = "block";
  button.textContent = "Скрыть";
})



