let imgToggle = document.getElementById('ImgToggle');
  imgToggle.addEventListener("click", openNavBar);
function closeImg() {
  // console.log("hello world")
  document.getElementById("Img").classList.remove('OpenedImg');
  imgToggle.removeEventListener("click", closeImg);
  imgToggle.addEventListener("click", openImg);
}
function openImg() {
  // console.log("hello");
  document.getElementById("Img").classList.add('OpenedImg');
  imgToggle.removeEventListener("click", openImg);
  imgToggle.addEventListener("click", closeImg);
}
