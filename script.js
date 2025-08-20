/* ==========toggle icon navbar ========= */
const menuIcon = document.querySelector("#menu-icon");
const navBar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navBar.classList.toggle("active");
});

/* ========== scroll sections active link ========= */

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  // document.getElementById('about').style.display='flex';
  //   document.getElementById('skills').style.display='none';
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  /* ========== sticky navbar ========= */

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.screenY > 100);

  /* ========== remove toggle icon and  navbar when click navbar link (scroll)========= */

  menuIcon.classList.remove("bx-x");
  navBar.classList.remove("active");
};

// Circle Skilss

const Circles = document.querySelectorAll(".circle");
Circles.forEach((e) => {
  let dots = e.getAttribute("data-dots");
  let marked = e.getAttribute("data-percent");
  let percent = Math.floor((dots * marked) / 100);

  let points = "";
  let rotate = 360 / dots;

  for (let i = 0; i < dots; i++) {
    points += `<div class = "points" style = "--i:${i}; --rot:${rotate}deg"></div>`;
  }
  e.innerHTML = points;

  const pointsMarked = e.querySelectorAll(".points");
  for (let i = 0; i < percent; i++) {
    pointsMarked[i].classList.add("anim");
  }
});

const skill = document.getElementById("SkillBtn");
const Education = document.getElementById("EducationBtn");

skill.addEventListener("click", () => {
  document.getElementById("about").style.display = "none";
  document.getElementById("skills").style.display = "block";
});
Education.addEventListener("click", () => {
  document.getElementById("about").style.display = "none";
  document.getElementById("myEducation").style.display = "block";
});

const AboutBtn = document.getElementById("AboutBtn");
const ExitBtn = document.getElementById("Exit");

AboutBtn.addEventListener("click", () => {
  document.getElementById("about").style.display = "flex";
  document.getElementById("skills").style.display = "none";
});
ExitBtn.addEventListener("click", () => {
  document.getElementById("about").style.display = "flex";
  document.getElementById("myEducation").style.display = "none";
});

/* *************************** Scroll Reveal **************************/
ScrollReveal({
  //  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-content , .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

/*******  Typed Js  *********/

const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer.", "Programmer."],
  typeSpeed: 150,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
