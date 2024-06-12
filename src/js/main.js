const listElem = document.querySelectorAll(".menu li a");

listElem.forEach((li) =>
  li.addEventListener("click", () => {
    listElem.forEach((item) => item.classList.remove("active"));
    li.classList.add("active");
  })
);
