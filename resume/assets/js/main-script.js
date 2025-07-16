
// Mobile Menu Toggle
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  menuBtn.innerHTML = navMenu.classList.contains("active")
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking on a link
document.querySelectorAll("#navMenu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

// Header scroll effect
let lastScrollTop = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  const scrollTop =
    window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop && scrollTop > 100) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }

  lastScrollTop = scrollTop;
});

// Animation on scroll
const animateElements = document.querySelectorAll(".animate-on-scroll");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        // Animate skill bars
        if (entry.target.classList.contains("skill-progress")) {
          const width = entry.target.getAttribute("data-width");
          entry.target.style.width = width + "%";
        }
      }
    });
  },
  {
    threshold: 0.1,
  }
);

animateElements.forEach((element) => {
  observer.observe(element);
});
function checkBars() {
  document.querySelectorAll(".skill-progress").forEach((bar) => {
    if (
      bar.getBoundingClientRect().top < window.innerHeight &&
      !bar.classList.contains("animated")
    ) {
      const width = bar.getAttribute("data-width");
      bar.style.width = width + "%";
      bar.classList.add("animated"); // تا دوباره اجرا نشود
    }
  });
}

document.addEventListener("DOMContentLoaded", checkBars);
window.addEventListener("scroll", checkBars);




// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});
const flipCard = document.getElementById("myFlipCard");

const swiper = new Swiper(".swiper", {
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  lazy: {
    loadPrevNext: true,
  },

  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },

  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
swiper.el.addEventListener('click', () => {
  swiper.autoplay.stop();
  setTimeout(() => {
    swiper.autoplay.start();
  }, 1000);
});
