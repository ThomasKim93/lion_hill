

const sections = document.querySelectorAll(".fac_sec");

for (const div of sections) {
  const elBtn = div.querySelector(".more_btn");
  const imgBox = div.querySelector(".img_box");
  const textBox = div.querySelector(".text_box");
  const swiperBox = div.querySelector(".swiper-container");
  const btnClose = div.querySelector(".btn_close");
  elBtn.addEventListener("click", function () {
    // 1. imgBox의 너비를 100%로, textBox의 너비를 0으로 만든다.
    imgBox.style.width = "100%";
    textBox.style.width = "0";

    // 2. setTimeout을 이용하여 0.5초 후 다음 코드를 실행한다.
    setTimeout(() => {
      // imgBox와 textBox에 deactive 클래스를 추가한다.
      imgBox.classList.add("deactive");
      textBox.classList.add("deactive");

      // swiperBox에 active 클래스를 추가한다.
      swiperBox.classList.add("active");
      btnClose.classList.add("active");
    }, 1000);
  });

  btnClose.addEventListener("click", function () {
    swiperBox.classList.remove("active");
    btnClose.classList.remove("active");
    // 1. imgBox의 너비를 100%로, textBox의 너비를 0으로 만든다.

    imgBox.classList.remove("deactive");
    textBox.classList.remove("deactive");
    // 2. setTimeout을 이용하여 0.5초 후 다음 코드를 실행한다.
    setTimeout(() => {
      // imgBox와 textBox에 deactive 클래스를 추가한다.

      // swiperBox에 active 클래스를 추가한다.
      imgBox.style.width = "70%";
      textBox.style.width = "30%";
    }, 500);
  });
}
var swiper2 = new Swiper(".swiper", {
  slidesPerView: "1",
  loop: true,
  spaceBetween: 10,
  loopedSlides: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
