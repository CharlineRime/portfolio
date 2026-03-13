import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const carousels = document.querySelectorAll(".carousel-wrapper");

carousels.forEach((wrapper) => {
  const track = wrapper.querySelector(".carousel-track");
  const slides = Array.from(wrapper.querySelectorAll(".carousel-slide"));
  const btnLeft = wrapper.querySelector(".carousel-left");
  const btnRight = wrapper.querySelector(".carousel-right");
  let index = 0;

  function updateActiveClass() {
    slides.forEach((slide) => slide.classList.remove("active"));
    slides[index].classList.add("active");
  }

  function updateCarousel() {
    track.style.transform = `translateX(${-index * 100}%)`;
    updateActiveClass();
  }

  btnRight.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    updateCarousel();
  });

  btnLeft.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    updateCarousel();
  });

  function setSlideWidth() {
    const slideWidth = track.clientWidth;
    slides.forEach((slide) => {
      slide.style.minWidth = `${slideWidth}px`;
    });
  }

  window.addEventListener("resize", () => {
    setSlideWidth();
    updateCarousel();
  });

  setSlideWidth();
  updateCarousel();
});

// Fade in with blur animation on h1 and h2 on scroll
const h1s = document.querySelectorAll("h1");
const h2s = document.querySelectorAll("h2");

h1s.forEach((heading) => {
  gsap.to(heading, {
    opacity: 1,
    filter: "blur(0px)",
    duration: 0.4,
    scrollTrigger: {
      trigger: heading,
      start: "top 80%",
      end: "top 50%",
      scrub: false,
      markers: false,
    },
  });
});

h2s.forEach((heading) => {
  gsap.to(heading, {
    opacity: 1,
    filter: "blur(0px)",
    duration: 0.4,
    delay: 0.15,
    scrollTrigger: {
      trigger: heading,
      start: "top 80%",
      end: "top 50%",
      scrub: false,
      markers: false,
    },
  });
});

// Random shuffle function
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Fade in with blur animation for Identité Visuelle section elements in random order
const identiteElements = document.querySelectorAll(
  ".identite-visuelle-img, .identite-visuelle-video, .identite-visuelle-borne-first, .identite-visuelle-borne",
);
const shuffledElements = shuffleArray(Array.from(identiteElements));

shuffledElements.forEach((element, index) => {
  gsap.to(element, {
    opacity: 1,
    filter: "blur(0px)",
    duration: 0.6,
    delay: index * 0.2,
    scrollTrigger: {
      trigger: element,
      start: "top 85%",
      end: "top 50%",
      scrub: false,
      markers: false,
    },
  });
});

// Fade in with blur animation for Video section elements in random order
const videoElements = document.querySelectorAll(".video-section-card");
const shuffledVideoElements = shuffleArray(Array.from(videoElements));

shuffledVideoElements.forEach((element, index) => {
  gsap.to(element, {
    opacity: 1,
    filter: "blur(0px)",
    duration: 0.6,
    delay: index * 0.2,
    scrollTrigger: {
      trigger: element,
      start: "top 85%",
      end: "top 50%",
      scrub: false,
      markers: false,
    },
  });
});

// Fade in with blur animation for Web section elements in random order
const webElements = document.querySelectorAll(".web-section-card");
const shuffledWebElements = shuffleArray(Array.from(webElements));

shuffledWebElements.forEach((element, index) => {
  gsap.to(element, {
    opacity: 1,
    filter: "blur(0px)",
    duration: 0.6,
    delay: index * 0.2,
    scrollTrigger: {
      trigger: element,
      start: "top 85%",
      end: "top 50%",
      scrub: false,
      markers: false,
    },
  });
});

const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

  const elem = document.elementFromPoint(e.clientX, e.clientY);

  if (!elem) return;

  const section = elem.closest(".background-light, .background-black");

  if (!section) return;

  if (section.classList.contains("background-black")) {
    cursor.style.backgroundColor = "#4abcc9";
  } else if (section.classList.contains("background-light")) {
    cursor.style.backgroundColor = "#fe8f2d";
  }
});
