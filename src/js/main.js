const listElem = document.querySelectorAll(".menu li a");
const menuBtn = document.querySelector(".toggle-menu-btn");
const closeBtn = document.querySelector(".close-btn");
const menuElem = document.querySelector(".menu");
const contactBtn = document.querySelector("header a.btn");
const headerElem = document.querySelector("header");
const introElem = document.querySelector("#intro");

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

window.addEventListener("scroll", () => {
  let topLev = introElem.getBoundingClientRect().top;
  if (topLev === 0) {
    headerElem.classList.remove("header-active");
  } else {
    headerElem.classList.add("header-active");
    if (topLev < -80) {
      headerElem.style.paddingBlock = "0.5rem";
    } else {
      headerElem.style.paddingBlock = "1.5rem";
    }
  }
});
