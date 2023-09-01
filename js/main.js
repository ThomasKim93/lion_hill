$(document).ready(function () {
  $.get("./common/common.html", function (data) {
    var headerContent = $(data).filter("header").html();
    var footerContent = $(data).filter("footer").html();

    headerContent = headerContent.replace(
      '"../common/img/wh_logo.PNG',
      '"./common/img/wh_logo.PNG'
    );
    footerContent = footerContent.replace(
      '"../common/img/wh_logo.PNG',
      '"./common/img/wh_logo.PNG'
    );

    $("header").html(headerContent);
    $("footer").html(footerContent);
  });

const elBtn = document.querySelector(".more_btn");
const textBox = document.querySelector(".text_box");
const imgBox = document.querySelector(".img_box");
const acorImg = document.querySelector(".acor_wrap");
const btnClose = document.querySelector(".acor_wrap .btn_close");

elBtn.addEventListener("click", function () {
  imgBox.classList.add("deactive");
  textBox.classList.add("deactive");
  acorImg.classList.remove("deactive");
  btnClose.style.display = "block";
});

btnClose.addEventListener("click", function () {
  imgBox.classList.remove("deactive");
  textBox.classList.remove("deactive");
  acorImg.classList.add("deactive");
  btnClose.style.display = "none";
});
const acorImages = document.querySelectorAll(".acor_img");

acorImages.forEach((acorImg) => {
  const figDesc = acorImg.querySelector(".sec2_desc");

  acorImg.addEventListener("mouseover", function () {
    acorImg.style.flex = "7";
    setTimeout(function () {
      figDesc.classList.add("on");
    }, 700);
  });

  acorImg.addEventListener("mouseout", function () {
    figDesc.classList.remove("on");
    acorImg.style.flex = "1";
    });
  });
});