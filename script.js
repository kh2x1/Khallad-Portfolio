let div = document.querySelector(".line");
let topLine = document.getElementById("top");
let middle = document.getElementById("middle");
let bottom = document.getElementById("bottom");

let header = document.querySelector("header");
let nav = document.querySelector("nav");
let ul = document.querySelector("ul");
let logo = document.querySelector(".logo");


div.addEventListener("click", () => {
  div.classList.toggle("open");
  topLine.classList.toggle("moveTop");
  middle.classList.toggle("moveMid");
  bottom.classList.toggle("hide");


  if(div.classList.contains("open") && matchMedia("(max-width: 430px)").matches){ 
    header.style.height = "28dvh";
    ul.style.height = "22dvh";
    ul.style.transition = "all 0.3s ease-in-out";
    header.style.transition = "all 0.3s ease-in-out";
    nav.style.display = "block";

  } else {
    header.style.height = "9dvh";
    ul.style.height = "0";
    ul.style.transition = "all 0.3s ease-in-out";
    header.style.transition = "all 0.3s ease-in-out";
    nav.style.display = "none";
  }
});




// div.addEventListener("mouseout", () => {
//     topLine.classList.remove("moveTop");
//     middle.classList.remove("moveMid");
//     bottom.classList.remove("hide");
//   });