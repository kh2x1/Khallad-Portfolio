window.onload = () => {
  window.scrollTo(0, 0);
}


let bd = document.querySelector("body");
let contioner = document.querySelector(".container");
let main = document.querySelector("main");

let p = document.querySelector("p");
let span = document.querySelector("span");

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

let mode = document.getElementById("night-mode");

div.addEventListener("click", () => {
  div.classList.toggle("open");
  topLine.classList.toggle("moveTop");
  middle.classList.toggle("moveMid");
  bottom.classList.toggle("hide");


  if(div.classList.contains("open") && matchMedia("(max-width: 430px)").matches){ 
    header.style.height = "70dvh";
    ul.style.height = "100%";
    ul.style.transition = "all 0.3s ease-in-out";
    header.style.transition = "all 0.3s ease-in-out";
    nav.style.display = "block";
    contioner.style.filter = "blur(10px)";
    contioner.style.transition = "all 0.4s ease-in-out";

  } else {
    header.style.height = "8dvh";
    ul.style.height = "0px";
    ul.style.transition = "all 0.3s ease-in-out";
    header.style.transition = "all 0.3s ease-in-out";
    nav.style.display = "none";
    contioner.style.filter = "blur(0px)";
    contioner.style.transition = "all 0.4s ease-in-out";
  }
});



window.addEventListener("scroll", () => {
  
  if (window.scrollY >=  300) {
    skills.classList.add("skillup");
    skills.classList.remove("skilldown");
    skills.style.visibility = "visible";
    skills.style.transition = "all 0.3s ease-in-out";

    

    // let scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    // let scrollPosition = window.scrollY;
    // if (scrollPosition == 300) {
    //   console.log("hhh");
    // }
  }

  if (window.scrollY < 200) {
    skills.classList.remove("skillup");
    skills.classList.add("skilldown");
    skills.style.visibility = "hidden";
    skills.style.transition = "all 0.3s ease-in-out";
  }
});




window.addEventListener("scroll", () => {
  
  if (window.scrollY >=  600) {
    experience.classList.add("skillup");
    experience.classList.remove("skilldown");
    experience.style.visibility = "visible";
    experience.style.transition = "all 0.3s ease-in-out";

    

    // let scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    // let scrollPosition = window.scrollY;
    // if (scrollPosition == 300) {
    //   console.log("hhh");
    // }
  }

  if (window.scrollY < 300) {
    experience.classList.remove("skillup");
    experience.classList.add("skilldown");
    experience.style.visibility = "hidden";
    experience.style.transition = "all 0.3s ease-in-out";
  }
});




window.addEventListener("scroll", () => {
  
  if (window.scrollY >=  900) {
    education.classList.add("skillup");
    education.classList.remove("skilldown");
    education.style.visibility = "visible";
    education.style.transition = "all 0.3s ease-in-out";

    

    // let scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    // let scrollPosition = window.scrollY;
    // if (scrollPosition == 300) {
    //   console.log("hhh");
    // }
  }

  if (window.scrollY < 600) {
    education.classList.remove("skillup");
    education.classList.add("skilldown");
    education.style.visibility = "hidden";
    education.style.transition = "all 0.3s ease-in-out";
  }
});




window.addEventListener("scroll", () => {
  
  if (window.scrollY >=  1200) {
    projects.classList.add("skillup");
    projects.classList.remove("skilldown");
    projects.style.visibility = "visible";
    projects.style.transition = "all 0.3s ease-in-out";
    // let scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    // let scrollPosition = window.scrollY;
    // if (scrollPosition == 300) {
    //   console.log("hhh");
    // }
  }

  if (window.scrollY < 900) {
    projects.classList.remove("skillup");
    projects.classList.add("skilldown");
    projects.style.visibility = "hidden";
    projects.style.transition = "all 0.3s ease-in-out";
  }
});








if (matchMedia("(min-width: 1280px)").matches) {
  window.addEventListener("scroll", () => {
  
    if (window.scrollY >=  300) {
      skills.classList.add("skillup");
      skills.classList.remove("skilldown");
      skills.style.visibility = "visible";
      skills.style.transition = "all 0.3s ease-in-out";
  
      
  
      // let scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      // let scrollPosition = window.scrollY;
      // if (scrollPosition == 300) {
      //   console.log("1");
      // }
    }
  
    if (window.scrollY < 200) {
      skills.classList.remove("skillup");
      skills.classList.add("skilldown");
      skills.style.visibility = "hidden";
      skills.style.transition = "all 0.3s ease-in-out";
    }
  });
  
  
  
  
  window.addEventListener("scroll", () => {
    
    if (window.scrollY >=  900) {
      experience.classList.add("skillup");
      experience.classList.remove("skilldown");
      experience.style.visibility = "visible";
      experience.style.transition = "all 0.3s ease-in-out";
  
      
  
      // let scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      // let scrollPosition = window.scrollY;
      // if (scrollPosition == 900) {
      //   console.log("2");
      // }
    }
  
    if (window.scrollY < 300) {
      experience.classList.remove("skillup");
      experience.classList.add("skilldown");
      experience.style.visibility = "hidden";
      experience.style.transition = "all 0.3s ease-in-out";
    }
  });
  
  
  
  
  window.addEventListener("scroll", () => {
    
    if (window.scrollY >=  1800) {
      education.classList.add("skillup");
      education.classList.remove("skilldown");
      education.style.visibility = "visible";
      education.style.transition = "all 0.3s ease-in-out";
  
      
  
      // let scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      // let scrollPosition = window.scrollY;
      // if (scrollPosition == 1800) {
      //   console.log("3");
      // }
    }
  
    if (window.scrollY < 900) {
      education.classList.remove("skillup");
      education.classList.add("skilldown");
      education.style.visibility = "hidden";
      education.style.transition = "all 0.3s ease-in-out";
    }
  });
  
  
  
  
  window.addEventListener("scroll", () => {
    
    if (window.scrollY >=  3000) {
      projects.classList.add("skillup");
      projects.classList.remove("skilldown");
      projects.style.visibility = "visible";
      projects.style.transition = "all 0.3s ease-in-out";
  
      // let scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      // let scrollPosition = window.scrollY;
      // if (scrollPosition == 3000) {
      //   console.log("4");
      // }
    }
  
    if (window.scrollY < 1800) {
      projects.classList.remove("skillup");
      projects.classList.add("skilldown");
      projects.style.visibility = "hidden";
      projects.style.transition = "all 0.3s ease-in-out";
    }
  });
}
