let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

let section = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header .navbar a");
let form = document.querySelector("form");
let searchicon = document.querySelector("#search-icon");
let closeserchbar = document.getElementById("close");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

section.forEach((e) => {
  e.addEventListener("click", () => {});
});

//   show the serch area

searchicon.addEventListener("click", () => {
  form.classList.remove("search-form");
});

//    close the  search area

closeserchbar.addEventListener("click", () => {
  form.classList.add("search-form");
});
