"use strict";
window.addEventListener("DOMContentLoaded", (event) => {
   /* MENU */
  const LeMenu = document.getElementById("LeMenu");
  const CmdMenu = document.getElementById("CmdMenu");
  CmdMenu.addEventListener('click',function(){
    LeMenu.style.display = (LeMenu.style.display == 'none')? '':'none';
  });
  
  // au chargement de la page
  window.onload = function(){
    // on teste la largeur de la fenêtre
    var ww = window.innerWidth; // en pixels
    LeMenu.style.display = ( ww > 768 )? '':'none';
    CmdMenu.style.display = ( ww > 768 )? 'none':'';
  };

  // au redimensionnement de la fenêtre
  window.onresize = function(){
    // on teste la largeur de la fenêtre
    var ww = window.innerWidth; // en pixels
    LeMenu.style.display = ( ww > 768 )? '':'none';
    CmdMenu.style.display = ( ww > 768 )? 'none':'';
  };

});


/*  fonction affichage mot de passe Login   */
let eyeandoff = document.querySelector(".bi");
const passwordField = document.querySelector("input[type=password]");

if(eyeandoff != undefined) {

eyeandoff.addEventListener("click", () => {
  eyeandoff.classList.toggle('bi-eye');
  eyeandoff.classList.toggle('bi-eye-slash');

  if (passwordField.type == "text"){
    passwordField.type = "password";
  }
  else {
    passwordField.type = "text";
  }

});
}

/*  fonction carousel   */
const buttons = document.querySelectorAll("[data-carousel-button")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length -1
    if (newIndex >= slides.children.length) newInddex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})