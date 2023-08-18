var swiper1 = new Swiper(".mainSwiper", {
    slidesPerView: 1,
      loop: true,   
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper2 = new Swiper(".otherRoomsSwiper", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next2",
        prevEl: ".swiper-button-prev2",
    },        
    on:{
        slideChange: function(e){
        const elPage = document.querySelector('section.roomDetail_sec2 .pagination'),
              elPrePage = elPage.querySelector('span.prePage'), 
              elAllPage = elPage.querySelector('span.allPage'); 

        elPrePage.innerText = e.realIndex+1;

        // elPage.innerHTML = `<span>${e.realIndex+1}</span> <span>/</span> <span>${e.slides.length}</span>`
        }
    }
});
