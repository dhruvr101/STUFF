var home = document.querySelector("#Home");
var image = document.querySelector("#Home>img");

home.addEventListener("mousemove", function (dets) {
  image.style.top = 1 - dets.y * 0.05 + "px";
  image.style.left = 1 - dets.x * 0.05 + "px";
});

const sign_in_btn1 = document.querySelector(".sign-in-btn1");
const sign_up_btn1 = document.querySelector(".sign-up-btn1");
const sign_in_btn2 = document.querySelector(".sign-in-btn2");
const sign_up_btn2 = document.querySelector(".sign-up-btn2");
const container = document.querySelector(".logsign-container");

sign_up_btn1.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn1.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

sign_up_btn2.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn2.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

const fulls = document.querySelector(".navbtns2");
fulls.addEventListener("click", () => {
  openWin();
});

function openWin() {
  myWindow = window.open("http://127.0.0.1:5500/");
  var innerWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  var innerHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
  var targetWidth = 800;
  var targetHeight = 600;
  myWindow.resizeBy(targetWidth - innerWidth, targetHeight - innerHeight);
}
//   myWindow.resizeTo(screen.availWidth, screen.availHeight);
// }
