let bd = document.querySelector("body");

let div = document.querySelector(".line");
let topLine = document.getElementById("top");
let middle = document.getElementById("middle");
let bottom = document.getElementById("bottom");

let header = document.querySelector("header");
let nav = document.querySelector("nav");
let ul = document.querySelector("ul");
let logo = document.querySelector(".logo");

let skills = document.getElementById("Skills");
let experience = document.getElementById("Experience");
let education = document.getElementById("Education");
let projects = document.getElementById("Projects");



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


window.addEventListener("scroll", () => {
  
  if (window.scrollY ==  300) {
    skills.style.visibility = "visible";
    skills.classList.add("skill");

    

    let scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    let scrollPosition = window.scrollY;
    if (scrollPosition == 300) {
      console.log("hhh");
    }
  }

  if (window.scrollY < 200) {
    skills.style.visibility = "hidden";
    skills.classList.remove("skill");
  }
});




window.addEventListener("scroll", () => {
  
  if (window.scrollY ==  600) {
    experience.style.visibility = "visible";
    experience.classList.add("skill");

    

    let scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    let scrollPosition = window.scrollY;
    if (scrollPosition == 300) {
      console.log("hhh");
    }
  }

  if (window.scrollY < 300) {
    experience.style.visibility = "hidden";
    experience.classList.remove("skill");
  }
});




window.addEventListener("scroll", () => {
  
  if (window.scrollY ==  900) {
    education.style.visibility = "visible";
    education.classList.add("skill");

    

    let scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    let scrollPosition = window.scrollY;
    if (scrollPosition == 300) {
      console.log("hhh");
    }
  }

  if (window.scrollY < 600) {
    education.style.visibility = "hidden";
    education.classList.remove("skill");
  }
});




window.addEventListener("scroll", () => {
  
  if (window.scrollY ==  1200) {
    projects.style.visibility = "visible";
    projects.classList.add("skill");
    // let scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    // let scrollPosition = window.scrollY;
    // if (scrollPosition == 300) {
    //   console.log("hhh");
    // }
  }

  if (window.scrollY < 900) {
    projects.style.visibility = "hidden";
    projects.classList.remove("skill");
  }
});




// div.addEventListener("mouseout", () => {
//     topLine.classList.remove("moveTop");
//     middle.classList.remove("moveMid");
//     bottom.classList.remove("hide");
//   });