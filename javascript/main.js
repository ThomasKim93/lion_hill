const elBtn = document.querySelector(".more_btn");
const textBox = document.querySelector(".text_box");
const imgBox = document.querySelector(".img_box");
const acorImg = document.querySelector(".acor_wrap");
const btnClose = document.querySelector(".btn_close");

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
    figDesc.classList.add("on");
  });

  acorImg.addEventListener("mouseout", function () {
    figDesc.classList.remove("on");
  });
});
