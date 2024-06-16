const listElem = document.querySelectorAll(".menu li a");
const menuBtn = document.querySelector(".toggle-menu-btn");
const closeBtn = document.querySelector(".close-btn");
const menuElem = document.querySelector(".menu");
const contactBtn = document.querySelector("header a.btn");

listElem.forEach((li) =>
  li.addEventListener("click", () => {
    listElem.forEach((item) => item.classList.remove("active"));
    li.classList.add("active");
  })
);

menuBtn.addEventListener("click", () => {
  menuElem.style.right = "0px";
  contactBtn.style.right = "25px";
});

closeBtn.addEventListener("click", () => {
  menuElem.style.right = "-185px";
  contactBtn.style.right = "-185px";
});
