let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", function () {
if (navbar.classList.value.includes("active")) {
  navbar.classList.remove("active");
}else {
  navbar.classList.add("active");
}
});

window.onscroll = () => {
  navbar.classList.remove("active");
};