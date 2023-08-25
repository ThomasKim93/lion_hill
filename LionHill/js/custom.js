$(function () {
  $(".btt").click(function () {
    $(".modal-window").toggleClass("on"); //id가 "followModal"인 모달창을 열어준다.
    // $('.modal-title').text("팔로우");    //modal 의 header 부분에 "팔로우"라는 값을 넣어준다.
  });

  $('input[name="daterange"]').daterangepicker({
    opens: "center",
    locale: {
      minDate: 0,
    },
  });

  //section3 이벤트 스와이퍼
  var swiper = new Swiper(".mySwiperSec3", {
    direction: "vertical", // 세로 슬라이드로 변경
    slidesPerView: "2", // 한 화면에 슬라이드 2개로
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  $(".new_m").click(function () {
    $(".cont_reser").addClass("on"); //id가 "followModal"인 모달창을 열어준다.
    $(".cont_center").addClass("on"); //id가 "followModal"인 모달창을 열어준다.
  });

  $(".prev").click(function () {
    $(".cont_center").removeClass("on"); //id가 "followModal"인 모달창을 열어준다.
    $(".cont_reser").removeClass("on"); //id가 "followModal"인 모달창을 열어준다.
  });

  $(".close").click(function () {
    $(".modal-window").toggleClass("on");
  });

  AOS.init();

});