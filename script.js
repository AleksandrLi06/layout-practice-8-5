const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    // loop: true,

    slidesPerView: 'auto',
    centeredSlides: false,
    spaceBeetween: 16,

   pagination: {
    el: '.swiper-pagination',
    clickable: true,
 },
});


//   const button = document.getElementById("mybutton");
// button.addEventListener("click", () => {
//   alert("Кнопка была кликнута!");
// });
// const swiper = new Swiper('.swiper', {
//   direction: 'horizontal',
//   loop: true, // бесконечная прокрутка
//   speed: 5000,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });