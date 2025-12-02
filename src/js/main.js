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

  // Si tu veux que le carousel s'adapte au resize
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

const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

  // On récupère tous les éléments sous le curseur
  const elem = document.elementFromPoint(e.clientX, e.clientY);

  if (!elem) return;

  // On remonte jusqu'à trouver la section avec background-pink ou background-black
  const section = elem.closest(".background-pink, .background-black");

  if (!section) return;

  if (section.classList.contains("background-black")) {
    cursor.style.backgroundColor = "#ffb7d9"; // rose sur fond noir
  } else if (section.classList.contains("background-pink")) {
    cursor.style.backgroundColor = "#000000"; // noir sur fond rose
  }
});

const modal = document.getElementById("videoModal");
const modalVideo = document.getElementById("modalVideo");
const closeBtn = modal.querySelector(".close");

document.querySelectorAll(".video-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const videoSrc = btn.getAttribute("data-video");

    modalVideo.src = videoSrc; // Met directement le src sur <video>
    modalVideo.load();
    modal.classList.add("show");
    modalVideo.play();
  });
});

function closeModal() {
  modal.classList.remove("show");
  modalVideo.pause();
  modalVideo.src = "";
}

closeBtn.onclick = closeModal;

window.onclick = function (e) {
  if (e.target == modal) {
    closeModal();
  }
};
