"use strict";

var burger = document.querySelector("#burger-menu");
var ul = document.querySelector("nav ul");
var nav = document.querySelector("nav");
burger.addEventListener("click", function () {
  ul.classList.toggle("show");
});
var navLink = document.querySelectorAll(".nav-link");
navLink.forEach(function (link) {
  return link.addEventListener("click", function () {
    ul.classList.remove("show");
  });
});