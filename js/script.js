
// close navbarCollapse when click on nav-linke
let navLinks = document.querySelectorAll(".nav-link");
let navbarCollapse = document.querySelector(".navbar-collapse");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    let bsCollapse = new bootstrap.Collapse(navbarCollapse, {
      toggle: false
    });
    bsCollapse.hide();
  });
});


// remove and add class active in navLinks >> a 
let sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    let sectionTop = section.offsetTop - 100;
    let sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((a) => {
    a.classList.remove("active");

    if (a.getAttribute("href") === "#" + current) {
      a.classList.add("active");
    }
  });
  if (scrollY < 100) {
    navLinks.forEach(a => a.classList.remove("active"));
    navLinks[0].classList.add("active"); // HOME
  }
});


// Typing effect designer,developer,freelancer
let words = [
  { text: "Designer", stop: 2 },   // يسيب "De"
  { text: "Developer", stop: 0 },  // يمسح كله بعد كده
  { text: "Freelancer", stop: 0 }
];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  let element = document.getElementById("typing");
  let current = words[wordIndex];
  let next = words[(wordIndex + 1) % words.length];

  if (!isDeleting) {
    element.innerHTML = current.text.substring(0, charIndex++);
    
    if (charIndex > current.text.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }
  } else {
    // نمسح لحد النقطة المطلوبة بس
    if (charIndex > current.stop) {
      element.innerHTML = current.text.substring(0, charIndex--);
    } else {
      // نبدأ الكلمة الجديدة من نفس الحروف المشتركة
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      charIndex = current.stop;
    }
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}
typeEffect();


// Change background navbar fixed when scroll
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});



// Swiper Js for testimonials section
new Swiper(".card-wrapper", {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
